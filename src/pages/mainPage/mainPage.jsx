import React from "react";
import Header from "../../components/Header/Header";
import "./mainPage.scss";
import PageAside from "../../components/PageAside/PageAside";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import InfoCards from '../../components/InfoCards/InfoCards';
import RatingBlock from '../../components/RatingBlock/RatingBlock';
import KpiComponent from '../../components/KpiComponent/KpiComponent';
import TasksComponent from '../../components/Tasks/TasksComponent';

const MainPage = () => {
  return (
    <PageWrapper>
      <PageAside />
      <Header />
      <main className="main-page">
        <h1 className='main-page__title'>Главная</h1>
        <SearchBlock />
        <InfoCards />
        <KpiComponent />
        <div className={'main-page__container'}>
          <TasksComponent />
          <RatingBlock />
        </div>
      </main>
    </PageWrapper>
  );
};

export default MainPage;
