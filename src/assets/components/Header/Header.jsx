import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Footer } from "flowbite-react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  text-neutral-700 bg-neutral-200 dark:text-neutral-200 ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                  href="#pablo"
                >
                  Started kabab house
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition duration-500"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaBars></FaBars>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <div className="nav-item">
                    <Link
                      to="/"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="nav-item">
                    <Link
                      to="/blog"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="nav-item">
                    <Link
                      to="/blog"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                    >
                      Profile
                    </Link>
                  </div>
                  <div className="nav-item">
                    {user?.email ? (
                      <button
                        onClick={handleLogOut}
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                      >
                        log out
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                      >
                        log in
                      </Link>
                    )}
                  </div>
                  <div className="nav-item">
                    <Link
                      to="/signUp"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                    >
                      Sign up
                    </Link>
                  </div>
                  <div className="nav-item">
                    <Link
                      className="px-3 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75"
                      href="#pablo"
                    >
                      <i className=" rounded text-lg leading-lg  text-neutral-700 dark:text-neutral-200 opacity-75">
                        {" "}
                        <img
                          className="w-8 bg-white  rounded-full border border-gray-100 shadow-sm hover:{user?.name}"
                          src={user?.photoURL}
                        />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
