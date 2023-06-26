import React from "react";
import Header from "../../components/Header/Header";
import "./mainPage.scss";
import PageAside from "../../components/PageAside/PageAside";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import SearchBlock from "../../components/SearchBlock/SearchBlock";

const MainPage = () => {
  return (
    <PageWrapper>
      <PageAside />
      <Header />
      <main className="main">
        <SearchBlock />
      </main>
    </PageWrapper>
  );
};

export default MainPage;
