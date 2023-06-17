import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import icon from "../../assets/logo/logo.png";
import userLogo from "../../assets/logo/user.png";
import DarkReader from "darkreader";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Darkreader from "react-darkreader";
import useAdmin from "../../Hook/useAdmin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const [isAdmin] = useAdmin();
  const [isStudent] = useAdmin();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    DarkReader.toggle();
  };

  return (
    <>
      <ToastContainer position="center" />
      <nav className="bg-gray-800 lg:fixed w-full  top-0 z-10">
        <div className="flex justify-between h-16 container  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <NavLink
              className="btn btn-ghost normal-case text-xl text-slate-50 font-bold  flex items-center"
              exact
              to="/"
            >
              <img src={icon} alt="Website Logo" className="h-10 w-10 mr-5 " />
              <h1>Edu_Valley</h1>
            </NavLink>
          </div>

          <div className="navbar-start ml-8 hidden lg:flex justify-between items-center">
            <div className="flex items-center">
              <ul className="menu menu-horizontal px-1 items-center">
                <li>
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructor"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classCart"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                {user && (
                  <li>
                    <NavLink
                      className={(isActive) =>
                        isActive
                          ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                          : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                      }
                      to={
                        isAdmin
                          ? "dashboard/adminDashboard"
                          : isStudent
                          ? "dashboard/studentDashboard"
                          : "dashboard/instructorDashboard"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex items-center">
              <ul className="menu menu-horizontal px-1 items-center">
                {user && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                          : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                      }
                      to="/dashboard"
                    >
                      <img
                        title={user.displayName}
                        src={user.photoURL}
                        className="h-10 w-10 mr-2 border-amber-500 border-2 rounded-full"
                        alt="User"
                      />
                    </NavLink>
                  </li>
                )}
                {!user && (
                  <li>
                    <div>
                      <img
                        title="User"
                        src={userLogo}
                        className="h-10 w-10 mr-2 border-amber-500 border-2 rounded-full"
                        alt="User"
                      />
                    </div>
                  </li>
                )}
                {!user && (
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                          : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li onClick={logout}>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                          : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                      }
                    >
                      Logout
                    </NavLink>
                  </li>
                )}
              </ul>
              <Darkreader />
            </div>
          </div>

          <div className="flex sm:h-full items-center">
            <button
              tabIndex={0}
              className={`btn bg-amber-500 lg:bg-transparent lg:hidden relative p-2 ${
                isMenuOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-200 transform rotate-180"
                  fill="none"
                  viewBox="0 0 16 18"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4h0M10 9v2M14 9v2M6 9v2M2 9v2"
                  />
                </svg>
              )}
            </button>

            {isMenuOpen && (
              <div
                className="fixed inset-0 opacity-50"
                onClick={closeMenu}
              ></div>
            )}
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content  p-8 shadow bg-gray-800 rounded-box w-64 ${
                isMenuOpen ? "block" : "hidden"
              } lg:hidden fixed left-0 top-0`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                      : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructor"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                      : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                      : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                  }
                >
                  Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                      : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                  }
                >
                  Blog
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="dashboard/instructorDashboard/myClasses"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                {!user && (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                  >
                    Login
                  </NavLink>
                )}
                {user && (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-500 text-lg font-semibold px-3 py-2 rounded-md"
                        : "text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-gray-700"
                    }
                    onClick={logout}
                  >
                    Logout
                  </NavLink>
                )}
              </li>
              <li>
                <Darkreader />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
