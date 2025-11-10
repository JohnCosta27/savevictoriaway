import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Index from "./pages/Index";
import Testimonies from "./pages/Testimonies";
import Contact from "./pages/Contact";
import Briefing from "./pages/Briefing";
import NotFound from "./pages/NotFound";
import { PetitionStateProvider } from "./state";

const App = () => (
	<PetitionStateProvider>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/testimonies" element={<Testimonies />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/briefing" element={<Briefing />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</PetitionStateProvider>
);

export default App;
