import { authenticatedGet, authenticatedPost } from "../calls";
import { Product } from "./product";
import { User } from "./user";

export const getStatusText = (status: string) => {
  const numberStatus = Number(status);
  switch (numberStatus) {
    case 0:
      return "Enviado";
    case 1:
      return "Fallo";
    case 2:
      return "Pagado";
    case 3:
      return "Creado";
    default:
      return "Cancelada";
  }
};

export interface Order {
  id: string;
  status: string;
  comments: string;
  details: OrderItem[];
  createdAt: string;
  user: User;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
  discount?: number;
}

const getAllOrders = (): Promise<Order[]> => {
  return authenticatedGet('/orders/getAll');
};

const getOrderById = (orderId: string): Promise<Order> => {
  return authenticatedGet(`/orders/${orderId}`);
};

const buyCart = (comments: string, cartId: string): Promise<Order> => {
  return authenticatedPost('/orders', { comments, cartId });
};

const getMyOrders = (): Promise<Order[]> => {
  return authenticatedGet('/orders');
}

const orderApi = {
  buyCart,
  deleteItem: getOrderById,
  get: getAllOrders,
  getMyOrders: getMyOrders,
};

export default orderApi;
