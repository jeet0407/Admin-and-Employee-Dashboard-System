import React from "react";

const TaskBoard = ({ data }) => {
  // Prevent errors if data or task_count is missing
  if (!data || !data.taskCounts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between mt-10 screen gap-5 ">

      {/* New Task */}
      <div className="bg-yellow-500 w-[45%] h-40 rounded-xl py-9 px-10 text-white">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      {/* Completed */}
      <div className="bg-green-500 w-[45%] h-40 rounded-xl py-9 px-10 text-white">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>

      {/* Active Task */}
      <div className="bg-blue-500 w-[45%] h-40 rounded-xl py-9 px-10 text-white">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

      {/* Failed */}
      <div className="bg-red-500 w-[45%] h-40 rounded-xl py-9 px-10 text-white">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>

    </div>
  );
};

export default TaskBoard;
