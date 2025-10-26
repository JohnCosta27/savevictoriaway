import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
}

export const StatCard = ({ icon: Icon, number, label }: StatCardProps) => {
  return (
    <Card className="stat-card p-6 text-center bg-card shadow-[var(--shadow-card)] border-border">
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <p className="stat-number text-4xl font-bold text-primary mb-2">{number}</p>
      <p className="stat-label text-muted-foreground">{label}</p>
    </Card>
  );
};
