export const fetchSmartphoneDetailById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
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
        `Failed to fetch smartphone details. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching smartphone details: ${error.message}`);
    throw error;
  }
};
