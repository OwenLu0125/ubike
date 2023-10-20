import React from 'react';
import './DataTable.css';
import { BikeApiResponse } from '../../type';

type DataTableProps = {
  data: BikeApiResponse;
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className='overflow-x-auto w-full mt-5'>
      <table>
        <thead>
          <tr>
            <td>縣市</td>
            <td>區域</td>
            <td>站點名稱</td>
            <td>可借車輛</td>
            <td>可還車輛</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sno}>
              <td>台北市</td>
              <td>{item.sarea}</td>
              <td>{item.sna}</td>
              <td>{item.tot}</td>
              <td>{item.bemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
