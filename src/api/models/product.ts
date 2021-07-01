import { authenticatedDelete, authenticatedGet, authenticatedPost, authenticatedPut } from "../calls"
import { DeleteResponse } from "../common"

export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  image?: string;
}


const getProductById = (productId: string): Promise<Product> => {
  return authenticatedGet(`products/${productId}`)
}

const deleteProductById = (productId: string): Promise<DeleteResponse> => {
  return authenticatedDelete(`products/${productId}`)
}

const updateProduct = (prod: Product): Promise<Product> => {
  return authenticatedPut("/products", prod);
}

const createProduct = async (name: string, stock: number, price: number, discount: number, categoryId: string, image?: string): Promise<Product> => {
  const newProduct = {
    name,
    stock,
    price,
    discount,
    categoryId,
    image
  };

  return authenticatedPost("/products", newProduct)
}

const searchProduct = (page: number, pageSize: number, categoryId?: string, search?: string): Promise<Product> => {
  const queryCat = categoryId ? '&categoryId=' + categoryId : '';
  const querySearch = search ? '&search=' + search : '';
  return authenticatedGet(`/products?page=${page}&pageSize=${pageSize}${queryCat}${querySearch}`)
}

const topSellProducts = (): Promise<Product> => {
  return authenticatedGet('/products/top');
}

const productApi = {
  create: createProduct,
  update: updateProduct,
  delete: deleteProductById,
  getId: getProductById,
  search: searchProduct,
  topSell: topSellProducts
}

export default productApi;