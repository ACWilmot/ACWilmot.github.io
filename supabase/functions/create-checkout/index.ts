
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    // Create a Supabase client using the service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    // Parse request body to get tier
    const { tier = 'premium' } = await req.json();
    logStep("Tier requested", { tier });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Found existing customer", { customerId });
    } else {
      // Create a new customer
      const newCustomer = await stripe.customers.create({
        email: user.email,
        name: user.user_metadata?.name || user.email,
        metadata: {
          supabase_user_id: user.id
        }
      });
      customerId = newCustomer.id;
      logStep("Created new customer", { customerId });
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";
    logStep("Origin retrieved", { origin });

    // Define pricing for different tiers - using GBP
    const tierPricing = {
      premium: {
        amount: 399, // £3.99
        name: "Premium Subscription",
        description: "Full access to all premium features"
      },
      tutor: {
        amount: 1599, // £15.99
        name: "Tutor Subscription", 
        description: "Premium features plus student management tools"
      }
    };

    const pricing = tierPricing[tier as keyof typeof tierPricing];
    if (!pricing) throw new Error(`Invalid tier: ${tier}`);

    logStep("Creating checkout session", { tier, pricing });

    // Check if customer has existing active subscriptions
    const existingSubscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      limit: 1
    });

    let checkoutMode = "subscription";
    let sessionConfig: any = {
      customer: customerId,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: { 
              name: pricing.name,
              description: pricing.description
            },
            unit_amount: pricing.amount,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      mode: checkoutMode,
      success_url: `${origin}/profile?checkoutSuccess=true&tab=subscription`,
      cancel_url: `${origin}/profile?checkoutCanceled=true&tab=subscription`,
    };

    // If customer has existing subscription, we need to handle upgrade/downgrade
    if (existingSubscriptions.data.length > 0) {
      logStep("Customer has existing subscription, creating upgrade session");
      // For subscription changes, Stripe will handle the proration automatically
      sessionConfig.subscription_data = {
        metadata: {
          previous_subscription: existingSubscriptions.data[0].id
        }
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    
    logStep("Checkout session created", { sessionId: session.id, url: session.url });
    
    if (!session.url) {
      throw new Error("No checkout URL returned from Stripe");
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
