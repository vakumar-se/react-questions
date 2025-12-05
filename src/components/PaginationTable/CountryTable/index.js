import React from 'react';
import './styles.css';

const CountryTable = ({ data }) => {
  return (
    <table className="pagination-table">
      <tr>
        <th className="table-item">Id</th>
        <th className="table-item">Country Name</th>
        <th className="table-item">Country Capital</th>
      </tr>
      {data?.map(item => {
        return (
          <tr key={item?.id}>
            <td className="table-item">{item?.id}</td>
            <td className="table-item">{item?.country_name}</td>
            <td className="table-item">{item?.country_capital}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default CountryTable;
