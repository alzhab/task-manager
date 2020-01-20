import React from "react";

const Pagination = ({ changePagination, totalCount, activePagination }) => {
  let paginationNumber = totalCount / 3;
  paginationNumber = Math.ceil(paginationNumber);

  return (
    <ul className="pagination center">
      <li className="disabled">
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      {Array.from({ length: paginationNumber }, (v, i) => i + 1).map(number => (
        <li
          key={number}
          onClick={() => changePagination(number)}
          className={activePagination === number ? "active" : null}
        >
          <a href="#!">{number}</a>
        </li>
      ))}
      <li className="waves-effect">
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
