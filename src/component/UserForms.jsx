import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { useState } from "react";
import { toast } from "react-toastify";

export const UserForms = ({ signUpUser }) => {
  const [userData, setUserData] = useState({});

  const fromTPL = [
    {
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Your Name",
      name: "name",
    },

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
    {
      type: "password",
      label: "Confirm Password",
      required: true,
      placeholder: "******",
      name: "cmpassword",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.cmpassword) {
      return toast.error("Password is not match");
    }
    signUpUser(userData);
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
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
