import Navigation from './Navigation';

function Header() {
  return (
    <header className='flex'>
      <div id='logo-container' className='p-2 w-1/4 flex justify-center'>
        <img
          id='tsc-logo'
          src='/images/TSC Long Logo.png'
          alt='Temecula Salsa Co logo'
        />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
