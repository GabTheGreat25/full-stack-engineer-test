import axios from "axios";
import { ENV } from "../../../config/index.js";

let products = [];

async function fetchProducts() {
  const response = await axios.get(`${ENV.FAKE_API}/products`);
  products = response.data;
}

await fetchProducts();

async function getAll() {
  return products;
}

async function getById(id) {
  return products.find((p) => p.id === parseInt(id));
}

async function add(body) {
  const response = await axios.post(`${ENV.FAKE_API}/products`, body);
  const newProduct = response.data;

  products.push(newProduct);

  return newProduct;
}

async function update(id, body) {
  const response = await axios.patch(`${ENV.FAKE_API}/products/${id}`, body);
  const updatedProduct = response.data;

  products = products.map((p) => (p.id === parseInt(id) ? updatedProduct : p));

  return updatedProduct;
}

async function deleteById(id) {
  await axios.delete(`${ENV.FAKE_API}/products/${id}`);

  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index !== -1) products.splice(index, 1);

  return products;
}

export default {
  fetchProducts,
  getAll,
  getById,
  add,
  update,
  deleteById,
};
