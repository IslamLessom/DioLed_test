import ReviewForm from "../features/reviews/ui/review-form/ReviewForm";
import {
  FurnitureGridOne,
  FurnitureGridThree,
  FurnitureGridTwo,
} from "../widgets/furniture-categories/ui/furniture-grid/FurnitureGrid";
import ContactForm from "../features/contact-form/ui/ContactForm";
import SocialButton from "../shared/ui/social-button/ui/SocialButton";
import "./page.css";
import TitleInPage from "../shared/ui/title-in-page/TitleInPage";
import Advantages from "../widgets/advantages/ui/advantages/Advantages";
export default function Home() {
  return (
    <>
      <TitleInPage title="Официальный интернет-магазин мебели DioLed" />
      <div className="furniture">
        <FurnitureGridOne />
        <FurnitureGridThree />
        <FurnitureGridTwo />
      </div>
    </>
  );
}
