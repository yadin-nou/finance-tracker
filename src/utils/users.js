import { getUser } from "../axiosHelper/axiosConnection";
import { getLocalStorage } from "../localstorage/localStorage";

export const autoLogin = async () => {
  const JWTaccess = getLocalStorage("jwtAccess");
  //check token avaraiable or not
  if (JWTaccess) {
    const { status, user } = await getUser();
    return status === "success" ? user : {};
  }
};
