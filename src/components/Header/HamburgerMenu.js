import React, { useState } from "react";
import dypiusIcon from "../../assets/dyptoolsIcon.svg";
import OutsideClickHandler from "react-outside-click-handler";

const HamburderMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
     <OutsideClickHandler onOutsideClick={()=>{setOpenMenu(false)}}>  <>
      <div
        id="hamburgermenu"
        className={`d-block d-lg-none d-xl-none ${
          openMenu && "hamburgermenu open"
        }`}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {openMenu === true && (
       
        <div className="col-6 bg-white d-flex d-lg-none d-xl-none justify-content-around align-items-center py-3 links menu">
          <ul>
            <li>
              <a className="text-decoration-none" href="#dyp">
                DYP
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#metaverse">
                Metaverse World
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#gov">
                Governance
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#info">
                Support
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#about">
                About Us
              </a>
            </li>
            <li>
              <button className="btn text-white py-2">
                <img src={dypiusIcon} className="pe-2" />
                Dyp Tools
              </button>
            </li>
          </ul>
        </div>
       
      )}
    </> </OutsideClickHandler>
  );
};

export default HamburderMenu;
