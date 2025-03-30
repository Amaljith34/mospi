import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function GAV1a() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white flex-col">
      <div className="ml-auto">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
      <div className="flex flex-1">
        <div className="w-1/2 p-6 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-blue-400 text-center">Contribution of Agriculture</h1>
          <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg w-full h-[90%] flex items-center justify-center">
            <img src="/images/agriculturefor.png" alt="Agricultural Contribution" className="w-full h-full object-contain rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="w-1/2 p-6 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-[90%] flex items-center justify-center">
            <img src="/images/Agricultureforandfishing.png" alt="Agriculture and Fishing" className="w-full h-full object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}