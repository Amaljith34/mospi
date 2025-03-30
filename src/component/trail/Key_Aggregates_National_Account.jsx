import { FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Key_Aggregates_National_Account = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaChartBar className="text-yellow-400 text-2xl" />, value: "Key aggregates of national account at current price (in crore) for2011-12 to 2021-22", label: "Total Sales", change: "+10% from yesterday", color: "text-yellow-400", path: "/kana1" },
    { icon: <FaChartBar className="text-pink-400 text-2xl" />, value: "Key aggregates of national account at constant price (in crore)for 2011-12 to 2021-22", label: "Product Sold", change: "+2% from yesterday", color: "text-pink-400", path: "/kana2" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Exports of goods and services at current price", label: "Exports of goods and services at current price", change: "+2% from yesterday", color: "text-pink-400", path: "/kana3" },
    { icon: <FaChartBar className="text-green-400 text-2xl" />, value: "Exports of goods and services at constant price", label: "Exports of goods and services at constant price", change: "+2% from yesterday", color: "text-pink-400", path: "/kana4" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Imports of goods and services at current price", label: "Imports of goods and services at constant price", change: "+2% from yesterday", color: "text-pink-400", path: "/kana5" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Imports of goods and services at constant price", label: "Imports of goods and services at constant price", change: "+2% from yesterday", color: "text-pink-400", path: "/kana6" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Imports and Exports of goods and services at current price", label: "Imports and Exports of goods and services at current price", change: "+2% from yesterday", color: "text-pink-400", path: "/kana7" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Imports and Exports of goods and services at constant price", label: "Imports and Exports of goods and services at constant price", change: "+2% from yesterday", color: "text-pink-400", path: "/kana8" },
    { icon: <FaChartBar className="text-neutral-600 text-2xl" />, value: "Net saving and Gross saving", label: "Net saving and Gross saving", change: "+2% from yesterday", color: "text-pink-400", path: "/kana9" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold">GDP</h2>
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

export default Key_Aggregates_National_Account;
