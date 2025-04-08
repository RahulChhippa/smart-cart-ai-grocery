
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-grocery-light py-16 md:py-24">
      <div className="container">
        <div className="max-w-xl space-y-4 animate-fade-in">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-white">
            <Sparkles className="mr-1 h-3.5 w-3.5 text-grocery-primary" />
            <span>AI-Powered Grocery Shopping</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Smart Grocery Shopping<br/> 
            <span className="text-grocery-primary">Powered by AI</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Personalized recommendations, smart shopping lists, and a seamless
            shopping experience designed to save you time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-grocery-primary hover:bg-grocery-dark">
              <Link to="/products">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-grocery-primary text-grocery-primary hover:bg-grocery-primary hover:text-white">
              <Link to="/">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
