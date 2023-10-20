import React from 'react';
import './DataTable.css';

const DataTable = () => {
  return (
    <div className='overflow-x-auto w-full mt-5'>
      <table>
        <thead>
          <tr>
            <td>縣市</td>
            <td>區域</td>
            <td>站點名稱</td>
            <td>可借車輛</td>
            <td>可借車輛</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>台北市台北市台北市</td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>台北市台北市台北市</td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>台北市台北市台北市</td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>台北市台北市台北市</td>
            <td>12</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
