
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CartSummary = () => {
  const { subtotal, totalItems, clearCart } = useCart();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This is a demo app. No actual payment will be processed.",
    });
    // In a real app, this would redirect to a checkout page or process
  };

  if (totalItems === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some products to your cart to get started.</p>
          <Button asChild className="bg-grocery-primary hover:bg-grocery-dark">
            <a href="/products">Start Shopping</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      {shipping > 0 && (
        <p className="text-sm text-muted-foreground mb-4">
          Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping
        </p>
      )}
      
      <Button 
        className="w-full bg-grocery-primary hover:bg-grocery-dark"
        onClick={handleCheckout}
      >
        Checkout
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      <Button 
        variant="outline"
        className="w-full mt-3 text-muted-foreground"
        onClick={clearCart}
      >
        Clear Cart
      </Button>
    </div>
  );
};

export default CartSummary;
