import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const logo = "<ArthurSant />";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // OPEN & CLOSE MOBILE NAVBAR
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // CLICKING AWAY CLOSES THE NAVIGATION BAR
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      <div className='Navbar'>

        <div className='nav-logo'>
          
          <ScrollLink to='Home' activeClass='active' spy={true}>
            <Link to='/'>
              {logo}
            </Link>
          </ScrollLink>
          
        </div>

        <div className='toggleMenu' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ScrollLink
            to='Home'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            HOME
          </ScrollLink>

          <ScrollLink
            to='About'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            ABOUT
          </ScrollLink>

          <ScrollLink
            to='Projects'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            PROJECTS
          </ScrollLink>
          
          {/* <ScrollLink
            to='Footer'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
          >
            CONTACTS
          </ScrollLink> */}
        </div>
      </div>
    </nav>
  );
}

export default Index;