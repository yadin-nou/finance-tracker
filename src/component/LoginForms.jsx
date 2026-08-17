import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { useState } from "react";
import { toast } from "react-toastify";
import useFormHook from "../hooks/useFormHook";

export const LoginForms = (loginPro) => {
  // const [userData, setUserData] = useState({});
  const { userData, setUserData, handleOnChange } = useFormHook({});
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
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await loginPro(userData);
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
