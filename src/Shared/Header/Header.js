import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className='bg-zinc-800 text-white'>
          <Navbar
  fluid={true}
                rounded={true}
                className=' bg-inherit shadow-2xl text-green-400 '
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white  hover:text-lime-500">
   DiamondCar
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  <Button gradientDuoTone="tealToLime">
      Get Started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse  >
   <Link className='hover:text-lime-500'>Home</Link>  
   <Link className='hover:text-lime-500'>Product</Link>
   <Link className='hover:text-lime-500'>About</Link>
   <Link className='hover:text-lime-500'>Blog</Link>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;