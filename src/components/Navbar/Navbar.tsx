import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  const [click, setclick] = useState(false);
  const handelclick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container ">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            GALAXY <i className="fa fa-star-o" aria-hidden="true"></i>
          </Link>
          <div className="menu-icon" onClick={handelclick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active " : "nav-menu "}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">
              sign-up <i className="fa fa-sign-in" aria-hidden="true"></i>
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
