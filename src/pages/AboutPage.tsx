
import React from 'react';
import { Layout } from '@/components/Layout';
import { Book, Headphones, Heart, Info, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container max-w-3xl mx-auto px-4 py-12 animate-fade-in">
        <h1 className="text-3xl font-display font-bold text-center mb-8">
          About SmartPrep
        </h1>
        
        <Card className="mb-8 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <User className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-medium mb-2">A Personal Project</h2>
                <p className="text-muted-foreground">
                  My name is Andrew, I am a Dad of two and host of The Dopamine Slot Machine Podcast. 
                  Concerned about the use of addictive design and gamification in my daughter's edtech apps, 
                  I've built this for my daughter to use to practice for the 11+.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-medium mb-2">Free for Everyone</h2>
                <p className="text-muted-foreground">
                  I share it here freely for all to use, but do not maintain this as a 
                  commercial venture. The app is designed to be straightforward and effective without 
                  the distracting gamification elements found in many educational tools.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <Headphones className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h2 className="text-xl font-medium mb-2">The Dopamine Slot Machine Podcast</h2>
                <p className="text-muted-foreground">
                  If this app has helped you, give us a listen at{' '}
                  <a 
                    href="https://thedopamineslotmachine.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    thedopamineslotmachine.co.uk
                  </a>, 
                  or find us on Spotify/Apple Podcasts. We discuss digital wellbeing, ethical 
                  technology design, and how to create a healthier relationship with technology.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Thank you for using SmartPrep. I hope it helps your children prepare effectively without unnecessary distractions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
