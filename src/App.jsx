import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { DefaultLayouts } from "./component/Layout/DefaultLayouts";
import { LoginPage } from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { Auth } from "./auth/Auth";
import { useUser } from "./context/userContext";
import { autoLogin } from "./utils/users";
import TransactionPage from "./pages/TransactionPage";
function App() {
  const { user, setUser } = useUser();
  useEffect(() => {
    //when user not avairrable by refreshing page or new tap or first load
    //new loging start execute by function loadingUser
    !user?._id && loadingUser();
  }, []);

  const loadingUser = async () => {
    //update user to avairrable in every page
    const user = await autoLogin();
    setUser(user);
  };

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Container className="bg-dark text-white w-100">
        <Routes>
          <Route path="/" element={<DefaultLayouts />}>
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            />
            <Route
              path="transaction"
              element={
                <Auth>
                  <TransactionPage />
                </Auth>
              }
            />
          </Route>
        </Routes>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
