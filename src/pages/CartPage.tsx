
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, totalItems } = useCart();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart {totalItems > 0 && `(${totalItems} items)`}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added any products to your cart yet.
                </p>
                <Button asChild className="bg-grocery-primary hover:bg-grocery-dark">
                  <Link to="/products">Start Shopping</Link>
                </Button>
              </div>
            )}
          </div>
          
          <div>
            <CartSummary />
            
            {cartItems.length > 0 && (
              <div className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-3">Need more items?</h3>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
