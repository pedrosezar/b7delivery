import { Address } from "./Address";
import { CartItem } from "./CartItem";

export type Order = {
  id: number;
  status: "preparing" | "sent" | "delivered";
  orderDate: string;
  userid: string;
  shippingAddress: Address;
  shippingPrice: number;
  paymentType: "money" | "card";
  products: CartItem[];
  subtotal: number;
  total: number;
  paymentChange?: number;
  cupom?: string;
  cupomDiscount?: number;
};
