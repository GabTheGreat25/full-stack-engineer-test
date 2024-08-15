import cartsRoute from "./carts/route.js";
import productsRoute from "./products/route.js";
import { RESOURCE } from "../../constants/index.js";

const routes = [
  {
    url: RESOURCE.CARTS,
    route: cartsRoute,
  },
  {
    url: RESOURCE.PRODUCTS,
    route: productsRoute,
  },
];

export const V1 = routes.map((route) => ({
  url: `${RESOURCE.V1}${route.url}`,
  route: route.route,
}));
