import React from "react";
import logo from "../assets/images/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="p-1 bg-primary text-white">
      <div className="px-5 pt-4">
        <div className="row text-start">
          <div className="col-md-7">
            <div className="">
              <img src={logo} alt="logo" style={{width:'250px', height:'65px'}}/>
              <p className="pt-2 r-1 w-50">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 pt-3">
            <div className="row">
              <div className="col">
                <h5 className="pb-3">Our Technologies</h5>
                <p>ReactJS</p>
                <p>Gatsby</p>
                <p>NextJS</p>
                <p>NodeJS</p>
                <p>GraphQL</p>
                <p className="pb-3">Laravel</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2 pt-3">
            <div className="row">
              <div className="col">
                <h5 className="pb-3">Our Services</h5>
                <p>Social media Marketing</p>
                <p>Web & Mobile App Development</p>
                <p>Data & Analytics</p>
                <p>Google Marketing solutions</p>
                <p>Search Engine Optimization</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2 text-center">
          <hr className="border border-white" />
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
