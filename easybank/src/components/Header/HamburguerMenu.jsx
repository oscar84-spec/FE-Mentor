import "../../assets/css/header/hamburguerMenu.css";
import { useState } from "react";

const HamburguerMenu = ({ isActive }) => {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
    isActive(!menuActive);
  };
  const icon = menuActive
    ? "public/images/icon-close.svg"
    : "/public/images/icon-hamburger.svg";
  return (
    <>
      <div className='header__iconMenu' onClick={showMenu}>
        <img src={icon} alt='' className='iconMenu' />
      </div>
      {menuActive && (
        <div className='showMenu'>
          <ul className='showMenu__navbar'>
            <li className='showMenu__navbar-list'>
              <a href=''>Home</a>
            </li>
            <li className='showMenu__navbar-list'>
              <a href=''>About</a>
            </li>
            <li className='showMenu__navbar-list'>
              <a href=''>Contact</a>
            </li>
            <li className='showMenu__navbar-list'>
              <a href=''>Blog</a>
            </li>
            <li className='showMenu__navbar-list'>
              <a href=''>Careers</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburguerMenu;
