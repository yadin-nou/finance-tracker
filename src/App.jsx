import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Container className="bg-dark text-white w-100">
        <Routes>
          <Route path="/" element={""} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
