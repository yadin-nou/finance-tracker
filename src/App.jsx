import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { DefaultLayouts } from "./component/Layout/DefaultLayouts";
import { LoginPage } from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Container className="bg-dark text-white w-100">
        <Routes>
          <Route path="/" element={<DefaultLayouts />}>
            <Route index element={""} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
          </Route>
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
