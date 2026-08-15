import { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  toast.warning("Show your messages");
  return (
    <>
      <h1>Hellow world</h1>
      <Button variant="danger">Primary</Button>
      <ToastContainer />
    </>
  );
}

export default App;
