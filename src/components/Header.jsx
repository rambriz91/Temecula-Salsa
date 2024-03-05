import Navigation from './Navigation';

function Header() {
  return (
    <header className='flex'>
      <div className='p-5 w-1/3'>
        <img
          id='tsc-logo'
          src='/images/TSC Logo.png'
          alt='Temecula Salsa Co logo'
        />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
