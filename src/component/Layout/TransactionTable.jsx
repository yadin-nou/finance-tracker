import React from "react";
import Table from "react-bootstrap/Table";

export const TransactionTable = () => {
  return (
    <div>
      {" "}
      <Table striped bordered hover variant="dark" responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
