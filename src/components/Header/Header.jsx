import React from "react";
// import Logo from '../../assets/logo.png'
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header container">
        {/* <img src={Logo} alt="" className='logo'/> */}
        <div className="logo">
          <img src={logo} style={{ width: "60px" }} alt="" />
          <div>
            <span>Donsoft</span>
          </div>
        </div>

        <ul className="header-menu">
          
          <li>
            <a
              href="https://instagram.com/donsoft.io"
              id="insta"
              target={"_blank"}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+996708686495" target={"_blank"}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/donsoftdevteam" target={"_blank"}>
              <i className='fa fa-send-o' style={{fontSize:'25px'}}></i>  
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
