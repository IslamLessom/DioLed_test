"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../../shared/ui/product-card/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CategoryPage.module.scss";
import TitleInPage from "../../shared/ui/title-in-page/TitleInPage";
import axios from "axios";
import { Product } from "../../features/favorites/components/favorite-page/FavoritePage";
import { Pagination } from "antd";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CategoryPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [busket, setBusket] = useState<number[]>([]);
  const [comparision, setComparision] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0); // Добавляем общее количество товаров
  const pathname = usePathname();
  const categoryId = pathname.split("/")[1];

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);

    const savedBusket = JSON.parse(localStorage.getItem("busket") || "[]");
    setBusket(savedBusket);

    const savedComparision = JSON.parse(
      localStorage.getItem("comparison") || "[]"
    );
    setComparision(savedComparision);

    const fetchProducts = async () => {
      try {
        if (!categoryId || isNaN(Number(categoryId))) return;

        const response = await axios.get(
          `${apiUrl ? apiUrl + "/" : ""}products?category_id=${Number(
            categoryId
          )}&page=${currentPage}&page_size=12`
        );
        setProducts(response.data.products); // Убедитесь, что ответ содержит продукты
        setTotalProducts(response.data.total); // Получаем общее количество товаров
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    if (categoryId) fetchProducts();
  }, [categoryId, currentPage]);

  const toggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    const newFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const toggleComparison = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    setComparision((prevComparison) => {
      const newComparison = prevComparison.includes(productId)
        ? prevComparison.filter((id) => id !== productId)
        : [...prevComparison, productId];

      localStorage.setItem("comparison", JSON.stringify(newComparison));
      window.dispatchEvent(new Event("comparisonUpdated"));

      return newComparison;
    });
  };

  const toggleBusket = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    const newBuskets = busket.includes(productId)
      ? busket.filter((id) => id !== productId)
      : [...busket, productId];
    setBusket(newBuskets);
    localStorage.setItem("busket", JSON.stringify(newBuskets));
    window.dispatchEvent(new Event("busketUpdated"));
  };

  const pageTitles = {
    "/218": "Люстры",
    "/283": "Точечные светильники",
    "/360": "Бра",
    "/361": "Ландшафтное освешение",
    "/362": "Настольные лампы и торшеры",
  };

  const currentTitle = pageTitles[pathname as keyof typeof pageTitles] || "";

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={styles.title}>
        <TitleInPage title={currentTitle} />
      </div>
      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <>
          <div className={styles.category}>
            {products.map((product: any, index) => (
              <div
                key={product.id}
                className={styles.category__card}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={`${pathname}/${product.id}`}>
                  <ProductCard
                    {...product}
                    isFavorite={favorites.includes(product.id)}
                    onFavoriteClick={(e) => toggleFavorite(e, product.id)}
                    isBusket={busket.includes(product.id)}
                    onBusketClick={(e) => toggleBusket(e, product.id)}
                    isComparision={comparision.includes(product.id)}
                    onComparisionClick={(e: any) =>
                      toggleComparison(e, product.id)
                    }
                  />
                </Link>
                <div
                  className={`${styles.category__card__description} ${
                    hoveredIndex === index ? styles.visible : ""
                  }`}
                >
                  <div className={styles.category__card__description_image}>
                    <Image
                      src={product?.additional_images[0]}
                      width={100}
                      height={100}
                      alt="bra"
                    />
                    <Image
                      src={product?.additional_images[1]}
                      width={100}
                      height={100}
                      alt="bra"
                    />
                  </div>
                  <div className={styles.category__card__description_price}>
                    <p>Бренд: {product.params?.["Бренд"]}</p>
                    <p>Тип установки: {product.params?.["Тип установки"]}</p>
                    <p>
                      Материал плафона: {product.params?.["Материал плафона"]}
                    </p>
                    <p>Кол. ламп: {product.params?.["Количество ламп"]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            style={{ marginTop: "20px" }}
            total={totalProducts}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} из ${total} товаров`
            }
            defaultPageSize={12}
            current={currentPage}
            onChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default CategoryPage;
