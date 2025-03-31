import { useState } from "react";
import { FaTachometerAlt, FaChartBar } from "react-icons/fa";
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
        } bg-black h-full transition-all duration-300 p-4 flex flex-col justify-between shadow-lg`}
      >
        <div>
          {/* Sidebar Toggle */}
          <button onClick={handleToggleSidebar} className="mb-6 text-blue-500 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Sidebar Links */}
          <ul>
            {[
              { path: "/", label: "Dashboard", icon: <FaTachometerAlt /> },
              { path: "/GDP", label: "GDP", icon: <FaChartBar className="text-yellow-400" /> },
              { path: "/GrossValueAdded", label: "Gross Value Added", icon: <FaChartBar className="text-green-400" /> },
              { path: "/GrossIndustrialUsage", label: "Gross Industrial Usage", icon: <FaChartBar className="text-pink-400" /> },
              { path: "/GFCF", label: "GFCF", icon: <FaChartBar className="text-neutral-600" /> },
              { path: "/Key_Aggregates_National_Account", label: "Key Aggregates of National Account", icon: <FaChartBar className="text-blue-400" /> },
              { path: "/StatewiseComparison", label: "Statewise Comparison", icon: <FaChartBar className="text-fuchsia-400" /> },
              { path: "/StatisticalAnalysis", label: "Statistical Analysis", icon: <FaChartBar className="text-red-400" /> },
            ].map(({ path, label, icon }) => (
              <li key={path} className="mb-4">
                <Link to={path} className="flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer transition-all">
                  {icon} {isOpen && <span>{label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-900 text-white overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}





// import { useState } from "react";
// import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link, Outlet } from "react-router-dom";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isGrossValueAddedOpen, setIsGrossValueAddedOpen] = useState(false);

//   const handleToggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleGrossValueAdded = () => {
//     setIsGrossValueAddedOpen(!isGrossValueAddedOpen);
//   };

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? "w-64" : "w-20"
//         } bg-black h-full transition-all duration-300 p-4 flex flex-col justify-between`}
//       >
//         <div>
//           {/* Sidebar Toggle */}
//           <button onClick={handleToggleSidebar} className="mb-6 text-blue-500">
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>

//           {/* Sidebar Links */}
//           <ul>
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/dashboard" className="flex items-center gap-4">
//                 <FaTachometerAlt /> {isOpen && "Dashboard"}
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/GDP" className="flex items-center gap-4">
//                 <FaUsers /> {isOpen && "GDP"}
//               </Link>
//             </li>
            
//             {/* Gross Value Added with Submenu */}
//             <li className="mb-4 p-2 hover:bg-blue-600 rounded cursor-pointer" onClick={toggleGrossValueAdded}>
//               <div className="flex items-center gap-4">
//                 <FaShoppingCart /> {isOpen && "Gross Value Added"}
//               </div>
//             </li>
//             {isGrossValueAddedOpen && (
//               <ul className="ml-6">
//                 <li className="p-2 hover:bg-blue-500 rounded cursor-pointer">
//                   <Link to="/GrossValueAdded/one">One</Link>
//                 </li>
//                 <li className="p-2 hover:bg-blue-500 rounded cursor-pointer">
//                   <Link to="/GrossValueAdded/two">Two</Link>
//                 </li>
//                 <li className="p-2 hover:bg-blue-500 rounded cursor-pointer">
//                   <Link to="/GrossValueAdded/three">Three</Link>
//                 </li>
//               </ul>
//             )}
            
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/GrossIndustrialUsage" className="flex items-center gap-4">
//                  <FaChartBar className="text-yellow-400 text-2xl" /> {isOpen && "Gross Industrial Usage"}
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/GFCF" className="flex items-center gap-4">
//                 <FaCog /> {isOpen && "GFCF"}  
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/Key_Aggregates_National_Account" className="flex items-center gap-4">
//                 <FaCog /> {isOpen && "Key Aggregates of National Account"}
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/StatewiseComparison" className="flex items-center gap-4">
//                 <FaCog /> {isOpen && "Statewise Comparison"}
//               </Link>
//             </li>
//             <li className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer">
//               <Link to="/StatisticalAnalysis" className="flex items-center gap-4">
//                 <FaCog /> {isOpen && "Statistical Analysis"}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// }
