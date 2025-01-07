import React from "react";
import Accept from "./Accept";
import Complete from "./Complete";
import Failed from "./Failed";
import New from "./New";

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return <div>No tasks available</div>;
  }

  return (
    <div
      id="tasklist"
      className="h-[57%] w-full flex justify-start items-start overflow-x-auto gap-5 mt-10 flex-wrap"
    >
      {data.tasks.map((elem, indx) => {
        if (elem.active) {
          return <Accept key={indx} data={elem} />;
        } else if (elem.newTask) {
          return <New key={indx} data={elem} />;
        } else if (elem.failed) {
          return <Failed key={indx} data={elem} />;
        } else if (elem.completed) {
          return <Complete key={indx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
