import Hero from "@/src/components/home/Hero";
import Categories from "@/src/components/home/Categories";
import FeaturedProducts from "@/src/components/featured-products/FeaturedProducts";
import FlashSale from "@/src/components/home/FlashSale";
import NewArrivals from "@/src/components/home/NewArrivals";
import AIRecommendations from "@/src/components/home/AIRecommendations";
import Testimonials from "@/src/components/home/Testimonials";
import Newsletter from "@/src/components/home/Newsletter";
import Footer from "@/src/components/layout/Footer";
import LoginPage from "@/src/app/(auth)/login/page";
import RegisterPage from "@/src/app/(auth)/register/page";
import LogoutPage from "@/src/app/(auth)/logout/page";
import Profile from "@/src/app/profile/profile";
import UpdateProfilePage from "@/src/app/profile/UpdateProfile";
import ChangePasswordPage from "@/src/app/profile/PasswordChange";

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
      <LoginPage />
      <RegisterPage />
      <LogoutPage />
      <Profile />
      <UpdateProfilePage />
      <ChangePasswordPage />
    </>
  );
}
