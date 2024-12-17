import React, { useState, useEffect } from 'react';
import MyImg from '../assets/profile1.jpg';
import Mlogo from '../assets/image 55.svg'


const Navbar = () => {
  const defaultProfileImage = 'https://via.placeholder.com/40';

  const [user, setUser] = useState({
    isLoggedIn: false,
    name: '',
    profileImage: '',
  });

  // Load user details from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Simulate Login Event
  const handleLogin = () => {
    const userData = {
      isLoggedIn: true,
      name: 'John Doe',
      profileImage: MyImg, // Use your asset here
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Simulate Logout Event
  const handleLogout = () => {
    setUser({
      isLoggedIn: false,
      name: '',
      profileImage: '',
    });
    localStorage.removeItem('user');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <a className="navbar-brand" href="/">
              <img src={Mlogo} className='footlogo' alt="..." style={{height:"50px",width:'100px'}} />
          </a>

          {/* Search Form */}
          <form className="d-flex ms-auto me-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>

          {/* User Section */}
          {!user.isLoggedIn ? (
            <a  href='/login' className="btn btn-danger" onClick={handleLogin}>
              Login
            </a>
          ) : (
            <div className="d-flex align-items-center">
              <img
                src={user.profileImage || defaultProfileImage}
                alt="Profile"
                className="rounded-circle"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <span className="me-3">{user.name}</span>
              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

          {/* Cart Icon */}
          <a href="/cartitems" className="position-relative ms-3">
            <i
              className="bi bi-cart3"
              style={{ fontSize: '25px', position: 'relative' }}
            >
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{
                  fontSize: '10px',
                  marginTop: '-5px',
                  marginLeft: '-5px',
                }}
              >
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
