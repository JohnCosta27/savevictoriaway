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
            margin: 1cm;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          nav {
            display: none !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-compact {
            padding: 0.25rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          h2 {
            font-size: 1.25rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          h3 {
            font-size: 1rem !important;
          }
          
          section {
            page-break-inside: avoid;
            padding: 0.5rem 0 !important;
          }
          
          .stat-grid {
            margin: 0.5rem 0 !important;
          }
        }
      `}</style>
      {/* Header */}
      <section className="py-6 px-6 print:py-2 print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-3 leading-tight print:text-3xl">
            Save Victoria Way Carpark
          </h1>
          <p className="text-lg md:text-xl text-foreground font-semibold mb-2 print:text-base">
            Dear Enterprise Place Residents
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-6 px-6 bg-muted print:bg-white print-compact stat-grid">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-2 print:gap-2">
            <StatCard icon={Home} number="120+" label="Households" />
            <StatCard icon={Users} number="300+" label="Residents" />
            <StatCard icon={Car} number="0" label="Parking" />
            <StatCard icon={AlertTriangle} number="0" label="Updates" />
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-6 px-6 print-compact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-3 rounded-lg border-l-4 border-primary mb-3 print:shadow-none">
            <h3 className="text-base font-semibold text-primary mb-2">What We Need:</h3>
            <ul className="space-y-1 text-foreground text-xs">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <span><strong>Regular updates</strong> on safety surveys and plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <span><strong>Parking solutions</strong> for residents</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">•</span>
                <span><strong>Recognition</strong> of safety concerns</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-6 px-6 bg-muted print:bg-white print-compact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-3 rounded-lg border border-border print:shadow-none">
            <h3 className="text-base font-semibold text-primary mb-2">Long-Term Solutions:</h3>
            <ul className="space-y-1 text-foreground text-xs">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-2">1.</span>
                <span>Access to DoubleTree Hilton underground car park (beneath Enterprise Place)</span>
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
      <section className="py-6 px-6 print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/10 border-2 border-primary p-3 rounded-lg print:shadow-none">
            <h2 className="text-xl font-bold text-primary mb-2">Make Your Voice Heard</h2>
            <p className="text-sm text-foreground mb-3">
              Join your fellow Enterprise Place residents
            </p>
            <div className="bg-card p-2 rounded-lg inline-block print:shadow-none">
              <p className="text-xs text-muted-foreground mb-1">Sign the petition:</p>
              <p className="text-lg font-bold text-primary">savevictoriawaycarpark.com</p>
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
