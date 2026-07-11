import LoginPage from "@/src/app/(auth)/login/page";
import RegisterPage from "@/src/app/(auth)/register/page";
import LogoutPage from "@/src/app/(auth)/logout/page";
import Profile from "@/src/app/profile/profile";
import UpdateProfilePage from "@/src/app/profile/UpdateProfile";
import ChangePasswordPage from "@/src/app/profile/PasswordChange";
import ProductsPage from "@/src/components/products/Products";

export default function HomePage() {
  return (
    <>
      <LoginPage />
      <RegisterPage />
      <LogoutPage />
      <Profile />
      <UpdateProfilePage />
      <ChangePasswordPage />
      <ProductsPage />
    </>
  );
}
