import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GFCF = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaChartBar className="text-yellow-400 text-2xl" />, value: "Contribution of GFCF", label: "Total Sales", change: "+10% from yesterday", color: "text-yellow-400", path: "/gfcf1" },
    { icon: <FaChartBar className="text-green-400 text-2xl" />, value: "Public Non Financial Corporation", label: "Total Order", change: "+8% from yesterday", color: "text-green-400", path: "/gfcf2" },
    { icon: <FaChartBar className="text-pink-400 text-2xl" />, value: "Private Non Financial Corporation", label: "Product Sold", change: "+2% from yesterday", color: "text-pink-400", path: "/gfcf3" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Public  Financial Corporation", label: "GDP (Quarterly)", change: "+2% from yesterday", color: "text-neutral-400", path: "/gfcf4" },
    { icon: <FaChartBar className="text-amber-600 text-2xl" />, value: "Private  Financial Corporation", label: "GDP (Quarterly)", change: "+2% from yesterday", color: "text-amber-400", path: "/gfcf5" },
    { icon: <FaChartBar className="text-cyan-400 text-2xl" />, value: "ordr and subheding", label: "GDP (Quarterly)", change: "+2% from yesterday", color: "text-cyan-400", path: "/gfcf6" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold">GFCF</h2>
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
};

export default GFCF;
