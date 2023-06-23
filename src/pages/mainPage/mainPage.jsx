import React from "react";
import Header from "../../components/Header/Header";
import "./mainPage.scss";
import PageAside from "../../components/PageAside/PageAside";
import PageWrapper from "../../components/PageWrapper/pageWrapper";

const MainPage = () => {
  return (
    <PageWrapper>
      <PageAside />
      <Header />
      <main>

      </main>
    </PageWrapper>
  );
};

export default MainPage;
