import { products } from "/pages/api/products";
import { verifyAPIKey } from "/pages/utils";

export default function handler(req, res) {
  const { id: queryId } = req.query;
  const apiKey = req.headers["x-api-key"];
  const productDetail = generateProductByIdResponse(queryId);

  verifyAPIKey(res, apiKey);

  if (!productDetail)
    res.status(404).json({ error: "error", message: "Product not found" });
  res.status(200).json(productDetail);
}

const generateProductByIdResponse = (queryId) => {
  const productByIdBaseInformation = products.find(({ id }) => id === queryId);

  if (!productByIdBaseInformation) return;

  delete productByIdBaseInformation.imageUrl;

  return {
    ...productByIdBaseInformation,
    description:
      "El Samsung Galaxy S24 Ultra es un smartphone de gama alta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Qualcomm Snapdragon 8 Gen 3 for Galaxy, y un avanzado sistema de cámara con inteligencia artificial.",
    rating: 4.6,
    specs: {
      screen: '6.8" Dynamic AMOLED 2X',
      resolution: "3120 x 1440 pixels",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy Octa-Core",
      mainCamera:
        "200 MP (F1.7) Principal, OIS + 10 MP (F2.4) Zoom x3, OIS + 12 MP (F2.2) Ultra gran angular + 50 MP (F3.4) Zoom x5, OIS",
      selfieCamera: "12 MP",
      battery: "5000 mAh",
      os: "Android 14",
      screenRefreshRate: "120 Hz",
    },
    colorOptions: [
      {
        name: "Titanium Violet",
        hexCode: "#8E6F96",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png",
      },
      {
        name: "Titanium Black",
        hexCode: "#000000",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-black.png",
      },
      {
        name: "Titanium Gray",
        hexCode: "#808080",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-gray.png",
      },
      {
        name: "Titanium Yellow",
        hexCode: "#FFFF00",
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png",
      },
    ],
    storageOptions: [
      {
        capacity: "256 GB",
        price: 1229,
      },
      {
        capacity: "512 GB",
        price: 1329,
      },
      {
        capacity: "1 TB",
        price: 1529,
      },
    ],
    similarProducts: [
      {
        id: "OPP-R12FS",
        brand: "OPPO",
        name: "Reno 12 FS 4G",
        basePrice: 299,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R12FS-amber-orange.png",
      },
      {
        id: "SMG-A25",
        brand: "Samsung",
        name: "Galaxy A25 5G",
        basePrice: 239,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png",
      },
      {
        id: "XMI-13TPro",
        brand: "XIAOMI",
        name: "13T Pro",
        basePrice: 553.31,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-13TPro-negro.png",
      },
      {
        id: "RLM-NOTE50",
        brand: "realme",
        name: "Note 50",
        basePrice: 99,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/RLM-NOTE50-midnight-black.png",
      },
      {
        id: "APL-IP13-128",
        brand: "Apple",
        name: "iPhone 13",
        basePrice: 619,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.png",
      },
      {
        id: "GPX-8A",
        brand: "Google",
        name: "Pixel 8a",
        basePrice: 459,
        imageUrl:
          "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.png",
      },
    ],
  };
};
