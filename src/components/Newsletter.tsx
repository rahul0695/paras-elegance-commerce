
import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send the email to your backend
    console.log("Subscribing:", email);
    
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-cream-light px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl font-bold mb-4 text-navy transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Exclusive Updates & Offers
          </h2>
          <p className={cn(
            "text-navy/70 mb-8 transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
          )}>
            Subscribe to receive exclusive previews of new collections, special offers, and design inspiration directly to your inbox.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className={cn(
              "flex flex-col sm:flex-row max-w-md mx-auto gap-4 transition-all duration-700 delay-500",
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-10"
            )}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none rounded-sm"
              required
            />
            <Button 
              type="submit" 
              className="bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-sm font-medium transition-all flex items-center"
            >
              Subscribe
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </form>
          
          <p className={cn(
            "text-sm text-navy/50 mt-4 transition-all duration-700 delay-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
