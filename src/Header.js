import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__heading">
        <p className="header__h">RingCentral©</p>
      </div>
      <div className="header__btns">
        <button>Overview</button>
        <button>Speakers</button>
      </div>
    </div>
  );
}

export default Header;
