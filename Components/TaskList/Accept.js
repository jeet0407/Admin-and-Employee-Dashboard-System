import React from "react";

const Accept = ({ data }) => {
  return (
    <div className="bg-cyan-400 border border-gray-200 rounded-lg h-full w-[300px] flex-shrink-0 p-4 shadow-lg">
      <div className="flex justify-between items-center text-white text-sm font-semibold mb-2">
        <span className="bg-red-600 px-2 py-1 rounded">{data.category}</span>
        <span>{data.task_date}</span>
      </div>

      <div className="text-white mb-4">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p className="mt-2 text-sm">{data.description}</p>
      </div>

      <div className="flex justify-between mt-8">
        <button className="bg-green-500 px-4 py-2 rounded font-medium text-xs">
          Mark as Completed
        </button>
        <button className="bg-red-500 px-4 py-2 rounded font-medium text-xs">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default Accept;
