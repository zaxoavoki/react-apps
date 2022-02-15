import React, { SetStateAction, useEffect } from 'react'

const PAGINATION_PAGES_RADIUS = 3;

export function Pagination({
  page,
  setPage,
  count,
  onChange,
}: {
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  count: number;
  onChange: (p: number) => void;
}) {
  useEffect(() => {
    onChange && onChange(page);
  }, [page]);

  function next() {
    setPage((p: number) => p + 1);
  }

  function prev() {
    setPage((p: number) => p - 1);
  }

  function pageChange(page: number) {
    setPage(page);
  }

  const pages = [
    ...Array(PAGINATION_PAGES_RADIUS)
      .fill(0)
      .map((_, i, arr) => page - (arr.length - i)),
    page,
    ...Array(PAGINATION_PAGES_RADIUS)
      .fill(0)
      .map((_, i) => page + i + 1),
  ].filter((e) => e > 0 && e < count);

  return (
    <nav>
      <ul className="pagination">
        <li
          className={"page-item " + (page === 1 && "disabled")}
          onClick={() => page > 1 && prev()}
        >
          <a className="page-link" href="#">Previous</a>
        </li>
        {pages.map((e) => (
          <li
            className={"page-item " + (page === e && "active")}
            key={e}
            onClick={() => pageChange(e)}
          >
            <a className="page-link" href="#">{e}</a>
          </li>
        ))}
        <li
          className={"page-item " + (page === count - 1 && "disabled")}
          onClick={() => page < count && next()}
        >
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  );
}
