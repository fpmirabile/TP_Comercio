import { authenticatedGet, authenticatedPost } from "../calls"
import { Product } from './product';

export const getStatusText = (status: string) => {
  switch (status) {
    case "0":
      return "SHIPPED";
    case "1":
      return "FAILED";
    case "2":
      return "PAID";
    case "3":
      return "CREATED"
    default:
      return "CANCEL";
  }
}

export interface Order {
  id: string;
  status: string;
  comments: string;
  items: OrderItem[];
  createdAt: string;
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