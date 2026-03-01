import React from "react";
import Navbar from "../../Component/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Component/Footer/Footer";
import NavbarDaisy from "../../Component/Header/NavbarDaisy";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      {/* <NavbarDaisy></NavbarDaisy> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
