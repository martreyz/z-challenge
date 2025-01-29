class ProductBase {
  /**
   * @param {string} id - Unique identifier for the product
   * @param {string} brand - Product brand
   * @param {string} name - Name of the product
   * @param {number} basePrice - Base price of the product
   */
  constructor(id, brand, name, basePrice) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.basePrice = basePrice;
  }
}

export default ProductBase;
