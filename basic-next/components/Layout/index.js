import React from "react";
import Header from "../Header/Header";
import Head from "next/head";

const index = ({ children, pageTitle = "Home Page" }) => {
  return (
    <div>
      <Head>
        <title>Basic Next | {pageTitle}</title>
      </Head>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default index;
