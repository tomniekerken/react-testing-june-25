import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { getPublicProductByParam } from "../utils/api";
import PriceInEuro from "../components/PriceInEuro";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.permalink) {
    throw new Error("Provide a Param");
  }

  return {
    product: await getPublicProductByParam(params.permalink),
  };
};

const Product = () => {
  const {
    product: { image, price, title },
  } = useLoaderData<typeof loader>();

  return (
    <>
      <img
        src={"http://localhost:3000/" + image}
        alt={"image of " + title}
        className="rounded-lg mx-auto"
      />
      <h1 className="text-3xl font-bold mt-4 text-center">{title}</h1>
      <p className="mt-2 text-center">
        Now selling for just <PriceInEuro price={price} />
      </p>
      <Link
        to="/products"
        className="mt-8 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition-colors rounded-md mx-auto block max-w-fit text-center"
      >
        See all products
      </Link>
    </>
  );
};

export default Product;
