import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { Transaction } from "../component/Transaction";
import { addTransactionAxois } from "../axiosHelper/axiosConnection";

const TransactionPage = () => {
  const addTransactions = async (userData) => {
    try {
      const response = await addTransactionAxois(userData);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // const getTranctions = async () => {
  //   try {
  //     const response = await getTransactionAxios();
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
            <Transaction addTransactions={addTransactions} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransactionPage;
