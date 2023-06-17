import React, { useContext } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const isAdmin = true;
  const location = useLocation();
  const { role } = useContext(AuthContext);
  console.log(role);

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 8, y: 5 },
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <motion.ul
            className="menu p-4 w-auto h-full text-lg font-semibold bg-gray-600 text-white space-y-6"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <li>
              <NavLink
                to="/"
                className="sidebar-link"
                activeClassName="sidebar-link-active"
              >
                <AiFillHome className="sidebar-icon" />
                Home
              </NavLink>
            </li>
            <hr className="border-amber-500 my-6" />
            {isAdmin && (
              <>
                <li>
                  {role === "Student" && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink
                        to="/dashboard/studentDashboard"
                        className={
                          isActive("/dashboard/studentDashboard")
                            ? "border-2 p-5 rounded-xl bg-gray-900"
                            : ""
                        }
                      >
                        <IoMdSchool className="sidebar-icon" />
                        Student Dashboard
                      </NavLink>
                      <ul>
                        <li>
                          <NavLink
                            to="/dashboard/studentDashboard/enrolledClasses"
                            className={
                              isActive(
                                "/dashboard/studentDashboard/enrolledClasses"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            Enrolled Classes
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/studentDashboard/paymentHistory"
                            className={
                              isActive(
                                "/dashboard/studentDashboard/paymentHistory"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            Payment History
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/studentDashboard/mySelectedClasses"
                            className={
                              isActive(
                                "/dashboard/studentDashboard/mySelectedClasses"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            My Selected Classes
                          </NavLink>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>
                <hr className="border-amber-500 my-6" />
                <li>
                  {role === "Admin" && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink
                        to="/dashboard/adminDashboard"
                        className={
                          isActive("/dashboard/adminDashboard")
                            ? "border-2 p-5 rounded-xl bg-gray-900"
                            : ""
                        }
                      >
                        <AiOutlineSetting className="sidebar-icon" />
                        Admin Dashboard
                      </NavLink>
                      <ul>
                        <li>
                          <NavLink
                            to="/dashboard/adminDashboard/manageUser"
                            className={
                              isActive(
                                "/dashboard/adminDashboard/manageUser"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            Manage User
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/adminDashboard/manageClasses"
                            className={
                              isActive(
                                "/dashboard/adminDashboard/manageClasses"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            Manage Classes
                          </NavLink>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>
                <hr className="border-amber-500 my-6" />
                <li>
                  {role === "Instructor" && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink
                        to="/dashboard/instructorDashboard"
                        className={
                          isActive("/dashboard/instructorDashboard")
                            ? "border-2 p-5 rounded-xl bg-gray-900"
                            : ""
                        }
                      >
                        <AiOutlineUser className="sidebar-icon" />
                        Instructor Dashboard
                      </NavLink>
                      <ul>
                        <li>
                          <NavLink
                            to="/dashboard/instructorDashboard/myClasses"
                            className={
                              isActive(
                                "/dashboard/instructorDashboard/myClasses"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            My Classes
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/dashboard/instructorDashboard/addClasses"
                            className={
                              isActive(
                                "/dashboard/instructorDashboard/addClasses"
                              )
                                ? "border-t-2  border-b-2 bg-gray-900"
                                : ""
                            }
                          >
                            Add A Class
                          </NavLink>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>
                <hr className="border-amber-500 my-6" />
              </>
            )}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;








