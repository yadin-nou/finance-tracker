import React, { createContext, useContext, useState } from "react";
import { getTransactionAxios } from "../axiosHelper/axiosConnection";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [transData, setTransData] = useState([]);

  // const getTranctions = async () => {
  //   try {
  //     const { status, data } = await getTransactionAxios();
  //     status === "success" && setTransData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
  //   <userContext.Provider
  //     value={{ user, setUser, transData, setTransData, getTranctions }}
  //   >
  //     {children}
  //   </userContext.Provider>
  // );
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  return useContext(userContext);
};
