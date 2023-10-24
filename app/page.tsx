'use client';
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import bike from '../public/bike.svg';
import DataTable from './components/DataTable/DataTable';
import Navbar from './components/Navbar/Navbar';
import { BikeData } from './type';
import { dummy } from '../public/dummyData';

type DistrictData = {
  [key: string]: boolean;
};

export default function MyComponent() {
  const [data, setData] = React.useState<BikeData[]>([]);
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState('台北市'); // 預設選擇台北市
  const [cityData, setCityData] = React.useState<{
    [key: string]: DistrictData;
  }>({
    台北市: {
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
    },
    高雄市: {
      鼓山區: false,
      三民區: false,
      苓雅區: false,
      楠梓區: false,
      前鎮區: false,
      小港區: false,
      鳳山區: false,
      林園區: false,
      大寮區: false,
      鳥松區: false,
      旗津區: false,
      大社區: false,
      仁武區: false,
      龜山區: false,
      左營區: false,
      美麗島區: false,
      橋頭區: false,
      大樹區: false,
      燕巢區: false,
      六龜區: false,
      甲仙區: false,
      杉林區: false,
      桃源區: false,
      那瑪夏區: false,
      茂林區: false,
      田寮區: false,
    },
  });

  // 處理選項的變化，以對應區域的狀態
  const handleDistrictChange = (city: string, district: string) => {
    setCityData((prevCityData) => ({
      ...prevCityData,
      [city]: {
        ...prevCityData[city],
        [district]: !prevCityData[city][district],
      },
    }));
  };

  React.useEffect(() => {
    if (selectedCity === '高雄市') {
      setData(dummy); // 若選高雄市，則用假資料
    } else {
      fetch(
        'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
      )
        .then((res) => res.json())
        .then((fetchedData: BikeData[]) => setData(fetchedData));
    }
  }, [selectedCity]);

  const selectedDistricts = cityData[selectedCity];

  const filteredData = data.filter((bike) => {
    console.log(bike.sarea, selectedDistricts[bike.sarea]);
    return selectedDistricts[bike.sarea];
  });

  React.useEffect(() => {
    if (selectAll) {
      const updatedDistricts: DistrictData = {};
      for (const district in selectedDistricts) {
        updatedDistricts[district] = true;
      }

      setCityData((prevCityData) => ({
        ...prevCityData,
        [selectedCity]: updatedDistricts,
      }));
    } else {
      // 若取消選擇全部，則所有區域都將取消選擇
      const updatedDistricts: DistrictData = {};
      for (const district in selectedDistricts) {
        updatedDistricts[district] = false;
      }

      setCityData((prevCityData) => ({
        ...prevCityData,
        [selectedCity]: updatedDistricts,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectAll]);

  return (
    <>
      <div className='flex flex-col items-center px-10'>
        <Navbar />
        <div className='w-full mt-10 md:flex'>
          <div className='w-full relative '>
            <h1 className='top-10 relative text-primary text-lg font-bold self-start'>
              站點資訊
            </h1>
            <select
              className='select select-bordered w-full relative mt-14'
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}>
              <option value='台北市'>台北市</option>
              <option value='高雄市'>高雄市</option>
            </select>
            <div className='form-control mt-5'>
              <label className='label cursor-pointer flex-row justify-start gap-2'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-primary'
                  onClick={() => setSelectAll(!selectAll)} // 切換選擇全部狀態
                />
                <span className='label-text text-black'>全部勾選</span>
              </label>
              <div className='grid grid-cols-3 mt-3 md:grid md:grid-cols-4'>
                {Object.keys(selectedDistricts).map((district) => (
                  <label
                    key={district}
                    className='label cursor-pointer flex-row justify-start gap-2'>
                    <input
                      type='checkbox'
                      className='checkbox checkbox-primary'
                      value={district}
                      checked={selectedDistricts[district]}
                      onChange={() =>
                        handleDistrictChange(selectedCity, district)
                      }
                    />
                    <span className='label-text text-black'>{district}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <Image src={bike} alt='bike' className='hidden md:flex self-end' />
        </div>
        <DataTable data={filteredData} selectedCity={selectedCity} />
      </div>
    </>
  );
}
