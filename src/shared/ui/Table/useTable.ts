import { useState } from 'react';
import type { SortingState, PaginationState } from '@tanstack/react-table';

interface UseTableOptions {
  enableSorting?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
}

export const useTable = ({
  enableSorting = false,
  enablePagination = false,
  pageSize = 10,
}: UseTableOptions = {}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  return {
    sorting: enableSorting ? sorting : undefined,
    setSorting: enableSorting ? setSorting : undefined,
    pagination: enablePagination ? pagination : undefined,
    setPagination: enablePagination ? setPagination : undefined,
  };
};
