import { useState } from "react";

const handleOnChange = ({ e, userData, setUserData }) => {
  const { name, value } = e.target;
  /* spread obj to userData*/
  //setUserData({ ...userData, [name]: value });
  /* Another way to spread object */
  setUserData((prev) => ({ ...prev, [name]: value }));
};
const useFormHook = (initial) => {
  const [userData, setUserData] = useState(initial);
  return {
    userData,
    setUserData,
    handleOnChange: (e) => handleOnChange({ e, userData, setUserData }),
  };
};

export default useFormHook;
