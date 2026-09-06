// src/pages/ConfirmEmail.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../context/userContext";

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const urlEP = import.meta.env.VITE_ROOT_URL + "/api/v1/users/";
  const token = searchParams.get("token");
  const navi = useNavigate();
  const { user, setUser } = useUser();

  useEffect(() => {
    user?._id && navi("/dashboard");
    //when variable change, use effect re-run
  }, [user?._id, navi]);

  const link = urlEP + "email_confirm?token=" + token;
  return (
    <div className="d-flex justify-content-center">
      <p className="fs-3">
        Please{" "}
        <a href={link} style={{ color: "#e546b5ff" }}>
          click here
        </a>{" "}
        to activate.
      </p>
    </div>
  );
};

export default ConfirmEmail;
