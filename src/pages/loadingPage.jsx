import logo from "./img/logo.jpg";
import "./css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPerson("Nishan");
    }, 3000);
  });

  if (!person) {
    return (
      <>
        <header>
          <img src={logo} alt="logo" />
          <ul id="header-rightside">
            <li>Register</li>
            <li>
              <button>Sign In</button>
            </li>
          </ul>
        </header>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div>
            {" "}
            <ClipLoader></ClipLoader>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <ul id="header-rightside">
          <li>Register</li>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
      </header>

      <body>
        <div>My Name is {person}</div>
      </body>
    </>
  );
};

export default LoadingPage;
