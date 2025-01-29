export const verifyAPIKey = (res, requestApiKey) => {
  const validApiKey = process.env.API_KEY;

  if (requestApiKey !== validApiKey) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }
};
