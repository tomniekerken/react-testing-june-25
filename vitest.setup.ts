import "@testing-library/jest-dom/vitest";

// Setup for Mock Service Workers
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

import { testBase64Image } from "./test_assets/testImage";
import { afterAll, afterEach, beforeAll } from "vitest";

const testProducts = [
  {
    _id: "1",
    title: "Test Product",
    price: "170",
    permalink: "/test-product",
    image: testBase64Image,
  },
  {
    _id: "2",
    title: "Test Product",
    price: "99",
    permalink: "/test-product",
    image: testBase64Image,
  },
  {
    _id: "3",
    title: "Test Product",
    price: "110",
    permalink: "/test-product",
    image: testBase64Image,
  },
];

const restHandlers = [
  http.get("http://localhost:3000/public/products", () => {
    // console.log("Handler", request.method, request.url);
    return HttpResponse.json(testProducts, { status: 200 });
  }),
];

export const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
