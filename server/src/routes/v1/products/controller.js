import asyncHandler from "express-async-handler";
import service from "./service.js";
import { STATUSCODE } from "../../../constants/index.js";
import { responseHandler } from "../../../utils/index.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const data = await service.getAll();

  responseHandler(
    res,
    data,
    data?.length === STATUSCODE.ZERO
      ? "No Products found"
      : "All Products retrieved successfully",
  );
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const data = await service.getById(req.params.id);

  responseHandler(
    res,
    data,
    !data ? "No Product found" : "Product retrieved successfully",
  );
});

const createNewProduct = asyncHandler(async (req, res) => {
  const data = await service.add(req.body);

  responseHandler(res, [data], "Product created successfully");
});

const updateProduct = asyncHandler(async (req, res) => {
  const data = await service.update(req.params.id, req.body);

  responseHandler(res, [data], "Product updated successfully");
});

const deleteProduct = asyncHandler(async (req, res) => {
  const data = await service.deleteById(req.params.id);

  responseHandler(res, [data], "Product deleted successfully");
});

export {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
