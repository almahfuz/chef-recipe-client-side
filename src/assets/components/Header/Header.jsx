import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { Footer } from "flowbite-react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ">
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
                  <div className="">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "px-3 py-2 flex items-center text-xs uppercase leading-snug text-red-500 font-bold"
                          : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-neutral-700 hover:opacity-75"
                      }
                    >
                      Home
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive
                          ? "px-3 py-2 flex items-center text-xs uppercase leading-snug text-red-500 font-bold"
                          : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-neutral-700 hover:opacity-75"
                      }
                    >
                      Blog
                    </NavLink>
                  </div>

                  <div className="nav-item">
                    {user?.email ? (
                      <NavLink
                        onClick={handleLogOut}
                        className={({ isActive }) =>
                          isActive
                            ? "px-3 py-2 flex items-center text-xs uppercase leading-snug text-red-700 font-bold"
                            : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-neutral-700 hover:opacity-75"
                        }
                      >
                        log out
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? "px-3 py-2 flex items-center text-xs uppercase leading-snug text-red-500 font-bold"
                            : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-neutral-700 hover:opacity-75"
                        }
                      >
                        log in
                      </NavLink>
                    )}
                  </div>

                  <div className="nav-item">
                    <NavLink className="px-3 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75">
                      <i className=" rounded text-lg leading-lg  text-neutral-700 dark:text-neutral-200 opacity-75">
                        <div className="group flex relative">
                          <span className=" text-white px-2 py-1">
                            <img
                              className={`w-8 bg-white  rounded-full border border-gray-100 shadow-sm`}
                              src={user?.photoURL}
                            />
                          </span>
                          <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-1 mx-auto"
                          >
                            {user?.displayName}
                          </span>
                        </div>
                      </i>
                    </NavLink>
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
