import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const currentPage = useLocation().pathname;

  const [isOpen, setIsOpen] = useState('false');
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
//*bug menu is toggled open despite isOpen being set to false
  console.log(isOpen)

  return (
    <nav id='navbar' className='w-3/4'>
      <i
        onClick={toggleMenu}
        id='hmbrgr'
        className='m-5 fa-solid fa-bars fa-2xl'
      ></i>
      <ul
        className={`nav-default flex justify-evenly items-center franklin ${
          isOpen ? 'is-open' : ''
        }`}
      >
        <li>
          <Link onClick={toggleMenu} to='/' className={currentPage === '/' ? 'glow' : ''}>Home</Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to='/Menu' className={currentPage === '/Menu' ? 'glow' : ''}>Menu</Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to='/Location' className={currentPage === '/Location' ? 'glow' : ''}>Location</Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to='/Contact' className={currentPage === '/Contact' ? 'glow' : ''}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
