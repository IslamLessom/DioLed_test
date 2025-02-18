"use client";
import { useEffect, useState } from "react";
import ProductPage from "../../../features/product-card/components/product-page/ProductPage";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ProductPageClient = ({ params }: any) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Преобразуем строку в объект
    const parsedParams = JSON.parse(params.value);

    console.log(parsedParams);
    const productId = parsedParams.product;

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://188.225.77.249:3001/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError("Товар не найден");
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      setError("ID товара отсутствует");
      setLoading(false);
    }
  }, [params.value]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};

export default ProductPageClient;
