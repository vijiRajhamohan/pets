import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Nav() {
  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="d-flex gap-2 mt-3">
            <img src="./image/logo2.png" alt="img" width="55" height="47" />
            <div className="head">ANIMAL SHELTER</div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link "
                  
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Contact-us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav gap-4 d-flex justify-content-around d-sm-flex justify-content-sm-around" style={{ fontSize: "23px" }}>
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
