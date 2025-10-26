import { NavLink } from "react-router-dom";
import { Home, MessageSquare, Mail } from "lucide-react";

export const Navbar = () => {
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1.5 px-2 sm:px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-accent text-accent-foreground font-semibold"
        : "text-foreground hover:bg-accent/50"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold text-primary">
              Save Victoria Way Carpark
            </h1>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 justify-center">
            <NavLink to="/" end className={getNavClass}>
              <Home size={18} />
              <span className="text-sm sm:text-base">Home</span>
            </NavLink>
            <NavLink to="/testimonies" className={getNavClass}>
              <MessageSquare size={18} />
              <span className="text-sm sm:text-base">Testimonies</span>
            </NavLink>
            <NavLink to="/contact" className={getNavClass}>
              <Mail size={18} />
              <span className="text-sm sm:text-base">Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
