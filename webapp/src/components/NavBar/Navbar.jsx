import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-transparent.png";
import mobileMenuIcon from "../../assets/images/mobile_nav_icon.png";
import classes from "./NavBar.module.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuClickHandler = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log(mobileMenuOpen)
  };
  return (
    <nav className="navbar navbar-expand-lg px-5 py-4 bg-primary sticky-top">
      <div className="container-fluid d-flex justify-content-between">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            className=""
            style={{ width: "200px", height: "55px" }}
          />
        </div>
        <button className="menu-icon btn btn-primary" onClick={mobileMenuClickHandler}>
          <img
            src={mobileMenuIcon}
            alt="mobile menu"
            className=""
            style={{ width: "50px", height: "50px" }}
          />
        </button>
        <div className={`nav-elements ${mobileMenuOpen && "active"}`}>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item p-3">
              <NavLink to="/" className="nav-link text-white">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to="/" className="nav-link text-white">
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to="/" className="nav-link text-white">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to="/about" className="nav-link text-white">
                MANAGE ITEMS
              </NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to="/contact" className="nav-link text-white">
                CREATE INVOICE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// <nav className="navbar navbar-expand-lg px-5 py-4 bg-primary sticky-top ">
//   <div className="container-fluid d-flex justify-content-between">
//     <div className="">
//       <a className="navbar-brand " href="/">
//         <img
//           src={logo}
//           alt="logo"
//           className=""
//           style={{ width: "200px", height: "55px" }}
//         />
//       </a>
//     </div>
//     <div>
//       {" "}
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarToggler"
//         aria-controls="navbarToggler"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//     </div>
//     <div>
//       <div className="collapse navbar-collapse" id="navbarToggler">
//         <ul className="navbar-nav mb-2 mb-lg-0">
//           <li className="nav-item p-3">
//             <a className="nav-link text-white" aria-current="page" href="/">
//               SERVICES
//             </a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link text-white" href="/">
//               ABOUT US
//             </a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link text-white" href="/">
//               CONTACT US
//             </a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link text-white" href="/">
//               MANAGE ITEMS
//             </a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link text-white" href="/">
//               CREATE INVOICE
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </nav>
