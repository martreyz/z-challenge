export const fetchSmartphoneList = async (searchQuery) => {
  try {
    const objectForParams = {
      limit: 20,
      ...(searchQuery ? { search: searchQuery } : {}),
    };

    const params = new URLSearchParams(objectForParams);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch smartphone list. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching smartphone list: ${error.message}`);
    throw error;
  }
};
