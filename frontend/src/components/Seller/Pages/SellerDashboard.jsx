import React, { useEffect, useState } from "react";
import "./styles/SellerDashboard.css";

import SellerSidebar from "../Components/Sidebar/SellerSidebar";
import SellerNav from "../Components/SystemNavBar/SellerNav";

const SellerDashboard = () => {


  return (
    <div className="mainContainer">
      <div className="sidebar">
        <SellerSidebar />
      </div>

      <div
        className="contentContainer"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="systemNavBar">
         
        </div>
        <div className="content">
       
          <br />
         
        </div>

      </div>
    </div>
  );
};

export default SellerDashboard;
