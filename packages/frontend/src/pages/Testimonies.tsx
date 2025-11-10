import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, Users } from "lucide-react";

interface Signature {
	id: string;
	name: string;
	comment: string | null;
	created_at: string;
}

const Testimonies = () => {
	const [signatures, setSignatures] = useState<Signature[]>([]);
	const [totalCount, setTotalCount] = useState(0);
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
				<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					<Button
						variant="ghost"
						onClick={() => navigate("/")}
						className="gap-2"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Campaign
					</Button>
					<div className="flex items-center gap-2 text-primary">
						<Users className="w-5 h-5" />
						<span className="font-semibold">{totalCount} Signatures</span>
					</div>
				</div>
			</header>

			{/* Content */}
			<main className="max-w-6xl mx-auto px-6 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
						Community Testimonies
					</h1>
					<p className="text-xl text-muted-foreground">
						Real stories from residents affected by the closure of Victoria Way
						Carpark
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{signatures.map((signature) => (
						<TestimonialCard
							key={signature.id}
							name={signature.name}
							comment={signature.comment || ""}
							date={formatDistanceToNow(new Date(signature.created_at), {
								addSuffix: true,
							})}
						/>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="py-8 px-6 bg-card border-t border-border mt-12">
				<div className="max-w-6xl mx-auto text-center text-muted-foreground">
					<p>
						© 2025 Save Victoria Way Carpark Campaign | For the residents of
						Enterprise Place, Woking
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Testimonies;
