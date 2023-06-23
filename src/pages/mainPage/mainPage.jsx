import React from "react";
import Header from "../../components/Header/Header";
import "./mainPage.scss";
import PageAside from "../../components/PageAside/PageAside";

const MainPage = () => {
  return (
    <div className="main-page">
      <PageAside />
      <Header />
      <main></main>
    </div>
  );
};

export default MainPage;
