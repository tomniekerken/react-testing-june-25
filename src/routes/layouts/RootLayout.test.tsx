import { render, screen } from "@testing-library/react";
import RootLayout from "./RootLayout";
import { createMemoryRouter, RouterProvider } from "react-router";

describe("Layout: RootLayout", () => {
  it("renders the header, main and footer tag", () => {
    const router = createMemoryRouter([
      {
        path: "/",
        element: <RootLayout />,
      },
    ]);

    render(<RouterProvider router={router} />);

    const header = screen.getByRole("banner");
    const main = screen.getByRole("main");
    const footer = screen.getByRole("contentinfo");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("displays the outlet correctly inside the main tag", () => {
    const outlet = (
      <section>
        <h1>Headline 1</h1>
        <p>Paragraph</p>
      </section>
    );

    const router = createMemoryRouter([
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: outlet,
          },
        ],
      },
    ]);

    render(<RouterProvider router={router} />);

    const headline = screen.getByRole("heading", { name: /headline 1/i });
    const paragraph = screen.getByText(/paragraph/i);

    expect(headline).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
