import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <header className="container mx-auto p-4 flex justify-between">
        <p>Logo</p>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="container mx-auto p-4">Footer</footer>
    </>
  );
};

export default RootLayout;
