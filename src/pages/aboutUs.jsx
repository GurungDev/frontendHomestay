import logo from "./img/logo.jpg";
import "./css/style.css";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate("");
  return (
    <header>
      <img src={logo} alt="logo" />
      <ul id="navbar">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          {/* <li onClick={() => navigate("/")}>Home</li> */}
          <li>Home</li>
        </Link>
        <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
          <li>About Us</li>
        </Link>
        <Link to={"/contactus"} style={{ textDecoration: "none" }}>
          <li>Contact Us</li>
        </Link>
      </ul>
      <ul id="header-rightside">
        <li>Register</li>
        <li>
          <button>Sign In</button>
        </li>
      </ul>
    </header>
  );
};

export default AboutUs;
