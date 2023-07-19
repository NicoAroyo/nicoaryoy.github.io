import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { useEffect } from "react";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth >= 960) setButton(false);
    else setButton(true);
  };

  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
  });
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            onClick={() => {
              setClick(false);
              navigate("/");
            }}
            className="navbar-logo"
          >
            <BiHomeHeart />
          </button>
        </div>
        <div onClick={() => handleClick()}>
          {button && <i className={click ? "fas fa-times" : "fas fa-bars"}></i>}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => {
                setClick(false);
                navigate("/about");
              }}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => {
                setClick(false);
                navigate("/skills");
              }}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-links"
              onClick={() => {
                setClick(false);
                navigate("/contact");
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;