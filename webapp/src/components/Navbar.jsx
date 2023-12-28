import React from "react";
import logo from "../assets/images/logo-transparent.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5 py-4 bg-primary sticky-top ">
      <div className="container-fluid d-flex justify-content-between">
        <div className="">
          <a className="navbar-brand " href="/">
            <img src={logo} alt="logo" className="" style={{width:'200px', height:'55px'}} />
          </a>
        </div>
        <div>
          {" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item p-3">
                <a className="nav-link text-white" aria-current="page" href="/">
                  SERVICES
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-white" href="/">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-white" href="/">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-white" href="/">
                  MANAGE ITEMS
                </a>
              </li>
              <li className="nav-item p-3">
                <a className="nav-link text-white" href="/">
                  CREATE INVOICE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
