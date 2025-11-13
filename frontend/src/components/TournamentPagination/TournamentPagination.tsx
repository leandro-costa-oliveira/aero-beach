// components/TournamentPagination/TournamentPagination.tsx
import React, { type JSX } from 'react';
import { Pagination } from 'react-bootstrap';

interface TournamentPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const TournamentPagination: React.FC<TournamentPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }
  
  const maxButtons = 5;
  const startPage = Math.max(2, currentPage - Math.floor((maxButtons - 1) / 2));
  let endPage = Math.min(totalPages - 1, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons && totalPages > maxButtons + 2) {
    
      const neededShift = maxButtons - (endPage - startPage + 1);
      const newStart = Math.max(2, startPage - neededShift);
      endPage = Math.min(totalPages - 1, newStart + maxButtons - 1);
  }


  const items: JSX.Element[] = [];

  items.push(
    <Pagination.First
      key="first"
      onClick={() => onPageChange(1)}
      disabled={currentPage === 1}
    />
  );

  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    />
  );

  items.push(
    <Pagination.Item
      key={1}
      active={1 === currentPage}
      onClick={() => onPageChange(1)}
    >
      {1}
    </Pagination.Item>
  );

  if (startPage > 2) {
    items.push(<Pagination.Ellipsis key="startEllipsis" disabled />);
  }

  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (endPage < totalPages - 1) {
    items.push(<Pagination.Ellipsis key="endEllipsis" disabled />);
  }

  if (totalPages > 1) {
      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
  }

  items.push(
    <Pagination.Next
      key="next"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    />
  );

  items.push(
    <Pagination.Last
      key="last"
      onClick={() => onPageChange(totalPages)}
      disabled={currentPage === totalPages}
    />
  );


  return (
    <div className="d-flex justify-content-center mt-4">
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};