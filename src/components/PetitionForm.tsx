import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const petitionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  comment: z.string().trim().max(1000, "Comment must be less than 1000 characters").optional(),
});

const anonymousSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  comment: z.string().trim().max(1000, "Comment must be less than 1000 characters").optional(),
});

interface PetitionFormProps {
  compact?: boolean;
}

export const PetitionForm = ({ compact = false }: PetitionFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input based on mode
    try {
      if (isAnonymous) {
        anonymousSchema.parse({ email: formData.email, comment: formData.comment });
      } else {
        petitionSchema.parse(formData);
      }
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
          name: isAnonymous ? 'Anonymous' : formData.name.trim(),
          email: formData.email.trim(),
          comment: formData.comment.trim() || null,
        }]);

      if (error) throw error;

      toast.success("Thank you for signing! Your voice matters.");
      setFormData({ name: "", email: "", comment: "" });
      setIsAnonymous(false);
    } catch (error) {
      console.error('Error signing petition:', error);
      toast.error("Failed to submit signature. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? 'max-w-md' : 'max-w-xl'} mx-auto`}>
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-background border-border"
          />
        </div>
      )}
      
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
      
      {isAnonymous && (
        <p className="text-sm text-muted-foreground">
          Your signature will be recorded as "Anonymous" with your email for verification.
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
