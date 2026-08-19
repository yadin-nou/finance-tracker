import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFormHook from "../hooks/useFormHook";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export const LoginFormLayout = ({ loginPro }) => {
  const navi = useNavigate();
  const { userData, setUserData, handleOnChange } = useFormHook({});
  const { user, setUser } = useUser();
  const fromTPL = [
    {
      type: "email",
      label: "Email",
      required: true,
      placeholder: "eg: yourname@email.com",
      name: "email",
    },
    {
      type: "password",
      label: "Password",
      required: true,
      placeholder: "******",
      name: "password",
    },
  ];
  useEffect(() => {
    user?._id && navi("/dashboard");
    //when variable change, use effect re-run
  }, [user?._id, navi]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const pendingResp = loginPro(userData);
    //promise is the behavior of pending
    toast.promise(pendingResp, { pending: "Please wait...." });
    //waiting the data to success
    const { status, message, user, jwtAccess } = await pendingResp;
    //   const notify = (status, message) => {
    // if (status === "success") toast.success(message);
    // else if (status === "error") toast.error(message);
    // else if (status === "warn") toast.warn(message);
    // else if (status === "info") toast.info(message);
    //};
    //shotcut for toast
    toast[status](message);
    setUser(user);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {fromTPL.map((frm) => (
          <FormTemplate key={frm.name} {...frm} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          {/* Explicitly set type="submit" */}
          <Button type="submit" variant="primary">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
