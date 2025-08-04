import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "../App";

import { server } from "../../vitest.setup";
import { HttpResponse, http } from "msw";
import { testBase64Image } from "../../test_assets/testImage";

/* describe("Page: Products", () => {
  it("renders h1", () => {
    render(<Products />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
}); */

describe("Page: Products", () => {
  it("renders h1 and 3 products", async () => {
    server.use(
      http.get("http://localhost:3000/public/products", () =>
        HttpResponse.json([
          {
            _id: "1",
            title: "Test Product A",
            price: "100",
            permalink: "/a",
            image: testBase64Image,
          },
          {
            _id: "2",
            title: "Test Product B",
            price: "200",
            permalink: "/b",
            image: testBase64Image,
          },
          {
            _id: "3",
            title: "Test Product C",
            price: "300",
            permalink: "/c",
            image: testBase64Image,
          },
        ])
      )
    );

    const router = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole("heading", { level: 1 });

    const productHeadings = await screen.findAllByText(/test product/i);

    expect(heading).toBeInTheDocument();
    expect(productHeadings).toHaveLength(3);
  });

  it("renders h1 and 1 product", async () => {
    server.use(
      http.get("http://localhost:3000/public/products", () =>
        HttpResponse.json([
          {
            _id: "1",
            title: "Test Product A",
            price: "100",
            permalink: "/a",
            image: testBase64Image,
          },
        ])
      )
    );

    const router = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole("heading", { level: 1 });

    const productHeadings = await screen.findAllByText(/test product/i);

    expect(heading).toBeInTheDocument();
    expect(productHeadings).toHaveLength(1);
  });

  it("renders h1 and 0 products with custom message", async () => {
    server.use(
      http.get("http://localhost:3000/public/products", () =>
        HttpResponse.json([])
      )
    );

    const router = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole("heading", { level: 1 });

    const productHeadings = screen.queryAllByText(/test product/i);

    const noProductsMessage = await screen.findByText(
      /es gibt noch keine produkte./i
    );

    expect(heading).toBeInTheDocument();
    expect(productHeadings).toHaveLength(0);
    expect(noProductsMessage).toBeInTheDocument();
  });
});
