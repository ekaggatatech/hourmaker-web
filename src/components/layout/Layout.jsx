import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "../chatbot/Chatbot";
// import Breadcrumbs from "../Breadcrumbs";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* {!hideBreadcrumbs && <Breadcrumbs />} */}
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
