import React, { useState } from "react";
import dypiusLogo from "../../assets/dypiusLogo.svg";
import dypiusLogoPurple from "../../assets/dypius-purple.svg";
import toolsLogo from "../../assets/dypToolsLogo.svg";
import toolsBorder from "../../assets/toolsBorder.svg";
import { NavLink } from "react-router-dom";
import "./_navbar.scss";

const Navbar = () => {
  const [opacity, setOpacity] = useState(false);
  const [logo, setLogo] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 75) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }

    if (window.location.href.includes("dyp") && !window.location.href.includes("dyp")) {
      if (window.scrollY >= 500) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    } else if (
      window.location.href.includes("about") ||
      window.location.href.includes("disclaimer") ||
      window.location.href.includes("governance") ||
      window.location.href.includes("support") ||
      window.location.href.includes("news")  ||
      window.location.href.includes("buydyp")
    ) {
      setLogo(true);
    } else {
      if (window.scrollY >= 800) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    }
  };
  
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("click", changeBackground);


  return (
    <div
      className={`container-fluid  d-none d-lg-flex page-navigation ${
        opacity ? "opacity" : null
      }`}
    >
      <div
        className={`container-lg d-flex pt-4 justify-content-between`}
        id="navbar"
      >
        <div className="col-2 d-flex justify-content-start">
          <NavLink className="d-flex" to="/">
            <img src={logo ? dypiusLogoPurple : dypiusLogo} alt="" />
          </NavLink>
        </div>
        <div className="col-6 bg-white d-flex justify-content-around align-items-center py-3 links">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none navlink highlight"
                : "text-decoration-none navlink"
            }
            to="/dyp"
          >
            DYP
          </NavLink>
          <a className="text-decoration-none navlink" href="#metaverse">
            Metaverse World
          </a>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none navlink highlight"
                : "text-decoration-none navlink"
            }
            to="/governance"
          >
            Governance
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none navlink highlight"
                : "text-decoration-none navlink"
            }
            to="/support"
          >
            Support
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none navlink highlight"
                : "text-decoration-none navlink"
            }
            to="/about"
          >
            About us
          </NavLink>
        </div>
        <div className="col-2 d-flex justify-content-end position-relative">
          <a
            className="d-flex text-decoration-none"
            target="_blank"
            href="https://tools.dyp.finance/news"
          >
            <button className="btn tools-btn text-white">
              <img src={toolsLogo} className="pe-2" alt="" />
              DYP Tools
            </button>
          </a>
          <img
            src={toolsBorder}
            className="position-absolute"
            style={{ zIndex: 1, top: "-15px", right: "-22%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
