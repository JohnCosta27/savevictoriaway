import { Home, Users, Car, AlertTriangle } from "lucide-react";
import carparkHero from "@/assets/victoria-way-carpark.jpg";
import { StatCard } from "@/components/StatCard";

const Briefing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black text-primary mb-6 leading-tight">
            Save Victoria Way Carpark
          </h1>
          <p className="text-4xl md:text-3xl text-foreground font-semibold mb-4">
            Dear Woking Residents
          </p>
          <p className="text-2xl text-muted-foreground">
            Join your neighbors in calling for parking solutions
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon={Home} number="120+" label="Affected Households" />
            <StatCard icon={Users} number="300+" label="Residents Impacted" />
            <StatCard icon={Car} number="0" label="Parking Spaces Provided" />
            <StatCard icon={AlertTriangle} number="0" label="Council Updates Since Closure" />
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Your Carpark Was Closed</h3>
            <p className="text-foreground">
              Victoria Way Carpark was closed due to safety concerns. We support the council's decision to prioritize public safety, but Enterprise Place residents deserve parking solutions.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">What Enterprise Place Needs:</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">1.</span>
                <span><strong>Regular Updates:</strong> No information has been provided on safety surveys, remediation progress, or future plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">2.</span>
                <span><strong>Parking Solutions:</strong> You need adequate parking for your vehicles—especially for night workers, families with children, and residents with disabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">3.</span>
                <span><strong>Recognition of Impact:</strong> Walking through town late at night isn't safe, and carrying shopping long distances isn't practical</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proposed Solutions */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Solutions for You</h2>
          
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">The Answer Is Right Beneath Your Feet</h3>
            <p className="text-foreground">
              The DoubleTree Hilton hotel has an underground car park that runs directly beneath Enterprise Place—beneath YOUR building. 
              Why don't you have access to parking that sits directly under your homes?
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border mb-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Short-Term Options:</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Temporary parking permits for Enterprise Place residents</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Negotiate with nearby facilities (Dukes Court, Asahi Building)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Convert unused sites to temporary parking</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Discounted rates at town centre carparks</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border">
            <h3 className="text-lg font-semibold text-primary mb-3">Long-Term Solutions:</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="flex items-start">
                <span className="text-accent mr-2">1.</span>
                <span>Provide access to DoubleTree Hilton underground car park</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">2.</span>
                <span>Repair and reopen Victoria Way Carpark</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">3.</span>
                <span>Build new multi-storey parking facility</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">4.</span>
                <span>Dedicated resident parking zones</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/10 border-2 border-primary p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-primary mb-4">Make Your Voice Heard</h2>
            <p className="text-lg text-foreground mb-6">
              Join your fellow Woking residents and hundreds of others in demanding parking solutions.
            </p>
            <div className="bg-card p-4 rounded-lg inline-block">
              <p className="text-sm text-muted-foreground mb-1">Sign the petition and learn more:</p>
              <p className="text-4xl font-bold text-primary">savevictoriawaycarpark.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Briefing;
