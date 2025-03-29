import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function GFCF() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
    
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-400">GFCF</h1>
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/images/gfcfprivatefinacialtotal.png"
            alt="Descriptive Text for Image"
            className="w-full h-[80vh] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}