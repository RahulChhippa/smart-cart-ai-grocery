
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Apple, Beef, Carrot, Droplet, Fish, Flame, Leaf, Milk, ShoppingBasket, Wheat } from "lucide-react";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

// Map for category icons
const getCategoryIcon = (iconName: string, className = "h-4 w-4 mr-2") => {
  switch(iconName) {
    case "Apple": return <Apple className={className} />;
    case "Carrot": return <Carrot className={className} />;
    case "Milk": return <Milk className={className} />;
    case "Wheat": return <Wheat className={className} />;
    case "Beef": return <Beef className={className} />;
    case "Fish": return <Fish className={className} />;
    case "Leaf": return <Leaf className={className} />;
    case "Flame": return <Flame className={className} />;
    case "Droplet": return <Droplet className={className} />;
    case "ShoppingBasket": return <ShoppingBasket className={className} />;
    default: return <ShoppingBasket className={className} />;
  }
};

const CategoryFilter = ({ activeCategory, onCategoryChange, className }: CategoryFilterProps) => {
  return (
    <div className={cn("w-full", className)}>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 p-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.name === activeCategory ? "default" : "outline"}
              className={cn(
                "flex items-center",
                category.name === activeCategory 
                  ? "bg-grocery-primary hover:bg-grocery-dark" 
                  : "hover:text-grocery-primary hover:border-grocery-primary"
              )}
              onClick={() => onCategoryChange(category.name)}
            >
              {getCategoryIcon(category.icon)}
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
