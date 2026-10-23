"use client";

import { useRef } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

export const SORT_OPTIONS = ["Duration", "Calories", "Rating"] as const;
export type SortOption = (typeof SORT_OPTIONS)[number];

type Props = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortDropdown({ value, onChange }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const select = (option: SortOption) => {
    onChange(option);
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <details ref={detailsRef} className="dropdown dropdown-end">
      <summary className="btn btn-sm h-10 gap-2 rounded-full border-line bg-base-200 px-4 font-semibold">
        <span className="text-muted">Sort By:</span> {value}
        <FiChevronDown className="size-4" />
      </summary>
      <ul className="menu dropdown-content z-10 mt-2 w-44 rounded-box border border-line bg-base-200 p-2 shadow-xl">
        {SORT_OPTIONS.map((option) => (
          <li key={option}>
            <button
              onClick={() => select(option)}
              className={`justify-between ${option === value ? "text-primary" : ""}`}
            >
              {option}
              {option === value && <FiCheck />}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
