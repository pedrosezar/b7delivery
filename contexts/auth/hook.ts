import { setCookie } from "cookies-next";
import { useContext } from "react";
import { AppContext } from ".";
import { User } from "../../types/User";
import { Actions } from "./types";

export const useAuthContext = () => {
  const { state, dispatch } = useContext(AppContext);

  return {
    ...state,
    setToken: (token: string) => {
      setCookie("token", token);
      dispatch({
        type: Actions.SET_TOKEN,
        payload: { token },
      });
    },
    setUser: (user: User | null) => {
      dispatch({
        type: Actions.SET_USER,
        payload: { user },
      });
    },
  };
};
/*
import { setCookie } from "cookies-next";
import { useContext } from "react";
import { AppContext } from ".";
import { Address } from "../../types/Address";
import { Tenant } from "../../types/Tenant";
import { Actions } from "./types";

export const useAuthContext = () => {
  const { state, dispatch } = useContext(AppContext);

  return {
    ...state,
    setTenant: (tenant: Tenant) => {
      dispatch({
        type: Actions.SET_TENANT,
        payload: { tenant },
      });
    },
    setShippingAddress: (shippingAddress: Address) => {
      dispatch({
        type: Actions.SET_SHIPPING_ADDRESS,
        payload: { shippingAddress },
      });
    },
    setShippingPrice: (shippingPrice: number) => {
      dispatch({
        type: Actions.SET_SHIPPING_PRICE,
        payload: { shippingPrice },
      });
    },
  };
};
*/
