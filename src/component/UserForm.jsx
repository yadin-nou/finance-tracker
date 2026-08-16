import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";

export const UserForm = () => {
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

  return (
    <div>
      <Form>
        {fromTPL.map((frm) => (
          <FormTemplate key={frm.name} {...frm} />
        ))}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
