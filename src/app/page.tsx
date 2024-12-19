import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { fetchProducts } from '@/utils/api';

const Home = async () => {
  const products = await fetchProducts(1, 12);

  return (
    <main className="container mx-auto p-4">
      <HeroSection />
      <ProductGrid products={products} />
    </main>
  );
};

export default Home;
