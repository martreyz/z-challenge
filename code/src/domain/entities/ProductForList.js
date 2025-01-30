const ProductForList = (data) => ({
  create: () => ({ ...data, basePrice: `${data.basePrice} EUR` }),
});

export default ProductForList;
