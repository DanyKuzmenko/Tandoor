import React from "react";
import "./Header.scss";
import Input from "../Input/Input";
import City from "../City/City";
import UserProfile from "../UserProfile/UserProfile";

const Header = () => {
  return (
    <header className="header">
      <Input />
      <div className="header__container">
        <div className="header__line" />
        <City />
        <div className="header__line" />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
