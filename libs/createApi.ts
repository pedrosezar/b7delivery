import { Address } from "../types/Address";
import { CartItem } from "../types/CartItem";
import { Order } from "../types/Order";
import { Product } from "../types/Product";
import { User } from "../types/User";

const TEMPORARYoneProduct: Product = {
  id: 1,
  image: "/tmp/texas-burger.png",
  categoryName: "Tradicional",
  name: "Texas Burger",
  price: 25.5,
  description:
    "2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal",
};

const TEMPORARYorder: Order = {
  id: 123,
  status: "preparing",
  orderDate: "2022-12-04",
  userid: "123",
  shippingAddress: {
    id: 2,
    street: "Rua das Flores",
    number: "200",
    cep: "58433001",
    city: "São Paulo",
    neighborhood: "Jardins",
    state: "SP",
  },
  shippingPrice: 9.14,
  paymentType: "card",
  cupom: "ABC",
  cupomDiscount: 14.3,
  products: [
    { product: { ...TEMPORARYoneProduct, id: 1 }, qtde: 1 },
    { product: { ...TEMPORARYoneProduct, id: 2 }, qtde: 2 },
    { product: { ...TEMPORARYoneProduct, id: 3 }, qtde: 1 },
  ],
  subtotal: 204,
  total: 198.84,
};

export const createApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      case "b7burger":
        return {
          slug: "b7burger",
          name: "B7Burger",
          mainColor: "#FB9400",
          secondColor: "#FFF9F2",
        };
        break;
      case "b7pizza":
        return {
          slug: "b7pizza",
          name: "B7Pizza",
          mainColor: "#6AB70A",
          secondColor: "#E0E0E0",
        };
        break;
      default:
        return false;
    }
  },

  getAllProducts: async () => {
    let products = [];
    for (let q = 0; q < 10; q++) {
      products.push({
        ...TEMPORARYoneProduct,
        id: q + 1,
      });
    }
    return products;
  },

  getProduct: async (id: number) => {
    return { ...TEMPORARYoneProduct, id };
  },

  authorizeToken: async (token: string): Promise<User | false> => {
    if (!token) return false;

    return {
      name: "Pedro Sézar",
      email: "pedrosezar@gmail.com",
    };
  },

  getCartProducts: async (cartCookie: string) => {
    let cart: CartItem[] = [];
    if (!cartCookie) return cart;
    const cartJson = JSON.parse(cartCookie);
    for (let i in cartJson) {
      if (cartJson[i].id && cartJson[i].qtde) {
        const product = {
          ...TEMPORARYoneProduct,
          id: cartJson[i].id,
        };
        cart.push({
          qtde: cartJson[i].qtde,
          product,
        });
      }
    }
    return cart;
  },

  getUserAddresses: async (email: string) => {
    const addresses: Address[] = [];
    for (let i = 0; i < 4; i++) {
      addresses.push({
        id: i + 1,
        street: "Ruas das Flores",
        number: `${i + 1}00`,
        cep: "99999999",
        city: "São Paulo",
        neighborhood: "Jardins",
        state: "SP",
      });
    }
    return addresses;
  },

  getUserAddress: async (addressid: number) => {
    let address: Address = {
      id: addressid,
      street: "Rua das Flores",
      number: `${addressid}00`,
      cep: "99999999",
      city: "São Paulo",
      neighborhood: "Jardins",
      state: "SP",
    };
    return address;
  },

  addUserAddress: async (address: Address) => {
    return { ...address, id: 9 };
  },

  editUserAddress: async (newAddressData: Address) => {
    return true;
  },

  deleteUserAddress: async (addressid: number) => {
    return true;
  },

  getShippingPrice: async (address: Address) => {
    return 9.16;
  },

  setOrder: async (
    address: Address,
    paymentType: "money" | "card",
    paymentChange: number,
    cupom: string,
    cart: CartItem[]
  ) => {
    return TEMPORARYorder;
  },

  getOrder: async (orderid: number) => {
    return TEMPORARYorder;
  },
});
