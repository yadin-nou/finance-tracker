import axios from "axios";
const urlEP = import.meta.env.PROD
  ? "/api/v1/users"
  : "http://localhost:8000/api/v1/users";

const processAPI = async (method, url, userData) => {
  try {
    const response = await axios({
      method,
      url: url,
      data: userData,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const insertUser = async (userData) => {
  const url = urlEP + "/signup";
  return processAPI("post", url, userData);
};
