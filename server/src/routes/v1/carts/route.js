import { Router } from "express";
import * as cartController from "./controller.js";
import { METHOD, PATH } from "../../../constants/index.js";

const router = Router();

const cartRoutes = [
  {
    method: METHOD.GET,
    handler: cartController.getAllCarts,
  },
  {
    method: METHOD.GET,
    path: PATH.ID,
    handler: cartController.getSingleCart,
  },
  {
    method: METHOD.GET,
    path: PATH.USER_ORDER,
    handler: cartController.getCartsByUserId,
  },
  {
    method: METHOD.POST,
    handler: cartController.createNewCart,
  },
  {
    method: METHOD.PATCH,
    path: PATH.EDIT,
    handler: cartController.updateCart,
  },
  {
    method: METHOD.DELETE,
    path: PATH.DELETE,
    handler: cartController.deleteCart,
  },
];

cartRoutes.forEach((route) => {
  const { method, path = "", handler } = route;
  router[method](path, handler);
});

export default router;
