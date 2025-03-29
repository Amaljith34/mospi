import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GDP = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaChartBar className="text-yellow-400 text-2xl" />, value: "Annual GDP Trend", label: "Total Sales", change: "+10% from yesterday", color: "text-yellow-400", path: "/gdp/AnnualGDPTrend" },
    { icon: <FaChartBar className="text-green-400 text-2xl" />, value: "GDP at current and constant prices", label: "Total Order", change: "+8% from yesterday", color: "text-green-400", path: "/gdp/gdp2" },
    { icon: <FaChartBar className="text-pink-400 text-2xl" />, value: "GDP growth current and constant prices", label: "Product Sold", change: "+2% from yesterday", color: "text-pink-400", path: "/gdp/gdp3" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "GDP (Quarterly)", label: "GDP (Quarterly)", change: "+2% from yesterday", color: "text-pink-400", path: "/gdp/gdp4" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold">GDp</h2>
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

export default GDP;
