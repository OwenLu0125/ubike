'use client';
import * as React from 'react';
import Image from 'next/image';
import bike from '../public/bike.svg';
import DataTable from './components/DataTable/DataTable';
import Navbar from './components/Navbar/Navbar';

type DistrictData = {
  [key: string]: boolean;
};

type BikeData = {
  sno: string;
  sna: string;
  tot: number;
  sbi: number;
  sarea: string;
  mday: string;
  lat: number;
  lng: number;
  ar: string;
  sareaen: string;
  snaen: string;
  aren: string;
  bemp: number;
  act: string;
  srcUpdateTime: string;
  updateTime: string;
  infoTime: string;
  infoDate: string;
};

export default function MyComponent() {
  const [data, setData] = React.useState<BikeData[]>([]);
  const [districts, setDistricts] = React.useState<DistrictData>({
    大安區: false,
    大同區: false,
    士林區: false,
    文山區: false,
    中正區: false,
    中山區: false,
    內湖區: false,
    北投區: false,
    松山區: false,
    南港區: false,
    信義區: false,
    萬華區: false,
    臺大公館校區: false,
  });

  React.useEffect(() => {
    // console.log(districts);
  }, [districts]);

  // 處理選項的變化，已對應區域的狀態
  const handleDistrictChange = (district: string) => {
    setDistricts((prevDistricts) => ({
      ...prevDistricts,
      [district]: !prevDistricts[district],
    }));
  };

  React.useEffect(() => {
    fetch(
      'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredData = data.filter((bike) => districts[bike.sarea]);

  // 選擇所有行政區
  const selectAllDistricts = () => {
    // 檢查是否所有行政區都已選擇
    const allSelected = Object.values(districts).every((selected) => selected);

    // 更新區域選擇狀態
    const updatedDistricts = { ...districts };
    for (const district in updatedDistricts) {
      updatedDistricts[district] = !allSelected;
    }
    setDistricts(updatedDistricts);
  };

  return (
    <div className=' flex w-[auto] flex-col items-center px-10'>
      <Navbar />
      <div className='w-full mt-10 md:flex'>
        <div className='w-full relative '>
          <h1 className='top-10  relative text-primary text-lg font-bold self-start	'>
            站點資訊
          </h1>
          <select
            className='select select-bordered w-full relative mt-14	'
            defaultValue='台北市'>
            <option disabled>搜尋站點</option>
            <option>台北市</option>
            <option>台北市</option>
          </select>
          <select
            className='select select-bordered w-full relative mt-5'
            defaultValue='新竹科學園區'>
            <option disabled>新竹科學園區</option>
            <option className='text-black'>Han Solo</option>
            <option>台北市</option>
          </select>
          <div className='form-control mt-5'>
            <label className='label cursor-pointer flex-row justify-start gap-2'>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                onClick={selectAllDistricts}
              />
              <span className='label-text text-black'>全部勾選</span>
            </label>
            <div className='grid grid-cols-3 mt-3 md:grid md:grid-cols-4'>
              {Object.keys(districts).map((district) => (
                <label
                  key={district}
                  className='label cursor-pointer flex-row justify-start gap-2'>
                  <input
                    type='checkbox'
                    className='checkbox checkbox-primary'
                    value={district}
                    checked={districts[district]}
                    onChange={() => handleDistrictChange(district)}
                  />
                  <span className='label-text text-black'>{district}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <Image src={bike} alt='bike' className='hidden md:flex self-end	' />
      </div>
      <DataTable data={filteredData} />
    </div>
  );
}
