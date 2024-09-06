import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="container mx-auto">
      <nav className="bg-zinc-200 p-4 px-10">
        <ul className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="logo text-2xl font-bold">TekSkill</h1>
          </div>
          <li className="mr-4 font-extrabold">
            <Link to="/">Products</Link>
          </li>
          <li className="mr-4 font-extrabold">
            <Link to="/cart">Cart({products.length})</Link>
          </li>
          <li className="mr-4 font-extrabold">
            <Link to="/login">Login/Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;
