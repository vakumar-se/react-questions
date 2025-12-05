import React, { useEffect, useState } from 'react';
import { data } from '../../constants/countryData';
import './styles.css';
import Pagination from './Pagination';
import CountryTable from './CountryTable';

const PaginationTable = () => {
  const [noOfRows, setNoOfRows] = useState(5);
  const [pages, setPages] = useState([]);
  const [selectPageNo, setSelectedPageNo] = useState(1);
  const [rowsToDisplay, setRowsToDisplay] = useState([]);

  useEffect(() => {
    const dataLen = data?.length;
    const totalPages = Math.ceil(dataLen / noOfRows);
    const pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArr.push(i);
    }
    setPages(pagesArr);
  }, [noOfRows]);

  const handleRowChange = e => {
    console.log('rows', e.target.value);
    const selPage = Number(e.target.value);
    console.log('index', pages?.indexOf(selPage));
    setNoOfRows(selPage);
    // if (pages?.indexOf(selPage) === -1) {
    setSelectedPageNo(1);
    // }
  };

  const handlePageClick = pageNo => {
    setSelectedPageNo(pageNo);
  };

  useEffect(() => {
    console.log('selected page No,', selectPageNo, noOfRows);
    const startIndex = (selectPageNo - 1) * noOfRows;
    const endIndex = Number(startIndex) + Number(noOfRows);
    console.log('indexes', startIndex, endIndex);
    const rowResults = data?.slice(startIndex, endIndex);
    setRowsToDisplay(rowResults);
  }, [selectPageNo, pages, noOfRows]);

  return (
    <div className="container">
      <h1>Table with Countries and their capitals</h1>
      <h3 className="pageText">
        Please select the number of rows in table
        <select className="rowSelect" value={noOfRows} onChange={handleRowChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </h3>
      <Pagination pages={pages} handlePageClick={handlePageClick} selectPageNo={selectPageNo} />
      <CountryTable data={rowsToDisplay} />
    </div>
  );
};

export default PaginationTable;
