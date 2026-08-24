import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import useFormHook from "../hooks/useFormHook";
import { useUser } from "../context/userContext";

export const TransactionTable = ({ addTrans, setAddTrans }) => {
  //const [transData, setTransData] = useState([]);
  const { transData, setTransData, getTranctions } = useUser([]);
  const { userData, setUserData } = useFormHook([]);
  const [trans, setTrans] = useState([]);

  const totalBalance = transData.reduce((acc, trans) => {
    return trans.type === "income" ? acc + trans.amount : acc - trans.amount;
  }, 0);
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
  const handleSearch = (e) => {
    const { value } = e.target;
    setTrans(transData.filter((item) => item.title.includes(value)));
  };
  useEffect(() => {
    getTranctions();
  }, [addTrans]);

  //the first time trans state update the original data by transData,
  //otherwise state transData render late
  useEffect(() => {
    setTrans(transData);
  }, [transData]);

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
          <Form.Control
            type="text"
            size="sm"
            placeholder="Search....."
            onChange={handleSearch}
            name="search"
          />
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
            <th>In $</th>
            <th>Out $</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((item, key) => (
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
              <td style={{ color: "#87c387" }}>
                {" "}
                {item?.type === "income" ? "$ " + item.amount : "N/A"}
              </td>
              <td style={{ color: "rgb(216, 130, 126)" }}>
                {" "}
                {item?.type === "expenses" ? "-$ " + item.amount : "N/A"}
              </td>
              <td>{new Date(item.date).toLocaleDateString("en-AU")}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total Balance:</td>
            <td
              colSpan={2}
              style={{ color: totalBalance > 0 ? "green" : "red" }}
            >
              $ {totalBalance}
            </td>
            <td>{""}</td>
          </tr>
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
