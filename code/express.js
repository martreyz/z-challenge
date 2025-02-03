require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const app = express();
const port = 3001;

app.get("/products", (req, res) => {
  const apiKey = req.headers["x-api-key"];
  const limit = parseInt(req.query.limit);
  const search = req.query.search?.toLowerCase();

  verifyAPIKey(res, apiKey);

  let filteredProducts = products;
  if (search) {
    filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search)
    );
  }

  const limitedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  res.status(200).json(limitedProducts);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const apiKey = req.headers["x-api-key"];
  const productDetail = generateProductByIdResponse(id);

  verifyAPIKey(res, apiKey);

  if (!productDetail)
    res.status(404).json({ error: "error", message: "Product not found" });
  res.status(200).json(productDetail);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});

const verifyAPIKey = (res, requestApiKey) => {
  const validApiKey = process.env.API_KEY;

  if (requestApiKey !== validApiKey) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }
};

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

const products = [
  {
    id: "Marta",
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    basePrice: 1329,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png",
  },
  {
    id: "SMG-S24U",
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    basePrice: 1329,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png",
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
    id: "GPX-8A",
    brand: "Google",
    name: "Pixel 8a",
    basePrice: 459,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.png",
  },
  {
    id: "APL-I15PM",
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    basePrice: 1319,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png",
  },
  {
    id: "OPP-A18",
    brand: "OPPO",
    name: "A18",
    basePrice: 99,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A18-azul-brillante.png",
  },
  {
    id: "XMI-RN13P5G",
    brand: "Xiaomi",
    name: "Redmi Note 13 Pro 5G",
    basePrice: 399,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png",
  },
  {
    id: "XMI-RN13P5G",
    brand: "Xiaomi",
    name: "Redmi Note 13 Pro 5G",
    basePrice: 399,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png",
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
    id: "OPP-R11F",
    brand: "OPPO",
    name: "Reno 11 F",
    basePrice: 269,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R11F-verde.png",
  },
  {
    id: "XIA-RN13",
    brand: "Xiaomi",
    name: "Redmi Note 13",
    basePrice: 169,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-RN13-mint-green.png",
  },
  {
    id: "XMI-14",
    brand: "Xiaomi",
    name: "14",
    basePrice: 899,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-14-negro.png",
  },
  {
    id: "SMG-A35",
    brand: "Samsung",
    name: "Galaxy A35 5G",
    basePrice: 333,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A35-light-blue.png",
  },
  {
    id: "XMI-R13C",
    brand: "Xiaomi",
    name: "Redmi 13C",
    basePrice: 149,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-R13C-navy-blue.png",
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
    id: "SMG-A05S",
    brand: "Samsung",
    name: "Galaxy A05s",
    basePrice: 119,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A05S-black.png",
  },
  {
    id: "XIA-R12",
    brand: "Xiaomi",
    name: "Redmi 12",
    basePrice: 117.29,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-R12-sky-blue.png",
  },
  {
    id: "SMG-S23FE",
    brand: "Samsung",
    name: "Galaxy S23 FE",
    basePrice: 699,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S23FE-purple.png",
  },
  {
    id: "MTE-EDGE50PRO",
    brand: "Motorola",
    name: "edge 50 Pro",
    basePrice: 649,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/MTE-EDGE50PRO-negro.png",
  },
  {
    id: "SNY-XPERIA1V",
    brand: "SONY",
    name: "Xperia 1 V",
    basePrice: 959.42,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SNY-XPERIA1V-negro.png",
  },
  {
    id: "MTO-G24",
    brand: "Motorola",
    name: "g24",
    basePrice: 119,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/MTO-G24-gris.png",
  },
  {
    id: "SMG-A15",
    brand: "Samsung",
    name: "Galaxy A15 LTE",
    basePrice: 159,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A15-azul.png",
  },
  {
    id: "OPP-A60",
    brand: "OPPO",
    name: "A60",
    basePrice: 179,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.png",
  },
  {
    id: "OPP-R12FS",
    brand: "OPPO",
    name: "Reno 12 FS 4G",
    basePrice: 299,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R12FS-amber-orange.png",
  },
  {
    id: "RLM-NOTE50",
    brand: "realme",
    name: "Note 50",
    basePrice: 99,
    imageUrl:
      "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/RLM-NOTE50-midnight-black.png",
  },
];
