import { Tenant } from "../types/Tenant";

export const createApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
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
});
