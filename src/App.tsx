import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./routes/layouts/RootLayout";

// PAGES
import Home from "./routes/Home";
import Products from "./routes/Products";
import Product from "./routes/Product";

// ACTIONS
import { loader as productsLoader } from "./routes/Products";
import { loader as productLoader } from "./routes/Product";

export const routes = [
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        hydrateFallbackElement: <p>Loading</p>,
      },
      {
        path: "products/:permalink",
        element: <Product />,
        loader: productLoader,
        hydrateFallbackElement: <p>Loading</p>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
