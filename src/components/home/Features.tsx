
import {
  ShoppingBasket,
  Clock,
  Sparkles,
  DollarSign,
  Search,
  Leaf
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow space-y-2 animate-slide-up">
    <div className="p-3 rounded-full bg-grocery-light text-grocery-primary mb-2">
      {icon}
    </div>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Recommendations",
      description: "Get personalized product recommendations based on your preferences and purchase history."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "Smart lists and efficient shopping paths help you complete your shopping in record time."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Save Money",
      description: "AI suggests best-value alternatives and alerts you to deals on your favorite products."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search",
      description: "Find products quickly with our intelligent search that understands natural language."
    },
    {
      icon: <ShoppingBasket className="h-6 w-6" />,
      title: "Shopping Lists",
      description: "Create and manage intelligent shopping lists that learn from your habits."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco Friendly",
      description: "Discover sustainable and organic options with our eco-conscious recommendations."
    }
  ];

  return (
    <section className="py-16 bg-grocery-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Smart Features for Modern Shopping</h2>
          <p className="text-muted-foreground">
            Our AI-powered platform makes grocery shopping more efficient, personalized, and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
