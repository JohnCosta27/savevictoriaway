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
            Victoria Way Carpark: Woking Needs Parking Solutions
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            We support safety-first action, but this area of Woking needs adequate parking and communication from the council
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
            <StatCard icon={Car} number="0" label="Parking Spaces Provided" />
            <StatCard icon={AlertTriangle} number="0" label="Council Updates Since Closure" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">We Thank the Council for Prioritising Safety</h3>
            <p className="text-foreground">
              We understand that Victoria Way Carpark was closed due to safety concerns, and we fully support putting public safety first. 
              The council made the right decision to act on these concerns.
            </p>
          </div>

          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            The Problems We Face Today
          </h2>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              However, since the closure, residents and workers in this area of Woking have been left without communication or parking solutions. 
              We are asking the council to address three critical issues:
            </p>
            <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] border border-border">
              <h3 className="text-2xl font-semibold text-primary mb-4">What Woking Needs:</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">1.</span>
                  <span><strong>Regular Updates:</strong> No information has been provided on safety surveys, remediation progress, or future plans for the site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">2.</span>
                  <span><strong>Parking in This Area:</strong> This part of Woking needs adequate parking facilities for residents, workers, and visitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">3.</span>
                  <span><strong>Recognition of Impact:</strong> Parents, elderly residents, disabled individuals, night workers, and local businesses face daily hardship and safety risks</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg border border-border mt-6">
              <p className="text-foreground font-medium">
                <strong>This area deserves proper parking:</strong> Without adequate parking facilities, families struggle with shopping, 
                elderly and disabled residents face accessibility challenges, night shift workers worry about safety, and local businesses lose customers.
              </p>
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
            Real stories from real Woking residents affected by this decision
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
            Sign the petition asking Woking Council to provide regular updates and adequate parking solutions for this area of Woking
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
            Help us show Woking Council that this area deserves communication, updates, and adequate parking facilities
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
          <p>© 2025 Save Victoria Way Carpark Campaign | For the residents and workers of Woking</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
