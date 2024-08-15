import { Router } from "express";
import * as productController from "./controller.js";
import { METHOD, PATH } from "../../../constants/index.js";

const router = Router();

const productRoutes = [
  {
    method: METHOD.GET,
    handler: productController.getAllProducts,
  },
  {
    method: METHOD.GET,
    path: PATH.ID,
    handler: productController.getSingleProduct,
  },
  {
    method: METHOD.POST,
    handler: productController.createNewProduct,
  },
  {
    method: METHOD.PATCH,
    path: PATH.EDIT,
    handler: productController.updateProduct,
  },
  {
    method: METHOD.DELETE,
    path: PATH.DELETE,
    handler: productController.deleteProduct,
  },
];

productRoutes.forEach((route) => {
  const { method, path = "", handler } = route;
  router[method](path, handler);
});

export default router;
