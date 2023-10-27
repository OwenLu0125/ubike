import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header>
        <Image className='navbar-brand' src={logo} alt='logo' />
        <input type='checkbox' className='navbar-toggle' id='navbar-toggle' />
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link className='nav-link' href='/users'>
                使用說明
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#price'>
                收費方式
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#album'>
                站點資訊
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#new'>
                最新消息
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#activity'>
                活動專區
              </a>
            </li>
          </ul>
          <button className='login'>登入</button>
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
