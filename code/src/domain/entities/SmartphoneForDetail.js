const SmartphoneForDetail = (data) => ({
  create: () => ({
    ...data,
    basePrice: `${data.basePrice} EUR`,
    storageOptions: data.storageOptions.map((option) => ({
      ...option,
      price: `${option.price} EUR`,
    })),
  }),
});

export default SmartphoneForDetail;
