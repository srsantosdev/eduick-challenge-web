import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { Container, PageItem } from './styles';

export type PaginationProps = {
  perPage: number;
  total: number;
  onChangePage?: (page: number) => void;
};

export type PaginationHandler = {
  currentPage: number;
};

const Pagination: React.ForwardRefRenderFunction<
  PaginationHandler,
  PaginationProps
> = ({ perPage, total, onChangePage }, ref) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChangePage = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);

      if (onChangePage) {
        onChangePage(pageNumber);
      }
    },
    [onChangePage],
  );

  const goToPage = useCallback(
    (pageNumber: number) => handleChangePage(pageNumber),
    [handleChangePage],
  );

  const pages = useMemo(() => {
    return Array.from({ length: totalPages ?? 0 }).map((_, index) => {
      return index + 1;
    });
  }, [totalPages]);

  useImperativeHandle(ref, () => ({
    currentPage,
  }));

  useEffect(() => {
    setTotalPages(Math.ceil(total / perPage));
  }, [total, perPage]);

  return (
    <Container data-testid="pagination">
      {pages.map(page => (
        <PageItem
          data-testid={`page-${page}`}
          active={currentPage === page}
          key={page}
          onClick={() => goToPage(page)}
        >
          <span>{page}</span>
        </PageItem>
      ))}
    </Container>
  );
};

export default forwardRef(Pagination);
