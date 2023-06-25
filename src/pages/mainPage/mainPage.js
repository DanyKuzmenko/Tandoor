import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to={"/kpi"}>KpiPage</Link>
    </div>
  );
};

export default MainPage;
