import Hero from "@/src/components/home/Hero";
import Categories from "@/src/components/home/Categories";
import FeaturedProducts from "@/src/components/featured-products/FeaturedProducts";
import FlashSale from "@/src/components/home/FlashSale";
import NewArrivals from "@/src/components/home/NewArrivals";
import AIRecommendations from "@/src/components/home/AIRecommendations";
import Testimonials from "@/src/components/home/Testimonials";
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
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
