import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <span className='logo'>
        <AiFillProduct size={30} color='green' />
        <p>Pæne Produkter</p>
      </span>
      <div className='burger-menu' onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink onClick={toggleMenu} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to='/contact'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to='/products'>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
