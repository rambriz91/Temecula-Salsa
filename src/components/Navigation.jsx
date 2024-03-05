import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  return (
    <nav id='navbar' className='w-3/4'>
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
