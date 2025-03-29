import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Key_Aggregates_National_Account() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
    
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-400">Key Aggregates of National Account</h1>
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <iframe
            src="/graph1.html"
            className="w-full h-[80vh] rounded-lg"
            title="Task Management Page"
          />
        </div>
      </div>
    </div>
  );
}