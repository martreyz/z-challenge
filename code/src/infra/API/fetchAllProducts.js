import ProductForList from "@/domain/entities/ProductForList";

export const fetchAllProducts = async () => {
  const response = await fetch(
    "https://prueba-tecnica-api-tienda-moviles.onrender.com/products",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  const data = await response.json();

  return data;
};
