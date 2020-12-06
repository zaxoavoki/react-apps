import React from 'react';

type Props = {
  order: string;
};

function Sort({ order }: Props): any {
  return order === 'asc' ? (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-chevron-contract"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.646 13.854a.5.5 0 0 0 .708 0L8 10.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-11.708a.5.5 0 0 1 .708 0L8 5.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ) : order === 'desc' ? (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-caret-down"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
      />
    </svg>
  ) : (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-caret-up"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
      />
    </svg>
  );
}

export default Sort;
