import React, { useState } from "react";
import { SortableHeaderProps } from "../../types";

const SORT_BY_STEPS = ["default", "asc", "desc"];

export function SortableHeader({ title, type }: SortableHeaderProps) {
  const [sortBy, setSortBy] = useState(0);

  const side = sortBy === 1 ? "up" : "down";
  const sortByIcon = sortBy === 0 ? "" : <i className={`bi bi-sort-${type === 'number' ? 'numeric-' : ''}${side}`}></i>;

  return (
    <th scope="col" onClick={() => setSortBy((p) => (p + 1) % SORT_BY_STEPS.length)} style={{ cursor: 'pointer' }}>
      {title} {sortByIcon}
    </th>
  );
}
