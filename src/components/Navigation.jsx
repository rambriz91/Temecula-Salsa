import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState('false');
  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <nav id='navbar' className='w-3/4'>
      <i onClick={toggleMenu} id='hmbrgr' className='m-5 fa-solid fa-bars fa-2xl'></i>
      <ul className={`nav-default flex justify-evenly items-center franklin ${isOpen ? 'is-open' : ''}`}>
        <li>Home</li>
        <li>Menu</li>
        <li>Location</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navigation;
