import React from "react";

const Failed = ({data}) => {
  return (
    <div>
      <div className="bg-green-400 border-black rounded-[1rem] h-full w-[300px]  flex-shrink-0">
        <div className="justify-between flex items-center text-white text-sm text-semibold py-4 px-2">
          <h3 className="bg-red-600 px-2 py-1 rounded">{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>

        <div className="text-white py-4 px-2">
          <h2 className="text-white text-2xl font-bold">{data.title}</h2>
          <p className="mt-2 text-sm font-semibold">{data.decription}</p>
        </div>

        <div className="flex justify-between relative mt-[12rem] px-4">
          {/* <button className="bg-green-500 px-4 py-2 rounded font-medium text-xs">
            Mark as Completed
          </button> */}
          <button className="bg-red-500 px-4 py-2 rounded font-medium text-xs">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failed;
