import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  comment: string;
  date: string;
}

export const TestimonialCard = ({ name, comment, date }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-[var(--transition-smooth)] border-border">
      <div className="flex items-start gap-4">
        <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-foreground mb-4 leading-relaxed">{comment}</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-primary">{name}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
