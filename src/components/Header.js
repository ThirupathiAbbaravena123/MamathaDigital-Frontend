import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo.png" alt="Logo" className="logo" />
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button className="search-button">🔍</button>
      </div>
      <div className="user-menu">
        {/* <span>Rakesh</span> */}
        <span>🛒</span>
       
      </div>
    </header>
  );
};

export default Header;
