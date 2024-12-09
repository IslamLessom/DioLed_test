import ReviewForm from "@/features/Reviews/ui/ReviewForm/ReviewForm";
import { FurnitureGrid } from "@/widgets/FurnitureCategories/ui/FurnitureGrid/FurnitureGrid";
import ContactForm from "@/features/ContactForm/ui/ContactForm";
import SocialButton from "@/shared/ui/SocialButton/ui/SocialButton";
import "./page.css";
import TitleInPage from "@/shared/ui/TitleInPage/TitleInPage";
import Advantages from "@/widgets/Advantages/ui/Advantages/Advantages";
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
