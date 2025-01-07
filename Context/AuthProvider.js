import AllTask from '@/Components/Others/AllTask';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    // Set localStorage data only if not already present
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
      console.log("Set default data for employees and admin in localStorage.");
    } else {
      console.log("LocalStorage already has employees data.");
    }

    // Retrieve data from localStorage and update state
    const data = getLocalStorage();
   
    setAuthData(data);
  }, []);

  return (
    <AuthContext.Provider value={{authData , setAuthData}}>
      {children}
    
    </AuthContext.Provider>
  );
};

export default AuthProvider;
