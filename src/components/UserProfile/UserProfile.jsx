import React from "react";
import './UserProfile.scss';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__avatar" />
      <div className="user-profile__container">
        <div className="user-profile__text-container">
            <span className='user-profile__name'>Антон Иванов</span>
            <span className='user-profile__role'>Meneger Tandoor</span>
        </div>
          <button className='user-profile__button' />
      </div>
    </div>
  );
};

export default UserProfile;
