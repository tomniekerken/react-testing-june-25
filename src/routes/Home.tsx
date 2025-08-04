import { Link } from "react-router";

const Home = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-center text-3xl font-semibold">Home</h1>
      <p className="text-center py-4">Browse 1000 of top quality products</p>
      <Link
        to="/products"
        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition cursor-pointer text-center block"
      >
        See our products
      </Link>
    </section>
  );
};

export default Home;
