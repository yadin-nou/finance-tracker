import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TipContent } from "../component/TipContent";
import { UserForm } from "../component/userForm";

function SignUp() {
  return (
    <div className="d-flex">
      <Container
        fluid="md"
        className="p-5 mt-5"
        style={{ background: "#0f0f0f64" }}
      >
        <Row>
          <Col>
            <TipContent />
          </Col>
          <Col>
            <UserForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
