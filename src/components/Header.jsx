import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CryptoState } from "../Context/CriptoContext";

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  console.log(currency);
  return (
    <>
      <nav
        className={`navbar-dark navbar-expand-lg ${
          navbar ? "navbar active" : "navbar"
        } `}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="./image/logo3.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all-coins">
                  All Coins
                </NavLink>
              </li>
            </ul>
            <ul>
              <select
                className="form-select"
                aria-label="Default select example"
                value={currency}
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
                <option value={"USD"}>USD</option>
                <option value={"BDT"}>BDT</option>
                <option value={"INR"}>INR</option>
              </select>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
