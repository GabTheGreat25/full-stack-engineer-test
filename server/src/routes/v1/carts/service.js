import axios from "axios";
import { ENV } from "../../../config/index.js";

let carts = [];

async function fetchCarts() {
  const response = await axios.get(`${ENV.FAKE_API}/carts`);
  carts = response.data;
}

await fetchCarts();

async function getAll() {
  return carts;
}

async function getById(id) {
  return carts.find((p) => p.id === parseInt(id));
}

async function getByUserId(id) {
  return carts.filter((cart) => cart.userId === parseInt(id));
}

async function add(body) {
  const response = await axios.post(`${ENV.FAKE_API}/carts`, body);
  const newCart = response.data;

  carts.push(newCart);

  return newCart;
}

async function update(id, body) {
  const response = await axios.patch(`${ENV.FAKE_API}/carts/${id}`, body);
  const updatedProduct = response.data;

  carts = carts.map((p) => (p.id === parseInt(id) ? updatedProduct : p));

  return updatedProduct;
}

async function deleteById(id) {
  await axios.delete(`${ENV.FAKE_API}/carts/${id}`);

  const index = carts.findIndex((p) => p.id === parseInt(id));

  if (index !== -1) carts.splice(index, 1);

  return carts;
}

export default {
  fetchCarts,
  getAll,
  getById,
  getByUserId,
  add,
  update,
  deleteById,
};
