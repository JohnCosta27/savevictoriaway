import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Signature {
  id: string;
  name: string;
  comment: string | null;
  created_at: string;
}

const Testimonies = () => {
  const [signatures, setSignatures] = useState<Signature[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSignatures();
    
    // Set up realtime subscription for new signatures
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'petition_signatures'
        },
        (payload) => {
          const newSignature = payload.new as Signature;
          setSignatures(prev => [newSignature, ...prev]);
          setTotalCount(prev => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSignatures = async () => {
    try {
      // Get total count
      const { count } = await supabase
        .from('petition_signatures')
        .select('*', { count: 'exact', head: true });
      
      setTotalCount(count || 0);

      // Get signatures with comments
      const { data, error } = await supabase
        .from('petition_signatures')
        .select('*')
        .not('comment', 'is', null)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSignatures(data || []);
    } catch (error) {
      console.error('Error fetching signatures:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
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
            Real stories from residents affected by the closure of Victoria Way Carpark
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading testimonies...</p>
          </div>
        ) : signatures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No testimonies yet. Be the first to share your story!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatures.map((signature) => (
              <TestimonialCard
                key={signature.id}
                name={signature.name}
                comment={signature.comment || ""}
                date={formatDistanceToNow(new Date(signature.created_at), { addSuffix: true })}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border mt-12">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Save Victoria Way Carpark Campaign | For the residents of Enterprise Place, Woking</p>
        </div>
      </footer>
    </div>
  );
};

export default Testimonies;
