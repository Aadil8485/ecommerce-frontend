import HeroSlider from "@/src/components/home/HeroSlider";
import Carousel from "@/src/components/home/Carousel";
import LoginPage from "@/src/app/(auth)/login/page";
import RegisterPage from "@/src/app/(auth)/register/page";
import LogoutPage from "@/src/app/(auth)/logout/page";
import Profile from "@/src/app/profile/profile";
import UpdateProfilePage from "@/src/app/profile/UpdateProfile";
import ChangePasswordPage from "@/src/app/profile/PasswordChange";
import ProductsPage from "@/src/components/products/Products";
import CartPage from "@/src/components/cart/Cart";
import CheckoutPage from "@/src/components/Checkout/Checkout";
import ProductPage from "@/src/components/product/product";
import WishlistPage from "@/src/components/wishlist/wishlist";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Carousel />
      <LoginPage />
      <RegisterPage />
      <LogoutPage />
      <Profile />
      <UpdateProfilePage />
      <ChangePasswordPage />
      <ProductsPage />
      <CartPage />
      <CheckoutPage />
      <ProductPage />
      <WishlistPage />
    </>
  );
}
