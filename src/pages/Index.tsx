import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductList from "@/components/products/ProductList";
import AIRecommendationCard from "@/components/recommendations/AIRecommendationCard";
import { getRecommendedProducts } from "@/data/productUtils";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const featuredProducts = getRecommendedProducts();
  
  return (
    <Layout onSearchChange={setSearchTerm}>
      <Hero />
      <div className="container py-12">
        <AIRecommendationCard />
        
        <ProductList 
          title="Featured Products" 
          products={featuredProducts}
        />
      </div>
      <Features />
    </Layout>
  );
};

export default Index;
