import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='w-2/3'>
      <ul>
        <li>
          Home
        </li>
        <li>
          Menu
        </li>
        <li>
          Location
        </li>
        <li>
          Contact Us
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
