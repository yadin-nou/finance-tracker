import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import useFormHook from "../hooks/useFormHook";
import useSpinner from "../hooks/useSpinner";

export const Transaction = ({}) => {
  const { userData, setUserData, handleOnChange } = useFormHook({});
  //const [spiner, setSpiner] = useState(false);
  const { spinner, setSpinner } = useSpinner(false);
  const emptyData = {
    type: "",
    title: "",
    amount: "",
    date: "",
  };

  const fromTPL = [
    {
      type: "text",
      label: "Title",
      required: true,
      placeholder: "Short Description",
      name: "title",
      value: userData.title,
    },
    {
      type: "number",
      label: "Amount",
      required: true,
      placeholder: "$1243",
      name: "amount",
      value: userData.amount,
    },
    {
      type: "date",
      label: "Date",
      required: true,
      placeholder: "what date?",
      name: "date",
      value: userData.date,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(userData, "Transaction...");
    // setSpiner(true);
    // const result = await signUpUser(userData);
    // if (result.status === "error") {
    //   setSpiner(false);
    //   toast.error(result.message);
    // } else {
    //   setSpiner(false);
    //   setUserData(emptyData);
    //   toast.success(result.message);
    // }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select
            name="type"
            value={userData.type}
            required
            onChange={handleOnChange}
          >
            <option value="">--Select Type--</option>
            <option value="income">income</option>
            <option value="expenses">expenses</option>
          </Form.Select>
        </Form.Group>
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
              Add
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};
