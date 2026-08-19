import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

function Transaction() {
  return (
    <div className="d-flex">
      <Container
        fluid="md"
        className="p-5 mt-5"
        style={{ background: "#0f0f0f64" }}
      >
        {" "}
        <Row>
          <Col md="6">Transaction</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Transaction;
