import { authenticatedDelete, authenticatedGet, authenticatedPut } from "../calls"
import { DeleteResponse } from "../common"
import { Product } from './product';

export interface Cart {
  id: string;
  items: CartItem[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
  discount: number;
}

const getCart = (): Promise<Cart> => {
  return authenticatedGet(`/cart`);
}

const deleteItemFromCart = (productId: string): Promise<DeleteResponse> => {
  return authenticatedDelete(`/cart/item/${productId}`);
}

const updateCart = (prodId: string, quantity: number): Promise<Cart> => {
  return authenticatedPut("/cart", { prodId, quantity });
}

const updateCartItem = (prodId: string, quantity: number) => {
  return authenticatedPut(`/cart/item/${prodId}`, { quantity })
}

const cartApi = {
  update: updateCart,
  updateQuantity: updateCartItem,
  deleteItem: deleteItemFromCart,
  get: getCart,
}

export default cartApi;