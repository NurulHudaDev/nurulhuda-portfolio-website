import React, { useContext, useState } from 'react';
import './Header.css';
import { NavContext } from '../Contex/NavContext';
import { FaThLarge, FaTimes } from "react-icons/fa"
import my_logo_1 from '../../images/my_logo_1.png';

const Header = () => {

  const [color, setColor] = useState(false)

  const changeColour = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColour);




  const { activeLinkId } = useContext(NavContext);

  const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];

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
    <nav className={color ? 'navbar navbar_bg' : 'navbar'}>
      <button className='nav-btn nav-toggle' onClick={() => showMenu (!Toggle)}>
        <FaThLarge />
      </button>
      <img className='logo' onClick={handleClickLogo} src={my_logo_1} alt='' />
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