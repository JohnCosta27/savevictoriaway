import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePetitions } from "@/state";
import { useToast } from "@/hooks/use-toast";

interface PetitionFormProps {
	compact?: boolean;
}

export const PetitionForm = ({ compact = false }: PetitionFormProps) => {
	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [comment, setComment] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isAnonymous, setIsAnonymous] = useState(false);

	const { onSignPetition } = usePetitions();
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isSubmitting) {
			return;
		}

		const optionalName = name.trim().length > 0 ? name.trim() : undefined;
		const optionalComment =
			comment.trim().length > 0 ? comment.trim() : undefined;

		setIsSubmitting(true);

		await onSignPetition({
			email: email.trim(),
			name: optionalName,
			comment: optionalComment,
		});

		toast({
			title: "Success!",
			description: "Thank you for signing the petition.",
		});

		setName("");
		setEmail("");
		setComment("");

		setIsSubmitting(false);
	};

	return (
		<form
			data-testid="petition-form"
			onSubmit={handleSubmit}
			className={`space-y-4 ${compact ? "max-w-md" : "max-w-xl"} mx-auto`}
		>
			<div className="flex items-center space-x-2 mb-4 bg-muted/50 p-3 rounded-md">
				<Checkbox
					id="anonymous"
					checked={isAnonymous}
					onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
				/>
				<Label
					htmlFor="anonymous"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
				>
					Sign anonymously (only email required)
				</Label>
			</div>

			{!isAnonymous && (
				<div>
					<Input
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						minLength={1}
						maxLength={30}
						className="bg-background border-border"
					/>
				</div>
			)}

			<div>
				<Input
					type="email"
					placeholder="Your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="bg-background border-border"
				/>
			</div>

			<div>
				<Textarea
					placeholder="Why is Victoria Way Carpark important to you? (Optional)"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					minLength={5}
					maxLength={10000}
					className="bg-background border-border min-h-24"
				/>
			</div>

			{isAnonymous && (
				<p className="text-sm text-muted-foreground">
					Your signature will be recorded as "Anonymous" with your email for
					verification.
				</p>
			)}

			<Button
				type="submit"
				size="lg"
				disabled={isSubmitting}
				className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground shadow-[var(--shadow-elevated)] font-semibold disabled:opacity-50"
			>
				{isSubmitting ? "Submitting..." : "Sign the Petition"}
			</Button>
		</form>
	);
};
