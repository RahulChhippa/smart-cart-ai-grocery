
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          {product.isOrganic && (
            <div className="absolute top-2 left-2 bg-grocery-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
              <Leaf className="h-3 w-3 mr-1" />
              Organic
            </div>
          )}
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-medium text-base hover:text-grocery-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <p className="font-semibold">₹{product.price.toFixed(2)}</p>
        <Button 
          variant="outline"
          size="sm"
          className="gap-1 hover:bg-grocery-primary hover:text-white border-grocery-primary text-grocery-primary"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
