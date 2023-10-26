import React from 'react';
import './DataTable.css';
import { BikeApiResponse } from '../../type';

type DataTableProps = {
  data: BikeApiResponse;
  selectedCity: string;
  siteInputText: string;
};

const DataTable: React.FC<DataTableProps> = ({
  data,
  selectedCity,
  siteInputText,
}) => {
  const [filteredData, setFilteredData] = React.useState<BikeApiResponse>(data);

  React.useEffect(() => {
    const filtered = data.filter((item) => {
      return item.sna.includes(siteInputText);
    });
    setFilteredData(filtered);
  }, [siteInputText, data]);

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
          {filteredData.map((item) => (
            <tr key={item.sno}>
              <td>{selectedCity}</td>
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
