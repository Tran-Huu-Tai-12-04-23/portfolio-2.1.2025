import React from 'react';

interface PaginationProps {
  min: number;
  max: number;
  currentPage: number;
  onSetPage: (page: number) => void;
}

// eslint-disable-next-line react/function-component-definition
const Pagination: React.FC<PaginationProps> = ({
  min,
  max,
  currentPage,
  onSetPage,
}) => {
  const handlePrevPage = () => {
    if (currentPage > min) {
      onSetPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < max) {
      onSetPage(currentPage + 1);
    }
  };

  return (
    <div className="fui-roundedFull-pagination">
      <ul className="pagination-list">
        <li className="pagination-item btn-prev">
          <button
            type="button"
            className="pagination-link"
            aria-label="Previous page"
            onClick={handlePrevPage}
            disabled={currentPage === min}
          >
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.20711 0.792893C5.59763 1.18342 5.59763 1.81658 5.20711 2.20711L2.41421 5L5.20711 7.79289C5.59763 8.18342 5.59763 8.81658 5.20711 9.20711C4.81658 9.59763 4.18342 9.59763 3.79289 9.20711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L3.79289 0.792893C4.18342 0.402369 4.81658 0.402369 5.20711 0.792893Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </li>
        {Array.from({ length: max - min + 1 }, (_, index) => (
          <li key={index} className="pagination-item">
            <button
              type="button"
              className={`pagination-link ${currentPage === min + index ? 'selected' : ''}`}
              aria-label={`Page ${min + index}`}
              onClick={() => onSetPage(min + index)}
            >
              {min + index}
            </button>
          </li>
        ))}
        <li className="pagination-item btn-next">
          <button
            type="button"
            className="pagination-link"
            aria-label="Next page"
            onClick={handleNextPage}
            disabled={currentPage === max}
          >
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
