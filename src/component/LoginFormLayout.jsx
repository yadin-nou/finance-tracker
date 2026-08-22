import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFormHook from "../hooks/useFormHook";
import { useUser } from "../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import { setLocalStorage } from "../localstorage/localStorage";
import Spinner from "react-bootstrap/Spinner";
import useSpinner from "../hooks/useSpinner";

export const LoginFormLayout = ({ loginPro }) => {
  const navi = useNavigate();
  //const location = useLocation();
  //console.log(location);
  const { userData, setUserData, handleOnChange } = useFormHook({});
  const { user, setUser } = useUser();
  //const [spinner, setSpinner] = useState(false);
  const { spinner, setSpinner } = useSpinner(false);
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
    setSpinner(true);
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
    if (status === "error") {
      setSpinner(false);
      toast[status](message);
      return;
    }

    //shotcut for toast
    toast[status](message);
    setUser(user);
    setSpinner(false);
    setLocalStorage("jwtAccess", jwtAccess);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {fromTPL.map((frm) => (
          <FormTemplate key={frm.name} {...frm} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          {/* Explicitly set type="submit" */}
          {spinner ? (
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: "0 auto" }}
            />
          ) : (
            <Button type="submit" variant="primary">
              Login
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};
