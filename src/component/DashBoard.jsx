import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

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
          <button onClick={() => setIsOpen(!isOpen)} className="mb-6 text-blue-500">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          {/* Sidebar Links */}
          <ul>
            <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
              <FaTachometerAlt /> {isOpen && "Dashboard"}
            </li>
            <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
              <FaUsers /> {isOpen && "Users"}
            </li>
            <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
              <FaShoppingCart /> {isOpen && "Orders"}
            </li>
            <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
              <FaCog /> {isOpen && "Settings"}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-400">Dashboard</h1>
        <p className="mt-4 text-gray-400">Welcome to your admin panel.</p>
      </div>
    </div>
  );
}