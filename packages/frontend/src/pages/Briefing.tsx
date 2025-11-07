import { Home, Users, Car, AlertTriangle } from "lucide-react";
import carparkHero from "@/assets/victoria-way-carpark.jpg";
import { StatCard } from "@/components/StatCard";

const Briefing = () => {
  return (
    <div className="min-h-screen bg-background print:bg-white">
      <style>{`
        @media print {
          @page {
            margin: 0.5cm;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          nav {
            display: none !important;
          }
          
          section {
            padding: 0.5rem !important;
            margin: 0 !important;
          }
          
          h1, h2, h3, p, span, div {
            color: #000 !important;
          }
          
          .stat-card {
            background: #fff !important;
            border: 2px solid #000 !important;
            box-shadow: none !important;
            padding: 0.5rem !important;
          }
          
          .stat-card svg {
            width: 1.5rem !important;
            height: 1.5rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          .stat-number {
            color: #000 !important;
            font-size: 1.5rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          .stat-label {
            color: #000 !important;
            font-size: 0.75rem !important;
          }
          
          svg {
            color: #000 !important;
          }
        }
      `}</style>
      {/* Header */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black text-primary mb-6 leading-tight uppercase">
            Save Victoria Way Carpark
          </h1>
          <p className="text-3xl md:text-4xl text-foreground font-semibold mb-8">
            Dear Woking Residents
          </p>
          <p className="text-xl md:text-2xl text-foreground mb-4">
            This vital carpark was closed. Parking in Woking has become chaos.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            No Parking. No Solutions. No Action.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center uppercase">The Impact</h2>
          <div className="impact-grid grid grid-cols-1 md:grid-cols-4 gap-6 print:grid-cols-4 print:gap-2">
            <StatCard icon={Home} number="120+" label="Households" />
            <StatCard icon={Users} number="300+" label="Residents" />
            <StatCard icon={Car} number="0" label="Parking" />
            <StatCard icon={AlertTriangle} number="0" label="Updates" />
          </div>
        </div>
      </section>

      {/* What We Demand */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8 uppercase">What We Demand</h2>
          
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Alternative. Accessible. Nearby. Parking.</h3>
            <p className="text-xl md:text-2xl text-foreground">
              The council must provide alternative parking in Woking. The town centre carpark is too far away.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8 uppercase">Demand Action</h2>
          <div className="bg-primary/10 border-2 border-primary p-8 rounded-lg">
            <h3 className="text-4xl font-bold text-primary mb-6">Sign the Petition</h3>
            <p className="text-5xl md:text-6xl font-bold text-primary">savevictoriaway.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Briefing;
