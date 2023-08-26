import React, { useContext, useState } from 'react';
import './Header.css';
import { NavContext } from '../Contex/NavContext';
import { FaBars, FaThLarge, FaTimes } from "react-icons/fa"

const Header = () => {

  const { activeLinkId } = useContext(NavContext);

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const handleClickLogo = () => {
    document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" })
  }

  const renderNavLink = (content) => {

    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' })
    }
    return (
      <ul key={content}>
        <button onClick={handleClickNav} className={activeLinkId === content ? 'active' : ""}>{content}</button>
      </ul>
    )
  }

  const [Toggle, showMenu] = useState(false);

  return (
    <nav className='navbar'>
      <button className='nav-btn nav-toggle' onClick={() => showMenu (!Toggle)}>
        <FaThLarge />
      </button>
      <h1 className='logo' onClick={handleClickLogo}>LOGO</h1>
      <div className={Toggle ? 'nav-links show-menu' : 'nav-links'}>
        {navLinks.map(nav => renderNavLink(nav))}
        <button className='nav-btn nav-close-btn' onClick={() => showMenu (!Toggle)}>
        <FaTimes />
      </button>
      </div>
      
    </nav>
  );
};

export default Header;