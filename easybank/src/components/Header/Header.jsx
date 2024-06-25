import "../../assets/css/header/header.css";
import Logo from "./Logo.jsx";
import HamburguerMenu from "./HamburguerMenu.jsx";
import NavbarMenu from "./NavbarMenu.jsx";
import Button from "../Button/Button.jsx";

const Header = ({ estadoMenu }) => {
  const isActive = (state) => estadoMenu(state);
  return (
    <header className='header'>
      <Logo />
      <NavbarMenu />
      <HamburguerMenu isActive={isActive} />
      <Button clase='btn--display' texto='Request Invite' />
    </header>
  );
};

export default Header;
