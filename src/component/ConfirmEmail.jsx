// src/pages/ConfirmEmail.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      return;
    }
    const urlEP = import.meta.env.VITE_ROOT_URL + "/api/v1/users/";
    fetch(`${urlEP}email_confirm?token=${token}`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, [searchParams]);
  console.log(`${urlEP}email_confirm?token=${token}`);
  return <div>This link is invalid or has expired.</div>;
};

export default ConfirmEmail;
