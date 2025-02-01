const SmartphoneForDetail = (data) => ({
  create: () => ({ ...data, basePrice: `${data.basePrice} EUR` }),
});

export default SmartphoneForDetail;
