import React from "react";
import { LoginForms } from "../component/LoginForms";
import { TipContent } from "../component/TipContent";
import { Container, Row, Col } from "react-bootstrap";

export const LoginPage = () => {
  return (
    <div className="d-flex">
      <Container
        fluid="md"
        className="p-5 mt-5"
        style={{ background: "#0f0f0f64" }}
      >
        {" "}
        <Row>
          <Col md="6" className="border border-light p-3">
            <h3>Login...!</h3>
            <LoginForms />
          </Col>
          <Col md="6">
            <TipContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
