import { authenticatedGet, authenticatedPost } from "../calls"
import { Product } from './product';

export interface Order {
  id: string;
  status: string;
  comments: string;
  items: OrderItem[];
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
  discount: number;
}

const getAllOrders = (): Promise<Order[]> => {
  return authenticatedGet(`/orders`);
}

const getOrderById = (orderId: string): Promise<Order> => {
  return authenticatedGet(`/orders/${orderId}`);
}

const buyCart = (comments: string, cartId: string): Promise<Order> => {
  return authenticatedPost("/orders", { comments, cartId });
}

const orderApi = {
  buyCart,
  deleteItem: getOrderById,
  get: getAllOrders,
}

export default orderApi;