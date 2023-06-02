import React from "react";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FooterBar from "../FooterBar/FooterBar";


const Main = () => {
  return (
    <div >
     <Header></Header>
      <Outlet></Outlet>
      <FooterBar></FooterBar>
    </div>
  );
};

export default Main;
