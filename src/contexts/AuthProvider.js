
   
import React, { createContext, useState } from "react";
import useServices from "../hooks/useServices.js";
import useFirebase from "../hooks/useFirebase.js";
export const AuthContext = createContext();
const AuthProvider = (props) => {
  const allContext = useFirebase();
  const [services] = useServices();
  
  

  const data = {
    services,
    allContext,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;