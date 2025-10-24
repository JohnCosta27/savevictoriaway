import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Have questions or want to share your story? Get in touch.
        </p>

        <Card className="shadow-[var(--shadow-elevated)]">
          <CardHeader>
            <CardTitle className="text-2xl">Campaign Organizer</CardTitle>
            <CardDescription>
              Reach out to learn more about the campaign or share your experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <User className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="text-lg font-semibold text-foreground">John Costa</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:victoriaway@johncosta.tech"
                  className="text-lg font-semibold text-accent hover:underline"
                >
                  victoriaway@johncosta.tech
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => window.location.href = 'mailto:victoriaway@johncosta.tech'}
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </Button>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-lg mb-3">About This Campaign</h3>
              <p className="text-muted-foreground leading-relaxed">
                This campaign represents the voices of residents, workers, and families affected by the closure 
                of Victoria Way Carpark. We believe in constructive dialogue and are committed to working with 
                the council to find practical solutions that serve the Woking community.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
