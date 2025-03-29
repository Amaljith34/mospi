import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Gfcf15() {
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
          Private  Financial Corporation
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
          <img
            src="/images/PRIVATE FINANCIAL CORPORATN.png"
            alt="Descriptive Text for Image"
            className="w-full h-[80vh] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
