import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/add-products"} >Add Product</NavLink>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="normal-case text-[#60196d]  font-cairo font-bold text-5xl">
            Flavor Fusion
          </Link>
        </div>
        <div className="navbar-end space-x-3">
          <button className="btn  hover:bg-[#60196d] btn-outline">Register</button>
          <button className="btn bg-[#60196d] text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
