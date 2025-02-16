"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js");
const product_1 = require("../models/product");
const category_1 = require("../models/category");
const url = "https://свет-казань.рф/index.php?route=feed/ocext_feed_generator_yamarket&token=36109";
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(url);
            const xmlData = response.data;
            // Парсим XML в JSON
            return yield (0, xml2js_1.parseStringPromise)(xmlData);
        }
        catch (error) {
            console.error("Ошибка загрузки данных:", error);
            return null;
        }
    });
}
function saveCategories(categories) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const category of categories) {
            const id = parseInt(category.$.id, 10);
            const category_name = category._;
            const created_at = new Date(); // Добавляем инициализацию для created_at
            const updated_at = new Date();
            yield category_1.Category.upsert({ id, category_name, created_at, updated_at });
        }
        console.log("Категории сохранены");
    });
}
function saveProducts(products) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        console.log("products:", products);
        for (const product of products) {
            const id = parseInt(product.$.id, 10);
            const category_id = parseInt(product.categoryId[0], 10) || undefined;
            const product_name = ((_a = product.name) === null || _a === void 0 ? void 0 : _a[0]) || "";
            const vendor_code = ((_b = product.vendorCode) === null || _b === void 0 ? void 0 : _b[0]) || "";
            const description = ((_c = product.description) === null || _c === void 0 ? void 0 : _c[0]) || "";
            const brand = ((_e = (_d = product.param) === null || _d === void 0 ? void 0 : _d.find((p) => p.$.name === "Бренд")) === null || _e === void 0 ? void 0 : _e._) || "";
            const base_price = parseFloat((_f = product.price) === null || _f === void 0 ? void 0 : _f[0]) || 0;
            const announcement_image_url = ((_g = product.picture) === null || _g === void 0 ? void 0 : _g[0]) || "";
            const additional_images = ((_h = product.picture) === null || _h === void 0 ? void 0 : _h.slice(1)) || [];
            const url = ((_j = product.url) === null || _j === void 0 ? void 0 : _j[0]) || "";
            const store = ((_k = product.store) === null || _k === void 0 ? void 0 : _k[0]) === "true";
            const pickup = ((_l = product.pickup) === null || _l === void 0 ? void 0 : _l[0]) === "true";
            const delivery = ((_m = product.delivery) === null || _m === void 0 ? void 0 : _m[0]) === "true";
            // Парсим параметры (params)
            const params = {};
            if (product.param) {
                product.param.forEach((p) => {
                    params[p.$.name] = p._;
                });
            }
            yield product_1.Product.upsert({
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
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        if (!data)
            return;
        if (!data ||
            !data.yml_catalog ||
            !data.yml_catalog.shop ||
            !data.yml_catalog.shop[0]) {
            console.error("Не удалось найти shop в данных", data);
            return;
        }
        const categories = data.yml_catalog.shop[0].categories[0].category;
        const products = data.yml_catalog.shop[0].offers[0].offer;
        yield saveCategories(categories);
        yield saveProducts(products);
    });
}
