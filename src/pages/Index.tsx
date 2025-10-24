import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PetitionForm } from "@/components/PetitionForm";
import { StatCard } from "@/components/StatCard";
import { Home, Users, Car, AlertTriangle, MessageSquare } from "lucide-react";
import carparkHero from "@/assets/carpark-hero.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const navigate = useNavigate();
  const [signatureCount, setSignatureCount] = useState(0);

  useEffect(() => {
    fetchSignatureCount();
    
    // Set up realtime subscription for signature count
    const channel = supabase
      .channel('signature-count')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'petition_signatures'
        },
        () => {
          setSignatureCount(prev => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSignatureCount = async () => {
    const { count } = await supabase
      .from('petition_signatures')
      .select('*', { count: 'exact', head: true });
    
    setSignatureCount(count || 0);
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      comment: "I'm a single mother with two young children. Since losing Victoria Way Carpark, I have to park 15 minutes away and carry heavy shopping bags while holding my toddler's hand. It's unsafe and exhausting.",
      date: "2 days ago",
    },
    {
      name: "David Chen",
      comment: "I work night shifts at the hospital. Coming home at 2am to find no parking near my flat at Enterprise Place is terrifying. I've been followed twice walking from distant parking spots.",
      date: "5 days ago",
    },
    {
      name: "Margaret Thompson",
      comment: "I'm 72 and disabled. This carpark was my lifeline - now I struggle to visit my daughter at Enterprise Place. The council needs to understand what they've taken from us.",
      date: "1 week ago",
    },
  ];

  const scrollToPetition = () => {
    document.getElementById("petition")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${carparkHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Save Victoria Way Carpark
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Don't let Woking Council take away the only parking solution for Enterprise Place residents
          </p>
          <Button 
            size="lg" 
            onClick={scrollToPetition}
            className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg px-8 py-6 shadow-[var(--shadow-elevated)] font-semibold"
          >
            Sign the Petition Now
          </Button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon={Home} number="120+" label="Affected Households" />
            <StatCard icon={Users} number="300+" label="Residents Impacted" />
            <StatCard icon={Car} number="0" label="Alternative Parking Nearby" />
            <StatCard icon={AlertTriangle} number="Daily" label="Safety Concerns" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            The Crisis Facing Enterprise Place Residents
          </h2>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Victoria Way Carpark has been the primary parking facility for Enterprise Place residents for years. 
              Now, with its closure, over 300 residents face daily hardship, safety risks, and quality of life degradation.
            </p>
            <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] border border-border">
              <h3 className="text-2xl font-semibold text-primary mb-4">The Real Impact:</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Parents struggle to transport children safely to and from home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Elderly and disabled residents can no longer visit family easily</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Night shift workers face safety risks walking from distant parking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Emergency vehicle access has become complicated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Property values are declining as parking becomes impossible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            Hear from Your Constituents
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Real stories from real residents affected by this decision
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => navigate('/testimonies')}
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MessageSquare className="w-5 h-5" />
              Read All {signatureCount > 0 && `${signatureCount} `}Testimonies
            </Button>
          </div>
        </div>
      </section>

      {/* Petition Form */}
      <section id="petition" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Add Your Voice
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Sign the petition to urge Woking Council to save Victoria Way Carpark or provide alternative parking for Enterprise Place residents
          </p>
          <PetitionForm />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Every Signature Counts
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Help us show Woking Council that Victoria Way Carpark is essential to our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToPetition}
              className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-semibold shadow-[var(--shadow-elevated)]"
            >
              Sign the Petition
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground font-semibold"
            >
              Share This Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Save Victoria Way Carpark Campaign | For the residents of Enterprise Place, Woking</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
