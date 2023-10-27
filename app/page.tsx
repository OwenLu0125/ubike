'use client';
import * as React from 'react';
import Image from 'next/image';
import bike from '../public/bike.svg';
import DataTable from './components/DataTable/DataTable';
import Navbar from './components/Navbar/Navbar';
import { IconButton, Input } from '@mui/joy';
import Autocomplete from '@mui/joy/Autocomplete';
import { BikeData } from './type';
import { dummy, area_data } from '../public/dummyData';

type DistrictData = {
  [key: string]: boolean;
};

type CityData = {
  [key: string]: DistrictData;
};

type CityOption = string;

const convertCityData = (rawCityData: Record<string, string[]>): CityData => {
  const cityData: CityData = {};

  for (const city in rawCityData) {
    cityData[city] = {};

    for (const district of rawCityData[city]) {
      cityData[city][district] = false;
    }
  }

  return cityData;
};

const getCityOptions = (data: Record<string, string[]>): CityOption[] => {
  return Object.keys(data);
};

export default function MyComponent() {
  const [data, setData] = React.useState<BikeData[]>([]);
  const [selectAll, setSelectAll] = React.useState(true);
  const [selectedCity, setSelectedCity] = React.useState('台北市'); // 縣市選項
  const [cityInputText, setCityInputText] = React.useState(''); // 縣市搜尋
  const [siteInputText, setSiteInputText] = React.useState(''); // 站點搜尋
  const initialCityOptions: CityOption[] = getCityOptions(area_data);
  const initialCityData: CityData = convertCityData(area_data);
  const [cityData, setCityData] = React.useState<CityData>(initialCityData);
  const [loading, setLoading] = React.useState(false); // 資料是否載入中

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
    const loadData = (city: string) => {
      setLoading(true);
      if (city === '高雄市') {
        setData(dummy);
        setLoading(false);
      } else if (city === '台北市') {
        fetch(
          'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
        )
          .then((res) => res.json())
          .then((fetchedData: BikeData[]) => {
            setData(fetchedData);
            setLoading(false);
          });
      }
    };
    loadData(selectedCity);
  }, [selectedCity]);

  const selectedDistricts = cityData[selectedCity];

  const filteredData = data.filter((bike) => {
    return selectedDistricts && selectedDistricts[bike.sarea];
  });

  // checkbox selected function
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
        <div className='w-full mt-10 md:flex md:-mt-6'>
          <div className='w-full relative '>
            <h1 className=' relative mt-12 text-primary text-lg font-bold self-start'>
              站點資訊
            </h1>
            <div className='relative mt-5  md:flex md:gap-x-4 md:flex-row-reverse md:w-5/6'>
              <div className='md:w-3/5'>
                <Input
                  endDecorator={
                    <div style={{ display: 'flex' }}>
                      {siteInputText && (
                        <IconButton
                          className='mr-1'
                          sx={{
                            ':hover': {
                              backgroundColor: '#dbdbdb',
                              borderRadius: '50%',
                            },
                          }}
                          onClick={() => {
                            setSiteInputText('');
                          }}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-6 h-6,'>
                            <path
                              fill-rule='evenodd'
                              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                              clip-rule='evenodd'
                            />
                          </svg>
                        </IconButton>
                      )}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'>
                        <path
                          fillRule='evenodd'
                          d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  }
                  placeholder='搜尋站點'
                  value={siteInputText}
                  onChange={(e) => setSiteInputText(e.target.value)}
                  sx={{ backgroundColor: '#F6F6F6', boxShadow: 0 }}
                />
              </div>
              <div className='mt-5 md:w-2/5 md:mt-0'>
                <Autocomplete
                  placeholder='選擇縣市'
                  value={selectedCity}
                  onChange={(event, newValue) => {
                    setSelectedCity(newValue as string);
                  }}
                  inputValue={cityInputText}
                  onInputChange={(event, newInputValue) => {
                    setCityInputText(newInputValue);
                  }}
                  options={initialCityOptions}
                  sx={{ width: 1, boxShadow: 0, backgroundColor: '#F6F6F6' }}
                />
              </div>
            </div>
            <div className='form-control mt-5'>
              <div className='grid grid-cols-3'>
                <label className='label cursor-pointer justify-start gap-2'>
                  <input
                    type='checkbox'
                    className='checkbox checkbox-primary'
                    defaultChecked={true}
                    onClick={() => setSelectAll(!selectAll)} // 切換選擇全部狀態
                  />
                  <span className='label-text text-black'>全部勾選</span>
                </label>
              </div>
              <div className='grid grid-cols-3 mt-3 md:grid md:grid-cols-4 '>
                {selectedDistricts &&
                  Object.keys(selectedDistricts).map((district) => (
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
        <DataTable
          data={filteredData}
          selectedCity={selectedCity}
          siteInputText={siteInputText}
        />
      </div>
    </>
  );
}
