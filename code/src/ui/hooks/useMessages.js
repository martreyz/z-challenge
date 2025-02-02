export const useMessages = () => {
  return (key, params = {}) => buildMessage(params)[key] || key;
};

const buildMessage = (
  { numberOfResults, basePrice, cartItems } = {
    numberOfResults: undefined,
    basePrice: undefined,
    cartItems: undefined,
  }
) => {
  return {
    "searcher.input.helper": `${numberOfResults} results`,
    "searcher.input.placeholder": "Search for a smartphone...",
    "smartphoneDetail.priceFrom.label": `From ${basePrice}`,
    "smartphoneDetail.storage.label": "Storage. How much space do you need?",
    "smartphoneDetail.color.label": "Color. Pick your favourite",
    "smartphoneDetail.addButton.label": "Add",
    "smartphoneDetail.specs.name": "Name",
    "smartphoneDetail.specs.brand": "Brand",
    "smartphoneDetail.specs.description": "Description",
    "smartphoneDetail.specs.screen": "Screen",
    "smartphoneDetail.specs.resolution": "Resolution",
    "smartphoneDetail.specs.processor": "Processor",
    "smartphoneDetail.specs.mainCamera": "Main camera",
    "smartphoneDetail.specs.selfieCamera": "Selfie camera",
    "smartphoneDetail.specs.battery": "Battery",
    "smartphoneDetail.specs.os": "OS",
    "smartphoneDetail.specs.screenRefreshRate": "Screen refresh rate",
    "smartphoneDetail.similarItems.title": "Similar items",
    "smartphoneDetail.backButton.label": "Back",
    "cart.title": `Cart (${cartItems})`,
    "cart.item.removeButton.label": "Remove",
    "cart.backButton.label": "Continue shopping",
    "cart.payButton.label": "Pay",
    "cart.total.label": "Total",
    "userMessage.imageNotAvailable": "Image not available",
  };
};
