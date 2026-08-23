import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TipContent } from "../component/TipContent";
import { UserForms } from "../component/UserForms";
import { insertUser } from "../axiosHelper/axiosConnection";
import { toast } from "react-toastify";

const SignUp = () => {
  //const [emptyForm, setEmptyForm] = useState({});

  const signUpUser = async (userData) => {
    const result = await insertUser(userData);
    //result.status === "error" && setEmptyForm(false);
    return result;
  };

  // console.log(emptyForm);
  return (
    <div className="d-flex">
      <Container
        fluid="md"
        className="p-5 mt-5"
        style={{ background: "#0f0f0f64" }}
      >
        {" "}
        <Row>
          <Col md="6">
            <TipContent />
          </Col>
          <Col md="6" className="border border-light p-3">
            <h3>Sign Up...!</h3>
            <UserForms signUpUser={signUpUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
