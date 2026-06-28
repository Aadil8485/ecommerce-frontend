import Hero from "@/src/components/home/Hero";
import Categories from "@/src/components/home/Categories";
import FeaturedProducts from "@/src/components/home/FeaturedProducts";
import FlashSale from "@/src/components/home/FlashSale";
import NewArrivals from "@/src/components/home/NewArrivals";
import AIRecommendations from "@/src/components/home/AIRecommendations";
import Newsletter from "@/src/components/home/Newsletter";
import Footer from "@/src/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FlashSale />
      <NewArrivals />
      <AIRecommendations />
      <Newsletter />
      <Footer />
    </>
  );
}
