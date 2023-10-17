import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/add-products"}>Add Product</NavLink>
    </>
  );

  return (
    <div className="container mx-auto pt-4 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu text-base font-semibold flex items-center space-x-6 menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  space-y-4 mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {navLinks}
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </ul>
          </div>
          <Link className="normal-case text-main font-cairo text-4xl font-bold lg:text-5xl ">
            Flavor Fusion
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex space-x-3">
          <button className="btn  hover:bg-main btn-outline">Register</button>
          <button className="btn bg-main hover:bg-main text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
