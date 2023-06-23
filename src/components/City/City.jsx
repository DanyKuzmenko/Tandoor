import React from "react";
import "./City.scss";

const City = () => {
  return (
    <button className="city__wrapper">
        <div className='city__location' />
      <div className="city__container">
          <span className='city'>Ростов-на-Дону</span>
          <div className='city__arrow-down'/>
      </div>
    </button>
  );
};

export default City;
