import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TipContent } from "../component/TipContent";
import { UserForms } from "../component/UserForms";

function SignUp() {
  return (
    <div className="d-flex">
      <Container
        fluid="md"
        className="p-5 mt-5"
        style={{ background: "#0f0f0f64" }}
      >
        <Row>
          <Col md="6">
            <TipContent />
          </Col>
          <Col md="6">
            <UserForms />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
