import "../../assets/css/header/navbarMenu.css";

const NavbarMenu = () => {
  return (
    <nav className='header__navbarMenu'>
      <ul className='header__navbarMenu-list'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
        <li>
          <a href=''>Blog</a>
        </li>
        <li>
          <a href=''>Careers</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
