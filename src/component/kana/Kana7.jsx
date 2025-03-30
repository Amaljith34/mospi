import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Kana7() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-blue-400">
          Imports and Exports of goods and services at current price and constant price
          </h1>
          <div className="ml-auto">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <iframe
            src="/Kanagraph.html"
            className="w-full h-[80vh] rounded-lg"
            title="Task Management Page"
          />
        </div>
      </div>
    </div>
  );
}
