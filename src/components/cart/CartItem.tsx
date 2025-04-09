
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity);
    }
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center py-4 border-b last:border-0">
      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/product/${item.id}`} className="font-medium hover:text-grocery-primary transition-colors">
          {item.name}
        </Link>
        <p className="text-sm text-muted-foreground">
          ₹{item.price.toFixed(2)} each
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center border rounded">
          <Button 
            type="button"
            variant="ghost"
            size="sm"
            className="px-2 py-1 h-8"
            onClick={decrementQuantity}
          >
            -
          </Button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-10 text-center border-0 focus:ring-0"
          />
          <Button 
            type="button"
            variant="ghost"
            size="sm"
            className="px-2 py-1 h-8"
            onClick={incrementQuantity}
          >
            +
          </Button>
        </div>
        
        <div className="w-20 text-right font-medium">
          ₹{(item.price * item.quantity).toFixed(2)}
        </div>
        
        <Button 
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-destructive"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash className="h-4 w-4" />
          <span className="sr-only">Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
