import React from 'react';

class Pagination extends React.Component {
  render() {
    const { currentPage, totalElements, onPageChange } = this.props;
    const siblings = 2; // Number of siblings to show on each side of the current page
    const pages = [];
    const PAGE_SIZE = 10;
    const totalPages = Math.ceil(totalElements / PAGE_SIZE);

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        Math.abs(currentPage - i) <= siblings ||
        i === currentPage - siblings - 1 ||
        i === currentPage + siblings + 1
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return (
      <div className={"pagination"}>
        <button
          className={`btn paginationBtn`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<"}
        </button>
        {pages.map((page, index) =>
          page === '...' ? (
            <button className={'btn paginationBtn'}  key={index}>...</button>
          ) : (
            <button
              className={`${currentPage === page ? 'active' : ''} btn paginationBtn`}
              key={index}
              onClick={() => onPageChange(page)}
              style={{
                fontWeight: currentPage === page ? 'bold' : 'normal',
              }}
            >
              {page}
            </button>
          )
        )}
        <button
          className={`btn paginationBtn`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    );
  }
}

export default Pagination;
