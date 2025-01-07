import React from "react";
import Header from "@/Components/Others/Header";
import CreateTask from "@/Components/Others/CreateTask";
import AllTask from "@/Components/Others/AllTask";

const Admin_dash = ({data}) => {
  return (
    <div className="p-10 bg-gray-100 h-screen">
      <Header data = {data}/>

      <CreateTask />
      <AllTask />

      

    </div>


  );
};

export default Admin_dash;
