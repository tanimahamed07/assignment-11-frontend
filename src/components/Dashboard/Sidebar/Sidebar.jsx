import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/images/image-removebg-preview (2).png";
// Icons
import { GrLogout } from "react-icons/gr";
import { FaUserEdit, FaChartLine } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
// Menu Imports
import MenuItem from "./Menu/MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import SellerMenu from "./Menu/SellerMenu";
import CustomerMenu from "./Menu/CustomerMenu";
import useRole from "../../../hooks/useRole";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [role] = useRole();
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed.");
    }
  };

  return (
    <>
      {/* Small Screen Navbar (Mobile Header) */}
      <div className="flex justify-between md:hidden shadow-md fixed w-full z-30 border-b">
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:bg-transparent p-0"
        >
          <img src={logo} alt="LoanLink" className="h-[70px] w-auto" />
        </NavLink>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          z-20 md:fixed flex flex-col justify-between overflow-x-hidden 
          bg-white 
          w-64 space-y-6 px-4 py-7 
          absolute inset-y-0 left-0 
          transform transition duration-300 ease-in-out 
          border-r border-gray-200
          ${isActive ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:pt-4
        `}
      >
        <div className="flex flex-col h-full">
          {/* Top Content: Logo & Header (Desktop) */}
          <div className="hidden md:block">
            <div className="w-full flex px-2 py-4 justify-center items-center mx-auto border-b border-gray-100">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="logo" className="h-[80px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="space-y-2">
              <MenuItem
                icon={FaChartLine}
                label="Overview"
                address="/dashboard"
              />

              {role === "borrower" && <CustomerMenu />}
              {role === "manager" && <SellerMenu />}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>

          {/* Bottom Content: Profile & Logout */}
          <div className="mt-8">
            <hr className="border-gray-200" />

            <MenuItem
              icon={FaUserEdit}
              label="My Profile"
              address="/dashboard/profile"
            />

            <button
              onClick={handleLogout}
              className="flex cursor-pointer w-full items-center px-4 py-3 mt-4 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-300 transform font-medium"
            >
              <GrLogout className="w-5 h-5" />
              <span className="mx-4">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
