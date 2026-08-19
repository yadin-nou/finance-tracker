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
export const HeaderLayouts = () => {
  // const useUser = useContext(userContext);
  // console.log(useUser);
  //console.log(useUser());
  return (
    <Navbar expand="lg" className="bg-body-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Financial Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/signup" className="nav-link">
              <IoPersonAddOutline /> Signup
            </Link>
            <Link to="/login" className="nav-link">
              <CiLogin /> Login
            </Link>
            <Link to="/dashboard" className="nav-link">
              <MdOutlineDashboard /> Dashboard
            </Link>
            <Link to="/transaction" className="nav-link">
              <AiOutlineTransaction /> Transaction
            </Link>
            <Link to="/logout" className="nav-link">
              <CiLogout /> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
