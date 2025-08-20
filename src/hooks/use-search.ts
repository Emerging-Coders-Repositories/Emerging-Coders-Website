/* eslint-disable */
import { useCallback, useMemo, useState } from 'react';

import { Job } from '@/types/internship';
import { debounce } from '@/utils/debounce';

interface UseSearchResult {
  searchInput: string;
  setSearchInput: (value: string) => void;
  filteredJobs: Job[];
}

/**
 * Custom hook to handle search functionality with debounce
 */
export function useSearch(jobs: Job[], debounceMs = 300): UseSearchResult {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, debounceMs),
    []
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  const filteredJobs = useMemo(() => {
    const searchTerm = debouncedSearch.toLowerCase();

    if (!searchTerm) {
      return jobs;
    }

    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm)
    );
  }, [jobs, debouncedSearch]);

  return {
    searchInput,
    setSearchInput: handleSearchChange,
    filteredJobs,
  };
}
