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

  if (status === "loading") return <p>Confirming your email...</p>;
  if (status === "success") return <p>Email confirmed! You can now log in.</p>;
  return <p>This link is invalid or has expired.</p>;
};

export default ConfirmEmail;
