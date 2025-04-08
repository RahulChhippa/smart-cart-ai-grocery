
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import { ProductList } from "@/components/products/ProductList";
import { getRecommendedProducts } from "@/data/products";

const AIRecommendationCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationType, setRecommendationType] = useState<string>("featured");
  
  const recommendedProducts = getRecommendedProducts();
  
  const refreshRecommendations = () => {
    setIsLoading(true);
    
    // Simulate an API call to get new recommendations
    setTimeout(() => {
      // In a real app, this would fetch new recommendations from an AI service
      // For now, we'll just switch between recommendation types
      setRecommendationType(prev => prev === "featured" ? "personalized" : "featured");
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <Card className="border-2 border-grocery-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="h-5 w-5 text-grocery-primary mr-2" />
            <CardTitle className="text-xl font-bold">
              AI Recommended For You
            </CardTitle>
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={refreshRecommendations}
            disabled={isLoading}
            className="h-8 w-8"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="sr-only">Refresh Recommendations</span>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {recommendationType === "featured" 
            ? "Featured products you might like based on popular items." 
            : "Personalized recommendations based on your shopping history."}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="animate-fade-in">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full aspect-square object-cover rounded-md mb-2"
              />
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendationCard;
