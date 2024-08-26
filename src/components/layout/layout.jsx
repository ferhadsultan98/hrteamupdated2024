import React, { Children } from "react";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";



let Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
