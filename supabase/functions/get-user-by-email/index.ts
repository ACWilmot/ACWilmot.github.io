
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''

    // Create a Supabase client with the service role key for admin privileges
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)
    
    // Get the request body
    const { email } = await req.json()

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Use the admin API to look up a user by email
    // Note: In Supabase v2, getUserByEmail is not part of auth.admin
    // We'll use auth.admin.listUsers to find the user by email instead
    const { data: users, error: listError } = await supabase.auth.admin.listUsers({
      filter: {
        email: email
      }
    })

    if (listError) {
      console.error('Error looking up user by email:', listError)
      return new Response(
        JSON.stringify({ error: listError.message }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // Look for the matching user
    const user = users?.users?.find(u => u.email?.toLowerCase() === email.toLowerCase())

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      )
    }

    // Return the user ID and email
    return new Response(
      JSON.stringify({ id: user.id, email: user.email }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
