import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { useUser } from "../../context/userContext";
import { removeLocalStorage } from "../../localstorage/localStorage";
import { useState } from "react";
export const HeaderLayouts = () => {
  // const useUser = useContext(userContext);
  // console.log(useUser);
  //console.log(useUser());
  const { user, setUser } = useUser();
  const [expanded, setExpanded] = useState(true);
  const handleLogout = () => {
    //clear token from browser
    // localStorage.removeItem("jwtAccess");
    removeLocalStorage("jwtAccess");
    //reset user data
    setUser({});
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-dark"
      variant="dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">Financial Tracker</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user?._id ? (
              <>
                <Link
                  to="/signup"
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  <IoPersonAddOutline /> Signup
                </Link>
                <Link
                  to="/login"
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  <CiLogin /> Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  <MdOutlineDashboard /> Dashboard
                </Link>
                <Link
                  to="/transaction"
                  className="nav-link"
                  onClick={() => setExpanded(false)}
                >
                  <AiOutlineTransaction /> Transaction
                </Link>
                <Link to="/" className="nav-link" onClick={handleLogout}>
                  <CiLogout /> Logout
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
