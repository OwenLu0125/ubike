'use client';
import * as React from 'react';
import Image from 'next/image';
import bike from '../public/bike.svg';
import DataTable from './components/DataTable/DataTable';
import Navbar from './components/Navbar/Navbar';

export default function MyComponent() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className=' flex w-[auto] flex-col items-center px-10'>
      <Navbar/>
      <div className='w-full mt-10 md:flex'>
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
      <DataTable data={data} />
    </div>
  );
}
