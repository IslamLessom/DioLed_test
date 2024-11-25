import ReviewForm from "@/features/reviews/ui/ReviewForm/ReviewForm";
import { FurnitureGrid } from "@/widgets/furniture-categories";
import Advantages from "@/widgets/advantages/ui/advantages/Advantages";
import ContactForm from "@/features/contact-form/ui/ContactForm";
import SocialButton from "@/shared/ui/social-button/ui/SocialButton";
import "./page.css";
export default function Home() {
  return (
    <>
      <FurnitureGrid />
      <ReviewForm />
      <Advantages />
      <ContactForm />
      <SocialButton />
    </>
  );
}
