import * as React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import menu from '../public/menu.svg';
import bike from '../public/bike.svg';
import DataTable from './components/DataTable/DataTable';

export default function MyComponent() {
  return (
    <div className=' flex w-[auto] flex-col items-center px-10'>
      <div className='navbar flex relative'>
        <div className='navbar-start md:w-3/4 gap-5'>
          <Image src={logo} alt='logo' width={65} height={65} />
          <div className='hidden  md:flex md:shrink-0	md:gap-5 '>
            <div className='text-lime-700 text-lg font-medium '>使用說明</div>
            <div className='text-lime-700 text-lg font-medium '>收費方式</div>
            <div className='text-lime-400 text-lg font-bold '>站點資訊</div>
            <div className='text-lime-700 text-lg font-medium '>最新消息</div>
            <div className='text-lime-700 text-lg font-medium '>活動專區</div>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='md:hidden'>
              <Image src={menu} alt='menu' width={24} height={24} />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-md dropdown-content mt-7 z-[1]  bg-primary w-screen flex-auto text-white'>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 w-screen h-px' />
      <div className='w-full md:flex'>
        <div className='w-full relative '>
          <h1 className='top-10  relative text-primary text-lg font-bold self-start	'>
            站點資訊
          </h1>
          <select className='select select-bordered w-full relative mt-14	'>
            <option disabled selected>
              搜尋站點
            </option>
            <option>台北市</option>
            <option>台北市</option>
          </select>
          <select className='select select-bordered w-full relative mt-5	'>
            <option disabled selected>
              新竹科學園區
            </option>
            <option className='text-black'>Han Solo</option>
            <option>台北市</option>
          </select>
          <div className='form-control mt-5'>
            <label className='label cursor-pointer flex-row justify-start gap-2'>
              <input type='checkbox' className='checkbox checkbox-primary' />
              <span className='label-text text-black'>全部勾選</span>
            </label>
            <div className='grid grid-cols-3 mt-3 md:grid md:grid-cols-4'>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input type='checkbox' className='checkbox checkbox-primary' />
                <span className='label-text text-black'>松山區</span>
              </label>
            </div>
          </div>
        </div>
        <Image src={bike} alt='bike' className='hidden md:flex self-end	' />
      </div>
      <DataTable />
    </div>
  );
}
