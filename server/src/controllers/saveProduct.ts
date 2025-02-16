import axios from "axios";
import { parseStringPromise } from "xml2js";
import { Product } from "../models/product";
import { Category } from "../models/category";

const url =
  "https://свет-казань.рф/index.php?route=feed/ocext_feed_generator_yamarket&token=36109";

async function fetchData() {
  try {
    const response = await axios.get(url);
    const xmlData = response.data;

    // Парсим XML в JSON
    return await parseStringPromise(xmlData);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    return null;
  }
}

async function saveCategories(categories: any) {
  for (const category of categories) {
    const id = parseInt(category.$.id, 10);
    const category_name = category._;
    const created_at = new Date(); // Добавляем инициализацию для created_at
    const updated_at = new Date();
    await Category.upsert({ id, category_name, created_at, updated_at });
  }
  console.log("Категории сохранены");
}

async function saveProducts(products: any) {
  console.log("products:", products);

  for (const product of products) {
    const id = parseInt(product.$.id, 10);
    const category_id = parseInt(product.categoryId[0], 10) || undefined;
    const product_name = product.name?.[0] || "";
    const vendor_code = product.vendorCode?.[0] || "";
    const description = product.description?.[0] || "";
    const brand =
      product.param?.find((p: any) => p.$.name === "Бренд")?._ || "";
    const base_price = parseFloat(product.price?.[0]) || 0;
    const announcement_image_url = product.picture?.[0] || "";
    const additional_images = product.picture?.slice(1) || [];
    const url = product.url?.[0] || "";
    const store = product.store?.[0] === "true";
    const pickup = product.pickup?.[0] === "true";
    const delivery = product.delivery?.[0] === "true";

    // Парсим параметры (params)
    const params: Record<string, string> = {};
    if (product.param) {
      product.param.forEach((p: any) => {
        params[p.$.name] = p._;
      });
    }

    await Product.upsert({
      id,
      category_id,
      product_name, // 🔹 Тут было `name`, а должно быть `product_name`
      vendor_code,
      description,
      brand,
      base_price,
      announcement_image_url,
      additional_images,
      url,
      store,
      pickup,
      delivery,
      params,
      updated_at: new Date(),
    });
  }
}

export async function main() {
  const data = await fetchData();
  if (!data) return;

  if (
    !data ||
    !data.yml_catalog ||
    !data.yml_catalog.shop ||
    !data.yml_catalog.shop[0]
  ) {
    console.error("Не удалось найти shop в данных", data);
    return;
  }

  const categories = data.yml_catalog.shop[0].categories[0].category;
  const products = data.yml_catalog.shop[0].offers[0].offer;

  await saveCategories(categories);
  await saveProducts(products);
}
