import { Metadata } from "next";
import ProductPage from "../../../features/product-card/components/product-page/ProductPage";
import { productsMockDate } from "../../../../mockDate";
import styles from "./page.module.scss";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Product ${params.product}`,
  };
}

const Page = ({ params }: any) => {
  const product = productsMockDate.find(
    (item) => item.id === Number(params.product)
  );

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return <ProductPage product={product} />;
};

export default Page;
