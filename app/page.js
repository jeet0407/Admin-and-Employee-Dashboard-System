"use client";

import React, { useEffect, useState } from "react";
import Login from "@/Components/Authorization/Login";
import Emp_dash from "@/Components/Dashboarad/Emp_dash";
import Admin_dash from "@/Components/Dashboarad/Admin_dash";
import { setLocalStorage, getLocalStorage } from "@/utils/localStorage";

const Page = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    // Initialize localStorage with employee data if it doesn't exist
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const data = getLocalStorage();
    setAuthData(data);

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      setLoggedInUserData(authData.admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: authData.admin }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Employee data not available");
    }
  };

  if (!authData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "employee" && <Emp_dash data={loggedInUserData} />}
      {user === "admin" && <Admin_dash data={loggedInUserData} />}
    </div>
  );
};

export default Page;
