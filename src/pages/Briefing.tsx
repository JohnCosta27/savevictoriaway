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
            margin: 0;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 1cm;
          }
          
          nav {
            display: none !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-compact {
            padding: 0.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          h1 {
            font-size: 3rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          h3 {
            font-size: 1.25rem !important;
          }
          
          p {
            font-size: 1rem !important;
          }
          
          section {
            page-break-inside: avoid;
            padding: 1rem 0 !important;
          }
          
          .stat-grid {
            margin: 1.5rem 0 !important;
          }
        }
      `}</style>
      {/* Header */}
      <section className="py-8 px-6 print:py-4 print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black text-primary mb-4 leading-tight print:text-5xl print:text-black">
            SAVE VICTORIA WAY CARPARK
          </h1>
          <p className="text-3xl md:text-4xl text-foreground font-bold mb-4 print:text-2xl print:text-black">
            Dear Enterprise Place Residents
          </p>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mt-4 font-semibold print:text-lg print:text-black">
            Our carpark was closed. We now walk through town to reach our cars.
          </p>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mt-2 font-bold print:text-lg print:text-black">
            This is not safe. This is not sustainable.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-10 px-6 bg-muted print:bg-white print-compact stat-grid">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-primary text-center mb-6 print:text-black">THE IMPACT</h2>
          <div className="grid grid-cols-4 gap-4 print:gap-3">
            <StatCard icon={Home} number="120+" label="Households" />
            <StatCard icon={Users} number="300+" label="Residents" />
            <StatCard icon={Car} number="0" label="Parking" />
            <StatCard icon={AlertTriangle} number="0" label="Updates" />
          </div>
        </div>
      </section>

      {/* Demand */}
      <section className="py-10 px-6 print-compact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg border-4 border-primary print:shadow-none print:border-black text-center">
            <h3 className="text-3xl font-black text-primary mb-4 print:text-black">WHAT WE DEMAND</h3>
            <p className="text-2xl text-foreground font-black mt-4 print:text-black leading-relaxed">
              Better. Closer. Safer. Parking.
            </p>
            <p className="text-xl text-foreground font-semibold mt-4 print:text-black">
              The council must provide Enterprise Place residents with a proper parking solution.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 px-6 print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/20 border-4 border-primary p-6 rounded-lg print:shadow-none print:border-black">
            <h2 className="text-4xl font-black text-primary mb-4 print:text-black">DEMAND ACTION</h2>
            <p className="text-2xl text-foreground mb-6 font-bold print:text-black">
              Sign the Petition
            </p>
            <div className="bg-card p-4 rounded-lg inline-block print:shadow-none print:border-2 print:border-black">
              <p className="text-3xl font-black text-primary print:text-black">savevictoriaway.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-6 bg-muted border-t border-border print:bg-white print-compact">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground print:text-black">
            More info: <strong className="text-foreground print:text-black">savevictoriaway.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Briefing;
