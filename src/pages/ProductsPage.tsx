
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProductList from "@/components/products/ProductList";
import CategoryFilter from "@/components/products/CategoryFilter";
import { getProductsByCategory, Product } from "@/data/products";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Get products based on selected category
    const categoryProducts = getProductsByCategory(activeCategory);
    setProducts(categoryProducts);
  }, [activeCategory]);

  useEffect(() => {
    // Apply search filter
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Layout onSearchChange={handleSearchChange}>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shop Products</h1>
        
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          className="mb-8"
        />
        
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
