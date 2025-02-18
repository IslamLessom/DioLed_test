"use client";
import React, { useEffect, useState } from "react";
import styles from "./AdminProduct.module.scss";
import Image from "next/image";
import axios from "axios";
import { usePathname } from "next/navigation";
import { Pagination, Modal, Input, Button, Checkbox } from "antd";
import { MdDelete } from "react-icons/md";
import { CiEdit, CiSquarePlus } from "react-icons/ci";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const AdminProduct = () => {
  const [products, setProducts] = useState<any>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [newProduct, setNewProduct] = useState<any>({
    product_name: "",
    base_price: "",
    brand: "",
    category_id: "",
    description: "",
    vendor_code: "",
    announcement_image_url: "",
    additional_images: "",
    url: "",
    params: "",
    delivery: false,
    pickup: false,
    store: false,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://188.225.77.249:3001/products?page=${currentPage}&page_size=12`
        );
        setProducts(response.data.products);
        setTotalProducts(response.data.total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://188.225.77.249:3001/products/${id}`);
      setProducts(products.filter((p: any) => p.id !== id));
    } catch (error) {
      console.log("Ошибка при удалении товара:", error);
    }
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://188.225.77.249:3001/products/${editingProduct.id}`,
        editingProduct
      );
      setProducts(
        products.map((p: any) =>
          p.id === editingProduct.id ? editingProduct : p
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      console.log("Ошибка при обновлении товара:", error);
    }
  };
  const handleAddProduct = async () => {
    try {
      const params = {
        brand: newProduct.brand,
        lamps_count: newProduct.lamps_count,
        decor_material: newProduct.decor_material,
        shade_material: newProduct.shade_material,
        main_color: newProduct.main_color,
        remote_control: newProduct.remote_control,
        series: newProduct.series,
        installation_type: newProduct.installation_type,
        light_color: newProduct.light_color,
        socket: newProduct.socket,
      };

      const response = await axios.post(`http://188.225.77.249:3001/products`, {
        product_name: newProduct.product_name,
        vendor_code: newProduct.vendor_code,
        description: newProduct.description,
        brand: newProduct.brand,
        base_price: newProduct.base_price,
        announcement_image_url: newProduct.announcement_image_url,
        additional_images: newProduct.additional_images
          .split(",")
          .map((img: string) => img.trim()),
        url: newProduct.url,
        store: newProduct.store,
        pickup: newProduct.pickup,
        delivery: newProduct.delivery,
        category_id: newProduct.category_id,
        params: params, // передаем объект с параметрами
      });

      setProducts([...products, response.data]);
      setIsAddModalOpen(false);
      setNewProduct({
        product_name: "",
        vendor_code: "",
        description: "",
        brand: "",
        base_price: "",
        announcement_image_url: "",
        additional_images: "",
        url: "",
        store: false,
        pickup: false,
        delivery: false,
        category_id: "",
        params: {},
      });
    } catch (error) {
      console.log("Ошибка при добавлении товара:", error);
    }
  };

  console.log(products);
  return (
    <>
      <div
        className={styles.product_add}
        onClick={() => setIsAddModalOpen(true)}
      >
        <CiSquarePlus />
        <p>Добавить товар</p>
      </div>
      <div className={styles.container}>
        {products.map((p: any) => (
          <div key={p.id} className={styles.container_product}>
            <Image
              src={p.announcement_image_url || ""}
              alt="image"
              width={200}
              height={200}
            />
            <div className={styles.container_product_info}>
              <h3>
                {p.product_name.length > 30
                  ? p.product_name.slice(0, 30) + "..."
                  : p.product_name}
              </h3>
              <p className={styles.base_price}>{p.base_price}₽</p>
              <div className={styles.container_product_info_function}>
                <MdDelete
                  onClick={() => handleDelete(p.id)}
                  className={styles.icon}
                />
                <CiEdit onClick={() => handleEdit(p)} className={styles.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        style={{ marginTop: "20px" }}
        total={totalProducts}
        defaultPageSize={12}
        current={currentPage}
        onChange={handlePageChange}
      />

      <Modal
        title="Редактирование продукта"
        className={styles.modal}
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          placeholder="Название товара"
          value={editingProduct?.product_name || ""}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              product_name: e.target.value,
            })
          }
        />
        <Input
          placeholder="Цена товара"
          type="number"
          value={editingProduct?.base_price || ""}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              base_price: Number(e.target.value),
            })
          }
        />
        <Input
          placeholder="Бренд"
          value={editingProduct?.brand || ""}
          onChange={(e) =>
            setEditingProduct({ ...editingProduct, brand: e.target.value })
          }
        />
        <Input
          placeholder="Категория"
          type="number"
          value={editingProduct?.category_id || ""}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              category_id: Number(e.target.value),
            })
          }
        />
        <Input
          placeholder="Описание"
          value={editingProduct?.description || ""}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              description: e.target.value,
            })
          }
        />
        <Input
          placeholder="Код поставщика"
          value={editingProduct?.vendor_code || ""}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              vendor_code: e.target.value,
            })
          }
        />
        <Checkbox
          checked={editingProduct?.delivery}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              delivery: e.target.checked,
            })
          }
        >
          Доставка
        </Checkbox>
        <Checkbox
          checked={editingProduct?.pickup}
          onChange={(e) =>
            setEditingProduct({ ...editingProduct, pickup: e.target.checked })
          }
        >
          Самовывоз
        </Checkbox>
        <Checkbox
          checked={editingProduct?.store}
          onChange={(e) =>
            setEditingProduct({ ...editingProduct, store: e.target.checked })
          }
        >
          Наличие в магазине
        </Checkbox>
      </Modal>

      <Modal
        className={styles.modal}
        title="Добавить новый товар"
        open={isAddModalOpen}
        onOk={handleAddProduct}
        onCancel={() => setIsAddModalOpen(false)}
      >
        <Input
          placeholder="Название товара"
          value={newProduct.product_name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, product_name: e.target.value })
          }
        />
        <Input
          placeholder="Цена товара"
          type="number"
          value={newProduct.base_price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, base_price: Number(e.target.value) })
          }
        />
        <Input
          placeholder="Бренд"
          value={newProduct.brand}
          onChange={(e) =>
            setNewProduct({ ...newProduct, brand: e.target.value })
          }
        />

        <Input
          placeholder="Количество ламп"
          value={newProduct.lamps_count}
          onChange={(e) =>
            setNewProduct({ ...newProduct, lamps_count: e.target.value })
          }
        />
        <Input
          placeholder="Материал декора"
          value={newProduct.decor_material}
          onChange={(e) =>
            setNewProduct({ ...newProduct, decor_material: e.target.value })
          }
        />
        <Input
          placeholder="Материал плафона"
          value={newProduct.shade_material}
          onChange={(e) =>
            setNewProduct({ ...newProduct, shade_material: e.target.value })
          }
        />
        <Input
          placeholder="Основной цвет"
          value={newProduct.main_color}
          onChange={(e) =>
            setNewProduct({ ...newProduct, main_color: e.target.value })
          }
        />
        <Input
          placeholder="Пульт управления"
          value={newProduct.remote_control}
          onChange={(e) =>
            setNewProduct({ ...newProduct, remote_control: e.target.value })
          }
        />
        <Input
          placeholder="Серия"
          value={newProduct.series}
          onChange={(e) =>
            setNewProduct({ ...newProduct, series: e.target.value })
          }
        />
        <Input
          placeholder="Тип установки"
          value={newProduct.installation_type}
          onChange={(e) =>
            setNewProduct({ ...newProduct, installation_type: e.target.value })
          }
        />
        <Input
          placeholder="Цвет свечения"
          value={newProduct.light_color}
          onChange={(e) =>
            setNewProduct({ ...newProduct, light_color: e.target.value })
          }
        />
        <Input
          placeholder="Цоколь лампы"
          value={newProduct.socket}
          onChange={(e) =>
            setNewProduct({ ...newProduct, socket: e.target.value })
          }
        />
        <Input
          placeholder="Категория"
          type="number"
          value={newProduct.category_id}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              category_id: Number(e.target.value),
            })
          }
        />
        <Input
          placeholder="Описание"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <Input
          placeholder="Код поставщика"
          value={newProduct.vendor_code}
          onChange={(e) =>
            setNewProduct({ ...newProduct, vendor_code: e.target.value })
          }
        />
        <Input
          placeholder="Ссылка на изображение"
          value={newProduct.announcement_image_url}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              announcement_image_url: e.target.value,
            })
          }
        />
        <Input
          placeholder="Дополнительные изображения (через запятую)"
          value={newProduct.additional_images}
          onChange={(e) =>
            setNewProduct({ ...newProduct, additional_images: e.target.value })
          }
        />
        <Input
          placeholder="URL"
          value={newProduct.url}
          onChange={(e) =>
            setNewProduct({ ...newProduct, url: e.target.value })
          }
        />

        <Checkbox
          checked={newProduct.delivery}
          onChange={(e) =>
            setNewProduct({ ...newProduct, delivery: e.target.checked })
          }
        >
          Доставка
        </Checkbox>
        <Checkbox
          checked={newProduct.pickup}
          onChange={(e) =>
            setNewProduct({ ...newProduct, pickup: e.target.checked })
          }
        >
          Самовывоз
        </Checkbox>
        <Checkbox
          checked={newProduct.store}
          onChange={(e) =>
            setNewProduct({ ...newProduct, store: e.target.checked })
          }
        >
          Наличие в магазине
        </Checkbox>
      </Modal>
    </>
  );
};

export default AdminProduct;
