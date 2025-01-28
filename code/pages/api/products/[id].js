import { products } from "/pages/api/products";
import { verifyAPIKey } from "/pages/utils";

export default function handler(req, res) {
  const { id: queryId } = req.query;
  const apiKey = req.headers["x-api-key"];
  const productById = products.find(({ id }) => id === queryId);

  verifyAPIKey(res, apiKey);

  if (!productById)
    res.status(404).json({ error: "error", message: "Product not found" });
  res.status(200).json(productById);
}
