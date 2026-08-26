import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { DashboardLayout } from "../component/DashboardLayout";

const Dashboard = () => {
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
            <h2>Dashboard</h2>
            <hr />
            {/* Balance income expanses 
            income trent expanse trent
             pie chart for
            both income & expanse */}
            <DashboardLayout />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
