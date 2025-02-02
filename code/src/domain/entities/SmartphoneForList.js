const SmartphoneForList = (data) => ({
  create: () => ({ ...data, basePrice: `${data.basePrice} EUR` }),
});

export default SmartphoneForList;
