import { forwardRef } from 'react';
import { pagination } from '@styled-system/ui/recipes';
import { Pagination as arkPagination } from '@ark-ui/react/pagination';
interface PaginationProps {
  count: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    { count, pageSize, siblingCount, currentPage, onPageChange, ...props },
    ref
  ) => {
    const classes = pagination({});
    console.log(currentPage);
    return (
      <arkPagination.Root
        count={count}
        pageSize={pageSize}
        siblingCount={siblingCount}
        page={currentPage}
        onPageChange={(details) => onPageChange(details.page)}
        {...props}
        ref={ref}
        className={classes.root}
      >
        <arkPagination.PrevTrigger className={classes.prevTrigger}>
          {'<'}
        </arkPagination.PrevTrigger>
        <arkPagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                page.value === currentPage ? (
                  <arkPagination.Item key={index} {...page}>
                    <div className={classes.buttonActive}>{page.value}</div>
                  </arkPagination.Item>
                ) : (
                  <arkPagination.Item key={index} {...page}>
                    <div className={classes.buttonInactive}>{page.value}</div>
                  </arkPagination.Item>
                )
              ) : (
                <arkPagination.Ellipsis
                  key={index}
                  index={index}
                  className={'ellipsis'}
                >
                  <button>&#8230;</button>
                </arkPagination.Ellipsis>
              )
            )
          }
        </arkPagination.Context>
        <arkPagination.NextTrigger className={classes.nextTrigger}>
          {'>'}
        </arkPagination.NextTrigger>
      </arkPagination.Root>
    );
  }
);
