import ReviewForm from "@/features/reviews/ui/ReviewForm/ReviewForm";
import "./page.css";
import { FurnitureGrid } from "@/widgets/furniture-categories";
import Advantages from "@/widgets/advantages/ui/advantages/Advantages";
export default function Home() {
  return (
    <>
      <FurnitureGrid />
      <ReviewForm />
      <Advantages />
    </>
  );
}
