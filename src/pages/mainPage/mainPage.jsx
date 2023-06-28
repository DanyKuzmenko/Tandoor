import React from "react";
import Header from "../../components/Header/Header";
import "./mainPage.scss";
import PageAside from "../../components/PageAside/PageAside";
import PageWrapper from "../../components/PageWrapper/pageWrapper";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import InfoCards from '../../components/InfoCards/InfoCards';

const MainPage = () => {
  return (
    <PageWrapper>
      <PageAside />
      <Header />
      <main className="main-page">
        <h1 className='main-page__title'>Главная</h1>
        <SearchBlock />
        <InfoCards />
      </main>
    </PageWrapper>
  );
};

export default MainPage;
