import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import useFormHook from "../hooks/useFormHook";

export const TransactionTable = ({
  handleGetTransaction,
  addTrans,
  setAddTrans,
}) => {
  const [transData, setTransData] = useState([]);
  const { userData, setUserData } = useFormHook([]);
  const handleDisplay = async () => {
    const result = await handleGetTransaction();
    //console.log(result.data);
    setTransData(result.data);
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      if (name === "allTrans") {
        setUserData(transData.map((item) => item._id));
        return;
      }
      setUserData((prev) => [...prev, name]);
    } else {
      //const id = userData.filter((item) => item !== name);
      if (name === "allTrans") {
        setUserData([]);
        return;
      }
      setUserData(userData.filter((item) => item !== name));
    }
  };

  useEffect(() => {
    handleDisplay();
  }, [addTrans]);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap pb-2">
        <div>
          <Form>
            <div className="mb-3">
              <Form.Check
                inline
                id="allTrans"
                name="allTrans"
                type="checkbox"
                className="cursor-pointer"
                onChange={handleCheckbox}
              />
              <label htmlFor="allTrans">Select All</label>
            </div>
          </Form>
        </div>
        <div>
          <Form.Control type="text" size="sm" placeholder="Search....." />
        </div>
        <div>
          <Button
            type="submit"
            variant="primary"
            onClick={() => setAddTrans(true)}
          >
            <MdOutlineBookmarkAdd className="fs-4" /> Add Transaction
          </Button>
        </div>
      </div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive="md"
        className="text-center"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Income $</th>
            <th>Expenses $</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transData.map((item, key) => (
            <tr key={item._id}>
              <td>{key + 1}</td>
              <td className="d-flex justify-content-left">
                <Form.Check
                  inline
                  id={item._id}
                  name={item._id}
                  type="checkbox"
                  className="cursor-pointer"
                  onChange={handleCheckbox}
                  checked={userData.includes(item._id)}
                />
                {item.title}
              </td>
              <td>{item.type}</td>
              <td style={{ color: "green" }}>
                {" "}
                {item?.type === "income" ? "$ " + item.amount : "N/A"}
              </td>
              <td style={{ color: "wheat" }}>
                {" "}
                {item?.type === "expenses" ? "$ " + item.amount : "N/A"}
              </td>
              <td>{new Date(item.date).toLocaleDateString("en-AU")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-grid">
        {userData.length > 0 && (
          <Button type="submit" variant="danger">
            Delete {userData.length} (s)
          </Button>
        )}
      </div>
    </div>
  );
};
