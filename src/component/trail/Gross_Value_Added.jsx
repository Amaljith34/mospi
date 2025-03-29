import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Gross_Value_Added = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaChartBar className="text-yellow-400 text-2xl" />, value: "Contribution of Agriculture", label: "Total Sales", change: "+10% from yesterday", color: "text-yellow-400", path: "/GDP" },
    { icon: <FaChartBar className="text-green-400 text-2xl" />, value: "Forestry and Fishing in Value Added", label: "Total Order", change: "+8% from yesterday", color: "text-green-400", path: "/Gross Value Added" },
    { icon: <FaChartBar className="text-pink-400 text-2xl" />, value: "Contribution of Manufacturing in Value Added", label: "Product Sold", change: "+2% from yesterday", color: "text-pink-400", path: "/Gross Industrial Usage" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Contribution of Transport, Storage Storage", label: "Product Sold", change: "+2% from yesterday", color: "text-pink-400", path: "/GFCF" },
    { icon: <FaChartBar className="text-amber-700 text-2xl" />, value: "Communication & Service in Value Added", label: "Product Sold", change: "+2% from yesterday", color: "text-pink-400", path: "/GFCF" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold">Today's Sales</h2>
        <p className="text-gray-400">Sales Summary</p>
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

export default Gross_Value_Added;
