import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { Transaction } from "../component/Transaction";

function TransactionPage() {
  return (
    <div className="d-flex">
      <Container
        fluid="md"
        className="p-5 mt-5"
        style={{ background: "#0f0f0f64" }}
      >
        {" "}
        <Row>
          <Col>
            <Transaction />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TransactionPage;
