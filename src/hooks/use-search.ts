import { useState, useCallback, useMemo } from "react";
import { debounce } from "@/utils/debounce";
import { Job } from "@/types/internship";

interface UseSearchResult {
  searchInput: string;
  setSearchInput: (value: string) => void;
  filteredJobs: Job[];
}

/**
 * Custom hook to handle search functionality with debounce
 */
export function useSearch(jobs: Job[], debounceMs = 300): UseSearchResult {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Set up debounced search
  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, debounceMs),
    []
  );

  // Handle search input changes
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  // Filter jobs based on search term
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
