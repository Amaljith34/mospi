import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-black h-full transition-all duration-300 p-4 flex flex-col justify-between`}
      >
        <div>
          {/* Sidebar Toggle */}
          <button onClick={handleToggleSidebar} className="mb-6 text-blue-500">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Sidebar Links */}
          <ul>
            <li
              className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
              onClick={handleToggleSidebar} 
            >
             <Link to="/a" className="flex items-center gap-4">
                <FaTachometerAlt /> {isOpen && "Dashboard"}
              </Link>
            </li>
            <li
              className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
              onClick={handleToggleSidebar} 
            >
            <Link to="/nest" className="flex items-center gap-4">
              <FaUsers /> {isOpen && "Users"}
            </Link>
            </li>
            <li
              className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
              onClick={handleToggleSidebar} 
            >
             <Link to="/third" className="flex items-center gap-4">
              <FaShoppingCart /> {isOpen && "Orders"}
              </Link>
            </li>
            <li
              className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
              onClick={handleToggleSidebar} 
            >
              <FaCog /> {isOpen && "Settings"}
            </li>
          </ul>
        </div>
      </div>

      

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* 👈 This is where the child routes will be rendered */}
      </div>
      
    </div>
  );
}