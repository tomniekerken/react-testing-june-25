import { Link, useLoaderData } from "react-router";
import { getPublicProducts } from "../utils/api";
import PriceInEuro from "../components/PriceInEuro";

export const loader = async () => {
  return {
    products: await getPublicProducts(),
  };
};

const Products = () => {
  const { products } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="text-3xl text-center font-semibold mb-4">Products</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="text-gray-500 col-span-full">
            Es gibt noch keine Produkte.
          </p>
        ) : null}

        {products.map((product) => {
          return (
            <article
              key={product._id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-4 flex flex-col items-center text-center"
            >
              <img
                src={"http://localhost:3000/" + product.image}
                alt={`preview image for ${product.title}`}
                className="rounded-lg aspect-[3/2] object-cover w-full"
              />
              <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-700 mt-1 mb-3">
                <PriceInEuro price={product.price} />
              </p>
              <Link
                to={`/products/${product.permalink}`}
                className="py-1 px-4 text-sm text-blue-700 hover:text-blue-500 font-semibold transition-colors rounded"
              >
                See more
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Products;
