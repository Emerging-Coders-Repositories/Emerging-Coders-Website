import { useState, useMemo, useEffect, useCallback } from "react";

interface UsePaginationProps {
  totalItems: number;
  initialPage?: number;
  itemsPerPage?: number;
}

interface UsePaginationResult<T> {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  currentItems: T[];
  paginateItems: (items: T[]) => T[];
}

/**
 * Custom hook to handle pagination
 */
export function usePagination<T>({
  totalItems,
  initialPage = 1,
  itemsPerPage = 15,
}: UsePaginationProps): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculate total pages
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / itemsPerPage)),
    [totalItems, itemsPerPage]
  );

  // Reset to page 1 if total items change drastically
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const paginateItems = useCallback(
    (items: T[]): T[] => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return items.slice(startIndex, startIndex + itemsPerPage);
    },
    [currentPage, itemsPerPage]
  );

  // This is a placeholder for when we don't have the actual items yet
  const currentItems = useMemo<T[]>(() => [], []);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    paginateItems,
  };
}
