export const fetchSmartphoneList = async (searchQuery) => {
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
  const data = await response.json();

  return data;
};
