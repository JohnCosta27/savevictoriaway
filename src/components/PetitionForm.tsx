import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const petitionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  comment: z.string().trim().max(1000, "Comment must be less than 1000 characters").optional(),
});

export const PetitionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    try {
      petitionSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('petition_signatures')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          comment: formData.comment.trim() || null,
        }]);

      if (error) throw error;

      toast.success("Thank you for signing! Your voice matters.");
      setFormData({ name: "", email: "", comment: "" });
    } catch (error) {
      console.error('Error signing petition:', error);
      toast.error("Failed to submit signature. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div>
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-background border-border"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-background border-border"
        />
      </div>
      <div>
        <Textarea
          placeholder="Why is Victoria Way Carpark important to you? (Optional)"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className="bg-background border-border min-h-24"
        />
      </div>
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
