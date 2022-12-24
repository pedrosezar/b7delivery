import { DataType, ActionType, Actions } from "./types";

export const reducer = (state: DataType, action: ActionType) => {
  switch (action.type) {
    case Actions.SET_TOKEN:
      if (!action.payload.token) return { ...state, token: "", user: null };
      return { ...state, token: action.payload.token };
    case Actions.SET_USER:
      if (!action.payload.user) return { ...state, token: "", user: null };
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
/*
import { DataType, ActionType, Actions } from "./types";

export const reducer = (state: DataType, action: ActionType) => {
  switch (action.type) {
    case Actions.SET_TENANT:
      return { ...state, tenant: action.payload.tenant };
    case Actions.SET_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload.shippingAddress };
    case Actions.SET_SHIPPING_PRICE:
      return { ...state, shippingPrice: action.payload.shippingPrice };
    default:
      return state;
  }
};
*/
