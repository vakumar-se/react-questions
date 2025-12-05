import React from 'react';
import { rowNames } from '../../utils/constants';
import { styles } from './styles';

const SeatLayout = ({
  numberOfRows = 8,
  rowinfo = [
    { row: 1, type: 'vip', price: '350', ailePosition: 5, totalSeats: 10 },
    { row: 2, type: 'vip', price: '350', ailePosition: 5, totalSeats: 10 },
    { row: 3, type: 'vip', price: '350', ailePosition: 5, totalSeats: 10 },
    { row: 4, type: 'Premium', price: '200', ailePosition: 5, totalSeats: 10 },
    { row: 5, type: 'Premium', price: '200', ailePosition: 5, totalSeats: 10 },
    { row: 6, type: 'Premium', price: '200', ailePosition: 5, totalSeats: 10 },
    { row: 7, type: 'Regular', price: '150', ailePosition: 5, totalSeats: 10 },
    { row: 8, type: 'Regular', price: '150', ailePosition: 5, totalSeats: 10 },
    { row: 9, type: 'Regular', price: '150', ailePosition: 5, totalSeats: 10 },
  ],
}) => {
  const renderSeats = (rowData, i) => {
    const seats = [];
    for (let i = 1; i <= rowData?.totalSeats; i++) {
      seats.push({ data: rowData, seatNum: i });
    }
    return (
      <div style={styles.seatRow}>
        <span style={{ ...styles.rowItem, ...styles.rowName }}>{rowNames[i]}</span>
        {seats?.map(itm => {
          return (
            <button
              key={itm?.seatNum}
              style={{ ...styles.rowItem }}
              onClick={() => console.log('test', itm)}
            >
              {itm?.seatNum}
            </button>
          );
        })}
      </div>
    );
  };
  const renderSeatLayout = () => {
    return rowinfo.map((item, i) => {
      return <div key={item?.row}>{renderSeats(item, i)}</div>;
    });
  };
  return <div style={styles.layoutContainer}>{renderSeatLayout()}</div>;
};

export default SeatLayout;
