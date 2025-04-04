import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Gfcf1() {
    return (
      <div className="flex h-screen bg-gray-900 text-white">
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-blue-400">Contribution of GFCF</h1>
            <div className="ml-auto">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => window.history.back()}
              >
                Back
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg h-[80vh] flex items-center justify-center">
            <img
              src="/images/gfcf 1.png"
              alt="Descriptive Text for Image"
              className="w-full h-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    );
  }
  

