import ReviewForm from "../features/reviews/ui/review-form/ReviewForm";
import { FurnitureGrid } from "../widgets/furniture-categories/ui/furniture-grid/FurnitureGrid";
import ContactForm from "../features/contact-form/ui/ContactForm";
import SocialButton from "../shared/ui/social-button/ui/SocialButton";
import "./page.css";
import TitleInPage from "../shared/ui/title-in-page/TitleInPage";
import Advantages from "../widgets/advantages/ui/advantages/Advantages";
export default function Home() {
  return (
    <>
      <TitleInPage title="Официальный интернет-магазин мебели DioLed" />
      <FurnitureGrid />
      <ReviewForm />
      <Advantages />
      <ContactForm
        title="Остались вопросы"
        description="Позвоните или напишите нашим менеджерам, они помогут грамотными советами по выбору именно той мебели, которая подойдет вашему помещению больше всего."
      />
      <SocialButton />
    </>
  );
}
