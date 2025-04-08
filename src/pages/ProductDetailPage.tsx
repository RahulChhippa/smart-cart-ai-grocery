
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingCart, ArrowLeft } from "lucide-react";
import { getProductById, Product } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Add to cart multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">Sorry, the product you're looking for doesn't seem to exist.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/products" className="flex items-center text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                {product.isOrganic && (
                  <span className="ml-3 bg-grocery-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Leaf className="h-3 w-3 mr-1" />
                    Organic
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-grocery-primary">${product.price.toFixed(2)}</p>
              <p className="text-muted-foreground mt-2">{product.description}</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decrementQuantity}
                >
                  -
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={incrementQuantity}
                >
                  +
                </Button>
              </div>
            </div>

            <Button 
              className="w-full bg-grocery-primary hover:bg-grocery-dark"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>

            <Tabs defaultValue="nutrition">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
                <TabsTrigger value="details">Product Details</TabsTrigger>
              </TabsList>
              <TabsContent value="nutrition" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b">
                    <span>Calories</span>
                    <span className="font-medium">{product.nutritionalInfo.calories}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Protein</span>
                    <span className="font-medium">{product.nutritionalInfo.protein}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Carbohydrates</span>
                    <span className="font-medium">{product.nutritionalInfo.carbs}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Fat</span>
                    <span className="font-medium">{product.nutritionalInfo.fat}g</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b">
                    <span>Category</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Availability</span>
                    <span className="font-medium">{product.inStock ? "In Stock" : "Out of Stock"}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Product ID</span>
                    <span className="font-medium">{product.id}</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
