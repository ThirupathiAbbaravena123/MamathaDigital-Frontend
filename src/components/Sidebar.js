import React from 'react';
import myProfileIcon from '../assets/icons/profile.png';
import myAddressIcon from '../assets/icons/address.png'; 
import myOrdersIcon from '../assets/icons/order.png'; 
import logoutIcon from '../assets/icons/log.png';

const Sidebar = ({ setActivePage }) => {
  return (
    <aside className="sidebar">
   
       <button className="sidebar-button" onClick={() => setActivePage('myProfileIcon')}>
        <img src={myProfileIcon} alt="My Profile" className="sidebar-icon" />
        My Profile
      </button>
     
        <button className="sidebar-button" onClick={() => setActivePage('My Address')}>
        <img src={myAddressIcon} alt="My Address" className="sidebar-icon" />
        My Address
      </button>
     
        <button className="sidebar-button" onClick={() => setActivePage('My Orders')}>
        <img src={myOrdersIcon} alt="My Orders" className="sidebar-icon" />
        My Orders
      </button>
      <button className="logout-button">
        <img src={logoutIcon} alt="Logout" className="sidebar-icon" />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
