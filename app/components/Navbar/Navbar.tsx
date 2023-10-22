import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header>
        <Image
          className='navbar-brand'
          src={logo}
          alt='logo'
          
        />
        <input type='checkbox' className='navbar-toggle' id='navbar-toggle' />
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a className='nav-link' href='#activity'>
                使用說明
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#album'>
                收費方式
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#adoption'>
                最新消息
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#adoption'>
                活動專區
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#adoption'>
                登入
              </a>
            </li>
          </ul>
        </nav>
        <label className='navbar-toggle-label' htmlFor='navbar-toggle'>
          <span className='hamburger'></span>
        </label>
      </header>
      <div className='bg-gray-200 w-screen h-px' />
    </>
  );
};

export default Navbar;
