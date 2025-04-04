import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function State2() {
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
          <h1 className="text-3xl font-bold text-blue-400">10 INDIAN STATES BY GSD</h1>
          <div className="ml-auto">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>

        {/* Top Image */}
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg flex justify-center">
          <img
            src="/images/top10gsdp.png"
            alt="Top Image"
            className="w-auto h-auto max-w-full max-h-[40vh] rounded-lg object-contain"
          />
        </div>

        {/* Bottom Image */}
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg flex justify-center">
          <img
            src="/images/lessstate gsdp.png"
            alt="Bottom Image"
            className="w-auto h-auto max-w-full max-h-[40vh] rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
