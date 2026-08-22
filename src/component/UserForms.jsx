import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import useFormHook from "../hooks/useFormHook";
import useSpinner from "../hooks/useSpinner";

export const UserForms = ({ signUpUser }) => {
  //const [userData, setUserData] = useState({});
  const { userData, setUserData, handleOnChange } = useFormHook({});
  // const [spinner, setSpinner] = useState(false);
  const { spinner, setSpinner } = useSpinner(false);
  const emptyData = {
    name: "",
    email: "",
    password: "",
    cmpassword: "",
  };

  const fromTPL = [
    {
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Your Name",
      name: "name",
      value: userData.name,
    },

    {
      type: "email",
      label: "Email",
      required: true,
      placeholder: "eg: yourname@email.com",
      name: "email",
      value: userData.email,
    },
    {
      type: "password",
      label: "Password",
      required: true,
      placeholder: "******",
      name: "password",
      value: userData.password,
    },
    {
      type: "password",
      label: "Confirm Password",
      required: true,
      placeholder: "******",
      name: "cmpassword",
      value: userData.cmpassword,
    },
  ];

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.cmpassword) {
      return toast.error("Password is not match");
    }
    setSpinner(true);

    const result = await signUpUser(userData);
    if (result.status === "error") {
      setSpinner(false);
      toast.error(result.message);
    } else {
      setSpinner(false);
      setUserData(emptyData);
      toast.success(result.message);
    }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {fromTPL.map((frm) => (
          <FormTemplate key={frm.name} {...frm} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          {/* Explicitly set type="submit" */}
          {spinner && (
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: "0 auto" }}
            />
          )}
          {!spinner && (
            <Button type="submit" variant="primary">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};
