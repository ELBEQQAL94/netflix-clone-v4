import React, { useState, useEffect } from "react";
import NetflixLogo  from "../images/netflixlogo.png";
import Avatar  from "../images/avatar.png";

// Styles
import "./NavBar.scss";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    }
  }, []);
  return (
    <nav className={`navbar ${show && 'bg__navbar'}`}>
      <div className="netflix__container">
        <img
          className="netflix__img"
          src={NetflixLogo}
          alt="netflix"
          title="netflix"
        />
      </div>
      <div className="user__box">
        <img
          className="netflix__img"
          src={Avatar}
          alt="netflix"
          title="netflix"
        />
      </div>
    </nav>
  );
};

export default NavBar;
