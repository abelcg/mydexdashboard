import React from "react";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import PageHolder from "../common/PageHolder";

const PageContainer = (props) => {
  return (
    <div className="d-flex align-items-stretch">
      <Sidebar clicked={props.clicked}></Sidebar>
      <PageHolder></PageHolder>
      <Footer></Footer>
    </div>
  );
};

export default PageContainer;
