import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { BsSunFill, BsMoonFill, BsCart3 } from "react-icons/bs";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, darkTheme, setDarkTheme, loading, userSignOut } =
    useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink className={"px-4 py-2 rounded-full bg-transparent "} to={"/"}>
        Home
      </NavLink>
      <NavLink
        className={"px-4 py-2 rounded-full bg-transparent "}
        to={"/add-product"}
      >
        Add Product
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged Out Successfully");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div
      className={`${
        darkTheme ? "bg-[#161616] text-white" : "bg-base-300 text-black"
      }`}
    >
      <div className="container mx-auto pt-4 ">
        <div className={`navbar  pr-2 md:px-20 md:pr-0 lg:px-9 xl:px-0`}>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu  font-semibold flex items-center space-x-6 menu-horizontal px-1">
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
                className={`menu menu-sm dropdown-content  space-y-4 mt-3 z-[1] p-4 shadow ${
                  darkTheme ? "bg-main" : "bg-base-100"
                } rounded-box w-52 font-semibold`}
              >
                {navLinks}
                {user ? (
                  ""
                ) : (
                  <>
                    <NavLink
                      className={"px-4 py-2 rounded-full bg-transparent "}
                      to={"/login"}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className={"px-4 py-2 rounded-full bg-transparent "}
                      to={"/register"}
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </ul>
            </div>
            <h3
              className={`normal-case ${
                darkTheme ? "text-white" : "text-main"
              } font-cairo text-4xl font-bold lg:text-4xl`}
            >
              <Link to={"/"}>Flavor Fusion</Link>
            </h3>
          </div>
          <div className="navbar-end space-x-3">
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <div>
                {user ? (
                  <div className="flex items-center gap-1  md:gap-4">
                    <Link to={`/cart/${user?.uid}`}>
                      <BsCart3 className="text-2xl"></BsCart3>
                    </Link>
                    <div className="dropdown dropdown-end z-40 text-black">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            className="border-2 rounded-full border-[#2257ca]"
                            src={
                              user.photoURL
                                ? user.photoURL
                                : "https://i.ibb.co/bHYZB8H/user-placehoder.png"
                            }
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
                      >
                        <li className="font-semibold text-base text-center">
                          {user.displayName}
                        </li>
                        <li>
                          <button
                            onClick={handleSignOut}
                            className="btn bg-[#2257ca] text-white w-full rounded-lg text-center btn-sm"
                          >
                            Logout
                          </button>
                        </li>
                        <hr className="flex md:hidden" />
                        <>
                          <div className="flex md:hidden items-center gap-3">
                            <h3 className="font-semibold">Switch Theme : </h3>
                            <div>
                              <button
                                onClick={() => setDarkTheme(!darkTheme)}
                                className="btn bg-main hover:bg-main text-white  rounded-lg  btn-sm"
                              >
                                {darkTheme ? (
                                  <BsSunFill></BsSunFill>
                                ) : (
                                  <BsMoonFill></BsMoonFill>
                                )}
                              </button>
                            </div>
                          </div>
                        </>
                      </ul>
                    </div>

                    <div
                      className="tooltip hidden md:block "
                      data-tip="Switch Theme"
                    >
                      <label className="swap swap-rotate scale-75">
                        {/* this hidden checkbox controls the state */}
                        <input
                          onClick={() => setDarkTheme(!darkTheme)}
                          type="checkbox"
                        />

                        {/* sun icon */}
                        <svg
                          className="swap-on fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                          className="swap-off fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="items-center hidden lg:flex gap-3">
                    <Link to={"/register"}>
                      {" "}
                      <button
                        className={`${
                          darkTheme
                            ? "btn bg-[#2257ca] hover:bg-[#2257ca] hover:scale-90 border-none text-white"
                            : "btn  hover:bg-main btn-outline"
                        }`}
                      >
                        Register
                      </button>
                    </Link>
                    <Link to={"/login"}>
                      {" "}
                      <button
                        className={`${
                          darkTheme
                            ? "btn bg-[#2257ca] hover:bg-[#2257ca] hover:scale-90 border-none text-white"
                            : "btn bg-main text-white hover:bg-main"
                        }`}
                      >
                        Login
                      </button>
                    </Link>

                    {/* theme toggle section */}

                    <div className="tooltip " data-tip="Switch Theme">
                      <label className="swap swap-rotate scale-75">
                        {/* this hidden checkbox controls the state */}
                        <input
                          onClick={() => setDarkTheme(!darkTheme)}
                          defaultChecked
                          type="checkbox"
                        />

                        {/* sun icon */}
                        <svg
                          className="swap-on fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                          className="swap-off fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                )}

                {!user && (
                  <div className="lg:hidden flex scale-75 pr-4">
                    <div className="tooltip " data-tip="Switch Theme">
                      <label className="swap swap-rotate scale-75">
                        {/* this hidden checkbox controls the state */}
                        <input
                          onClick={() => setDarkTheme(!darkTheme)}
                          type="checkbox"
                        />

                        {/* sun icon */}
                        <svg
                          className="swap-on fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                          className="swap-off fill-current w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
