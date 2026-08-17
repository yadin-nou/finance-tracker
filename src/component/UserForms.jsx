import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
export const UserForms = ({ signUpUser }) => {
  const [userData, setUserData] = useState({});
  const [spiner, setSpiner] = useState(false);
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
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.cmpassword) {
      return toast.error("Password is not match");
    }
    setSpiner(true);
    const result = await signUpUser(userData);
    if (result.status === "error") {
      setSpiner(false);
      toast.error(result.message);
    } else {
      setSpiner(false);
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
          {spiner && (
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: "0 auto" }}
            />
          )}
          {!spiner && (
            <Button type="submit" variant="primary">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};
