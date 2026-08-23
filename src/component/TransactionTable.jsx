import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export const TransactionTable = ({ getTranctions }) => {
  const [trans, setTrans] = useState([]);

  const handleDisplay = async () => {
    const result = await getTranctions();
    //console.log(result.data);
    setTrans(result.data);
  };
  useEffect(() => {
    handleDisplay();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between pb-2">
        <div>
          <Form>
            <div className="mb-3">
              <Form.Check
                inline
                id="allTrans"
                type="checkbox"
                className="cursor-pointer"
              />
              <label htmlFor="allTrans">Select All</label>
            </div>
          </Form>
        </div>
        <div>
          <Form.Control type="text" size="sm" placeholder="Search....." />
        </div>
        <div>
          <Button type="submit" variant="primary">
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
            <th>Amount $</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((item, key) => (
            <tr key={item._id}>
              <td>{key + 1}</td>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>$ {item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
