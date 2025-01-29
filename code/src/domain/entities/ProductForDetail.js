import ProductBase from "@/domain/entities/ProductBase";

/**
 * Represents a product when shown in a detail view.
 * @class
 * @extends ProductBase
 */

class ProductForDetail extends ProductBase {
  /**
   * @param {string} params.id - Unique product identifier
   * @param {string} params.brand - Brand name
   * @param {string} params.name - Product name
   * @param {string} params.description - Product description
   * @param {number} params.basePrice - Base price of the product
   * @param {number} params.rating - Average rating
   * @param {Object} params.specs - Product specifications
   * @param {Array} params.colorOptions - Available color options
   * @param {Array} params.storageOptions - Available storage options
   * @param {Array} params.similarProducts - Related products
   */
  constructor({
    id,
    name,
    brand,
    description,
    basePrice,
    rating,
    specs = {},
    colorOptions = [],
    storageOptions = [],
    similarProducts = [],
  }) {
    super({ id, name, brand, basePrice });

    this.description = description;
    this.rating = rating;
    this.specs = specs;
    this.colorOptions = colorOptions;
    this.storageOptions = storageOptions;
    this.similarProducts = similarProducts;
  }
}

export default ProductForDetail;
