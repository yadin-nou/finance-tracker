import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormTemplate from "./FormTemplate";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import useFormHook from "../hooks/useFormHook";
import useSpinner from "../hooks/useSpinner";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../localstorage/localStorage";
import { TransactionTable } from "./Layout/TransactionTable";

export const Transaction = ({ addTransactions }) => {
  const navi = useNavigate();
  const { userData, setUserData, handleOnChange } = useFormHook({});
  const { spinner, setSpinner } = useSpinner(false);
  const { user, setUser } = useUser();
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
    setSpinner(true);
    // user?._id && setUserData({ ...userData, userID: user._id });
    //console.log(userData);
    const pendingResp = addTransactions(userData);
    //promise is the behavior of pending
    toast.promise(pendingResp, { pending: "Please wait...." });
    const result = await pendingResp;
    if (result.status === "error") {
      setSpinner(false);
      toast.error("Session has expired!!, Please re-login");
      removeLocalStorage("jwtAccess");
      setUser({});
      navi("/login");
    } else {
      setSpinner(false);
      setUserData(emptyData);
      toast.success(result.message);
    }
  };

  return (
    <div>
      <TransactionTable />
      <Form onSubmit={handleOnSubmit} style={{ display: "none" }}>
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
