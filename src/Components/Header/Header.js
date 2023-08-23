import React, { useContext, useRef } from 'react';
import './Header.css';
import { NavContext } from '../Contex/NavContext';
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {

    const { activeLinkId } = useContext(NavContext);

    const navLinks = ['Home', 'About', 'Projects', 'Contact'];

    const handleClickLogo = () => {
        document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" })
      }

    const renderNavLink = (content) => {

        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNav =() => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth'})
        }
        return (
            <ul key={content}>
                <button onClick={handleClickNav} className={activeLinkId === content ? 'active' : ""}>{content}</button>
            </ul>
        )
    }

  return (
    <header className='navbar'>
     <div className='container'>
        <div className='navContainer'>
           <h1 onClick={handleClickLogo}>LOGO</h1>
           <nav className='nav'>
                {navLinks.map(nav => renderNavLink(nav))}
           </nav>
        </div>
     </div>
    </header>
  );
};

export default Header;