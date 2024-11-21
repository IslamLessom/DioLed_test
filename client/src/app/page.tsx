import ReviewForm from "@/features/reviews/ui/ReviewForm/ReviewForm";
import "./page.css";
import { FurnitureGrid } from "@/widgets/furniture-categories";
import Advantages from "@/widgets/advantages/ui/advantages/Advantages";
import ContactForm from "@/features/contact-form/ui/ContactForm";
export default function Home() {
  return (
    <>
      <FurnitureGrid />
      <ReviewForm />
      <Advantages />
      <ContactForm />
    </>
  );
}
