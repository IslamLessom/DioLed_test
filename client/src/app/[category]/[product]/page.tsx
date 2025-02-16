import { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  console.log(params.product);
  try {
    const response = await fetch(
      `${apiUrl ? apiUrl + "/" : ""}products/${params.product}`
    );
    const data = await response.json();
    return {
      title: `Product ${data.product_name}`,
    };
  } catch (error) {
    console.error("Ошибка получения данных о товаре", error);
    return {
      title: "Товар не найден",
    };
  }
}

const Page = ({ params }: any) => {
  return <ProductPageClient productData={params.productData} params={params} />;
};

export default Page;
