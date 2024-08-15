import asyncHandler from "express-async-handler";
import service from "./service.js";
import { STATUSCODE } from "../../../constants/index.js";
import { responseHandler } from "../../../utils/index.js";

const getAllCarts = asyncHandler(async (req, res) => {
  const data = await service.getAll();

  responseHandler(
    res,
    data,
    data?.length === STATUSCODE.ZERO
      ? "No Carts found"
      : "All Carts retrieved successfully",
  );
});

const getSingleCart = asyncHandler(async (req, res) => {
  const data = await service.getById(req.params.id);

  responseHandler(
    res,
    data,
    !data ? "No Cart found" : "Cart retrieved successfully",
  );
});

const getCartsByUserId = asyncHandler(async (req, res) => {
  const data = await service.getByUserId(req.params.id);

  responseHandler(
    res,
    data,
    data?.length === STATUSCODE.ZERO
      ? "No Orders found for this user"
      : "Orders retrieved successfully for this user",
  );
});

const createNewCart = asyncHandler(async (req, res) => {
  const data = await service.add({
    ...req.body,
    date: new Date().toISOString(),
  });

  responseHandler(res, [data], "Cart created successfully");
});

const updateCart = asyncHandler(async (req, res) => {
  const data = await service.update(req.params.id, {
    ...req.body,
    date: new Date().toISOString(),
  });

  responseHandler(res, [data], "Cart updated successfully");
});

const deleteCart = asyncHandler(async (req, res) => {
  const data = await service.deleteById(req.params.id);

  const message = "Cart deleted successfully";

  responseHandler(res, [data], message);
});

export {
  getAllCarts,
  getSingleCart,
  getCartsByUserId,
  createNewCart,
  updateCart,
  deleteCart,
};
