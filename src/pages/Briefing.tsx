import { Home, Users, Car, AlertTriangle } from "lucide-react";
import carparkHero from "@/assets/victoria-way-carpark.jpg";
import { StatCard } from "@/components/StatCard";

const Briefing = () => {
  return (
    <div className="min-h-screen bg-background print:bg-white">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 1.5cm;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-compact {
            padding: 0.5rem !important;
            margin-bottom: 1rem !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          h3 {
            font-size: 1.125rem !important;
          }
          
          section {
            page-break-inside: avoid;
            padding: 0.75rem 0 !important;
          }
          
          .stat-grid {
            margin: 1rem 0 !important;
          }
        }
      `}</style>
      {/* Header */}
      <section className="py-8 px-6 print:py-4 print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-4 leading-tight print:text-4xl">
            Save Victoria Way Carpark
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-semibold mb-2 print:text-lg">
            Dear Enterprise Place Residents
          </p>
          <p className="text-base text-muted-foreground print:text-sm">
            Join your neighbors in calling for parking solutions
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 px-6 bg-muted print:bg-white print-compact stat-grid">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 print:gap-3">
            <StatCard icon={Home} number="120+" label="Affected Households" />
            <StatCard icon={Users} number="300+" label="Residents Impacted" />
            <StatCard icon={Car} number="0" label="Parking Spaces Provided" />
            <StatCard icon={AlertTriangle} number="0" label="Council Updates" />
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-8 px-6 print-compact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-4 rounded-lg border-l-4 border-primary mb-4 print:shadow-none">
            <h3 className="text-lg font-semibold text-primary mb-2">What We Need:</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <span><strong>Regular updates</strong> on safety surveys and remediation progress</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <span><strong>Parking solutions</strong> for night workers, families, and residents with disabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <span><strong>Recognition</strong> that walking through town late at night isn't safe</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-8 px-6 bg-muted print:bg-white print-compact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-4 print:shadow-none">
            <h3 className="text-lg font-semibold text-primary mb-2">The Answer Is Beneath Your Building</h3>
            <p className="text-foreground text-sm">
              The DoubleTree Hilton has an underground car park running directly beneath Enterprise Place. Why don't you have access to parking under your own homes?
            </p>
          </div>

          <div className="bg-card p-4 rounded-lg border border-border print:shadow-none">
            <h3 className="text-base font-semibold text-primary mb-3">Long-Term Solutions:</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">1.</span>
                <span>Access to DoubleTree Hilton underground car park</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">2.</span>
                <span>Repair and reopen Victoria Way Carpark</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">3.</span>
                <span>Build new multi-storey parking facility</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">4.</span>
                <span>Dedicated resident parking zones</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 px-6 print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/10 border-2 border-primary p-4 rounded-lg print:shadow-none">
            <h2 className="text-2xl font-bold text-primary mb-3">Make Your Voice Heard</h2>
            <p className="text-base text-foreground mb-4">
              Join your fellow Enterprise Place residents in demanding parking solutions.
            </p>
            <div className="bg-card p-3 rounded-lg inline-block print:shadow-none">
              <p className="text-xs text-muted-foreground mb-1">Sign the petition:</p>
              <p className="text-xl font-bold text-primary">savevictoriawaycarpark.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-6 bg-muted border-t border-border print:bg-white print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            More info: <strong className="text-foreground">savevictoriawaycarpark.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Briefing;
