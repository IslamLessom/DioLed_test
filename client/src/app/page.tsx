import { FurnitureGridOne } from "../widgets/furniture-categories/ui/furniture-grid/FurnitureGrid";
import TitleInPage from "../shared/ui/title-in-page/TitleInPage";
import "./page.css";
export default function Home() {
  return (
    <>
      <TitleInPage title="Официальный интернет-магазин мебели DioLed" />
      <div className="furniture">
        <FurnitureGridOne />
      </div>
    </>
  );
}
