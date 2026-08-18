import axios from "axios";
const urlEP = import.meta.env.PROD
  ? "/api/v1/users"
  : "http://localhost:8000/api/v1/users";

const processAPI = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      //check in the error respone, if error has response,
      //response has data ,data has error, otherwise error.message
      message: error?.response?.data?.error || error.message,
    };
  }
};

export const insertUser = async (data) => {
  console.log(data, " axios");
  const obj = {
    method: "post",
    url: urlEP + "/signup",
    data,
  };
  return processAPI(obj);
};

export const userLogin = async (data) => {
  const obj = {
    method: "post",
    url: urlEP + "/login",
    data,
  };
  return processAPI(obj);
};
