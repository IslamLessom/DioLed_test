import ReviewForm from "@/features/reviews/ui/ReviewForm/ReviewForm";
import "./page.css";
import { FurnitureGrid } from "@/widgets/furniture-categories";
export default function Home() {
  return (
    <>
      <FurnitureGrid />
      <ReviewForm />
    </>
  );
}
