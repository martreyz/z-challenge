import ProductBase from "@/domain/entities/ProductBase";

/**
 * Represents a product when shown in a list view.
 * @class
 * @extends ProductBase
 */

class ProductForList extends ProductBase {
  /**
   * Creates a new ProductForList instance.
   * @param {Object} params - Product list parameters.
   * @param {string} params.id - The unique identifier of the product.
   * @param {string} params.name - The name of the product.
   * @param {string} params.brand - The brand of the product.
   * @param {string} params.basePrice - The base price of the product.
   * @param {string} params.imageUrl - The image url of the product.
   */
  constructor({ id, name, brand, basePrice, imageUrl }) {
    super({ id, name, brand, basePrice });
    this.imageUrl = imageUrl;
  }
}

export default ProductForList;
