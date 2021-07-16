import {
  authenticatedDelete,
  authenticatedGet,
  authenticatedPost,
  authenticatedPut,
} from "../calls";
import { DeleteResponse } from "../common";
import { Category } from "./category";

export interface Product {
  id: string;
  name: string;
  msrp: number;
  discount?: number;
  stock: number;
  imageUrl?: string;
  soldQuantity: number;
  category: Category;
}

const getProductById = (productId: string): Promise<Product> => {
  return authenticatedGet(`/products/product/${productId}`);
};

const deleteProductById = (productId: string): Promise<DeleteResponse> => {
  return authenticatedDelete(`/products/${productId}`);
};

const updateProduct = (
  id: string,
  name: string,
  stock: number,
  price: number,
  categoryId: string,
  discount?: number,
  image?: string
): Promise<Product> => {
  return authenticatedPut("/products", {
    id,
    name,
    stock,
    price,
    categoryId,
    image,
    discount,
  });
};

const createProduct = async (
  name: string,
  stock: number,
  price: number,
  categoryId: string,
  discount?: number,
  image?: string
): Promise<Product> => {
  const newProduct = {
    name,
    active: true,
    stock,
    price,
    discount,
    categoryId,
    image,
  };

  return authenticatedPost("/products", newProduct);
};

const searchProduct = (
  page: number,
  pageSize: number,
  categoryId?: string,
  categoryName?: string,
  search?: string,
  onlyDiscount?: boolean
): Promise<Product[]> => {
  const queryCat = categoryId ? "&categoryId=" + categoryId : "";
  const querySearch = search ? "&search=" + search : "";
  const discount = onlyDiscount ? "&onlyDiscount=" + onlyDiscount : "";
  const catName = categoryName ? "&categoryName=" + categoryName : "";
  return authenticatedGet(
    `/products?page=${page}&pageSize=${pageSize}${queryCat}${querySearch}${discount}${catName}`
  );
};

const topSellProducts = (): Promise<Product[]> => {
  return authenticatedGet("/products/top");
};

const productApi = {
  create: createProduct,
  update: updateProduct,
  delete: deleteProductById,
  getId: getProductById,
  search: searchProduct,
  topSell: topSellProducts,
};

export default productApi;
