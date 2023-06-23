import React, {useState} from "react";
import "./PageAside.scss";
import HomeIcon from "../SVG/HomeIcon";
import AddressBookIcon from "../SVG/AddressBookIcon";
import BriefCaseIcon from "../SVG/BriefCaseIcon";
import ListIcon from "../SVG/ListIcon";

const PageAside = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <aside className="aside">
      <div className="aside__top-block">
        <button className="aside__menu" />
        <nav>
          <ul className="aside__navigation">
            <li className="aside__navigation-element">
              <button
                  className={`aside__navigation-button ${activeTab === 'home' ? 'aside__navigation-button_active' : ''}`}
                  onClick={() => handleSetActiveTab('home')}
              >
                <HomeIcon className={activeTab === 'home' ? 'aside__navigation-icon_active' : ''} />
              </button>
            </li>
            <li className="aside__navigation-element">
              <button className="aside__navigation-button">
                <AddressBookIcon />
              </button>
            </li>
            <li className="aside__navigation-element">
              <button className="aside__navigation-button">
                <BriefCaseIcon />
                <div className='aside__navigation-active-point' />
              </button>
            </li>
            <li className="aside__navigation-element">
              <button className="aside__navigation-button">
                <ListIcon />
                <div className='aside__navigation-active-point' />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="aside__partners">
        <div className='aside__partner' />
        <div className='aside__partner' />
        <div className='aside__partner' />
      </div>
    </aside>
  );
};

export default PageAside;
