const API_URL = "http://localhost:3000";

export type Product = {
  _id: string;
  title: string;
  price: string;
  permalink: string;
  image: string;
};

export const getPublicProducts = async (): Promise<Product[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 1500));

  const response = await fetch(API_URL + "/public/products");

  if (!response.ok) throw response;

  return response.json();
};

export const getPublicProductByParam = async (
  param: string
): Promise<Product> => {
  // await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(API_URL + "/public/products/" + param, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) throw response;

  return response.json();
};
