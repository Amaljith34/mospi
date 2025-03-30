import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard2 = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaChartBar className="text-yellow-400 text-2xl" />, value: "GDP", label: "Total Sales", change: "", color: "text-yellow-400", path: "/GDP" },
    { icon: <FaChartBar className="text-green-400 text-2xl" />, value: "Gross Value Added", label: "Total Order", change: "", color: "text-green-400", path: "/GrossValueAdded" },
    { icon: <FaChartBar className="text-pink-400 text-2xl" />, value: "Gross Industrial Usage", label: "Product Sold", change: "", color: "text-pink-400", path: "/GrossIndustrialUsage" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "GFCF", label: "Product Sold", change: "", color: "text-pink-400", path: "/GrossIndustrialUsage" },
    { icon: <FaChartBar className="text-blue-400 text-2xl" />, value: "Key Aggregates of National Account", label: "New Customer", change: "", color: "text-blue-400", path: "/Key_Aggregates_National_Account" },
    { icon: <FaChartBar className="text-fuchsia-400 text-2xl" />, value: "Statewise Comparison", label: "New Customer", change: "", color: "text-blue-400", path: "/StatewiseComparison" },
    { icon: <FaChartBar className="text-red-400 text-2xl" />, value: "Statistical Analysis", label: "New Customer", change: "", color: "text-blue-400", path: "/StatisticalAnalysis" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold">National Account Statistics</h2>
        <p className="text-gray-400">Economic Growth, GVA, and GDP Forecasting</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:bg-gray-700 transition"
              onClick={() => navigate(stat.path)}
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
              <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;





// import { useState } from "react";
// import { FaTachometerAlt, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Dashboard() {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleToggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Sidebar */}
      // <div
      //   className={`${
      //     isOpen ? "w-64" : "w-20"
      //   } bg-black h-full transition-all duration-300 p-4 flex flex-col justify-between`}
      // >
//         <div>
//           {/* Sidebar Toggle */}
//           <button onClick={handleToggleSidebar} className="mb-6 text-blue-500">
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>

//           {/* Sidebar Links */}
//           <ul>
//             <li
//               className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
//               onClick={handleToggleSidebar} 
//             >
//               <FaTachometerAlt /> {isOpen && "Dashboard"}
//             </li>
//             <li
//               className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
//               onClick={handleToggleSidebar} 
//             >
//               <FaUsers /> {isOpen && "Users"}
//             </li>
//             <li
//               className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
//               onClick={handleToggleSidebar} 
//             >
//               <FaShoppingCart /> {isOpen && "Orders"}
//             </li>
//             <li
//               className="mb-4 flex items-center gap-4 p-2 hover:bg-blue-600 rounded cursor-pointer"
//               onClick={handleToggleSidebar} 
//             >
//               <FaCog /> {isOpen && "Settings"}
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <h1 className="text-3xl font-bold text-blue-400">Dashboard</h1>
//         <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
//           <iframe
//             src="/graph1.html"
//             className="w-full h-[80vh] rounded-lg"
//             title="Task Management Page"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
