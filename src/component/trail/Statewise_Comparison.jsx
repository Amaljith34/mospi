import { useState } from "react";
import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Statewise_Comparison() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const stats = [
    { icon: <FaChartBar className="text-blue-400 text-2xl" />, value: "GSDP", label: "Output Stats", change: "+5% from last quarter", color: "text-blue-400", path: "/state1" },
    { icon: <FaChartBar className="text-red-400 text-2xl" />, value: "10 INDIAN STATES BY GSD", label: "Power Usage", change: "-2% from last month", color: "text-red-400", path: "/state2" },
    { icon: <FaChartBar className="text-yellow-400 text-2xl" />, value: "10 BY NSDP", label: "Power Usage", change: "-2% from last month", color: "text-red-400", path: "/state3" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-400">Statewise Comparison</h2>
        
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <iframe
            src="/images/gvabasic.png"
            className="w-full h-[80vh] rounded-lg"
            title="Industrial Data Chart"
          />
        </div>
        
        <div className="flex flex-col gap-4 mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center cursor-pointer hover:bg-gray-700 transition w-full h-20"
              onClick={() => navigate(stat.path)}
            >
              <div className="mr-4">{stat.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
              <p className={`text-sm ${stat.color}`}>{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}