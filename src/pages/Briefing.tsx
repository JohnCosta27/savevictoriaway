import { Home, Users, Car, AlertTriangle } from "lucide-react";
import carparkHero from "@/assets/victoria-way-carpark.jpg";
import { StatCard } from "@/components/StatCard";

const Briefing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative min-h-[400px] flex items-center justify-center text-center overflow-hidden py-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${carparkHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Victoria Way Carpark Campaign Briefing
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Quick overview of the situation and proposed solutions
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
          <h2 className="text-3xl font-bold text-primary mb-6">The Situation</h2>
          
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Safety First</h3>
            <p className="text-foreground">
              Victoria Way Carpark was closed due to safety concerns. We support the council's decision to prioritize public safety.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">What We're Asking For:</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">1.</span>
                <span><strong>Regular Updates:</strong> No information has been provided on safety surveys, remediation progress, or future plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">2.</span>
                <span><strong>Parking Solutions:</strong> This area of Woking needs adequate parking for residents, workers, and visitors</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">3.</span>
                <span><strong>Recognition of Impact:</strong> Families, elderly residents, disabled individuals, and night workers face daily hardship</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proposed Solutions */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Proposed Solutions</h2>
          
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Immediate Solution Available</h3>
            <p className="text-foreground">
              The DoubleTree Hilton hotel has an underground car park that runs directly beneath Enterprise Place. 
              Providing residents access to this existing infrastructure could solve the problem immediately.
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
            <h2 className="text-3xl font-bold text-primary mb-4">Support the Campaign</h2>
            <p className="text-lg text-foreground mb-6">
              Join hundreds of residents in calling for parking solutions and regular communication from the council.
            </p>
            <div className="bg-card p-4 rounded-lg inline-block">
              <p className="text-sm text-muted-foreground mb-1">Learn more and sign the petition:</p>
              <p className="text-xl font-bold text-primary">savevictoriawaycarpark.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Campaign Briefing - For more information visit <strong className="text-foreground">savevictoriawaycarpark.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Briefing;
