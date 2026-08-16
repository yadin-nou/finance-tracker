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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cmpassword } = e.target;
    console.log(name, email, password, cmpassword);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {fromTPL.map((frm) => (
          <FormTemplate key={frm.name} {...frm} />
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
