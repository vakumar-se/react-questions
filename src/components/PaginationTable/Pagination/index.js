import React from 'react';
import './styles.css';

const Pagination = ({ pages, handlePageClick, selectPageNo }) => {
  return (
    <div className="pagination-container">
      {pages?.map(page => {
        console.log('page no', selectPageNo, page);
        return (
          <button
            className={Number(selectPageNo) === page ? 'selected-btn' : 'pagination-btn'}
            onClick={() => handlePageClick(page)}
            key={page}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
