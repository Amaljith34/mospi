import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GVA1b() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen text-white flex-col bg-gray-900">
      <div className="ml-auto p-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
      <h1 className="text-3xl font-bold text-blue-400 text-center">Contribution of Manufacturing in Value Added</h1>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
        {/* Top Row */}
        <div className="flex w-full gap-6">
          <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-center">
            <img src="/images/manuconstantgva.png" alt="Agricultural Contribution" className="w-full h-full object-contain rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-center">
            <img src="/images/manugvacurrent.png" alt="Agriculture and Fishing" className="w-full h-full object-contain rounded-lg shadow-lg" />
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex w-full gap-6">
          <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-center">
            <img src="/images/transportcurrent.png" alt="Farming" className="w-full h-full object-contain rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-center">
            <img src="/images/transprtconstntoverlf.png" alt="Fishery" className="w-full h-full object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
