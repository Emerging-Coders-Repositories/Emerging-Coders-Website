"use client";

import React, { useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import { SearchInput } from "@/components/opportunities/swe-internships/search-input";
import { JobTable } from "@/components/opportunities/swe-internships/internship-jobs-table";
import { PaginationControls } from "@/components/opportunities/swe-internships/pagination-controls";
import { ErrorState } from "@/components/opportunities/swe-internships/error-state";

import { useFetchGithub } from "@/hooks/use-fetch-github";
import { useSearch } from "@/hooks/use-search";
import { usePagination } from "@/hooks/use-pagination";

export default function NewGraduatePositions() {
  const {
    data: jobsList,
    isLoading,
    isError,
    refetch,
  } = useFetchGithub("SimplifyJobs/New-Grad-Positions");

  const { searchInput, setSearchInput, filteredJobs } = useSearch(jobsList);
  const { currentPage, setCurrentPage, totalPages, paginateItems } =
    usePagination<(typeof filteredJobs)[0]>({
      totalItems: filteredJobs.length,
      itemsPerPage: 15,
    });
  const currentPageData = useCallback(() => {
    return paginateItems(filteredJobs);
  }, [paginateItems, filteredJobs]);

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  if (isError) {
    return <ErrorState onRetry={handleRetry} />;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-9/12 mb-24 mt-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">
          New Grad Positions 2025
        </h1>
        <p className="text-zinc-400 mb-10 max-w-2xl">
          Browse available new graduate software engineering positions for 2025.
          This page is updated regularly with the latest opportunities.
        </p>
        <SearchInput value={searchInput} onChange={setSearchInput} />
        <div className="text-sm text-zinc-600 mb-4">
          {isLoading ? (
            <Skeleton className="h-4 w-40 bg-zinc-900/70" />
          ) : (
            `Showing ${
              filteredJobs.length === 0 ? 0 : (currentPage - 1) * 15 + 1
            }-${Math.min(currentPage * 15, filteredJobs.length)} of ${
              filteredJobs.length
            } positions`
          )}
        </div>
        <JobTable jobs={currentPageData()} isLoading={isLoading} />
        {!isLoading && filteredJobs.length > 0 && (
          <div className="mt-6">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
        <div className="mt-6 text-center text-xs text-zinc-600">
          <p>
            Data sourced from{" "}
            <a
              href="https://github.com/SimplifyJobs/New-Grad-Positions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 hover:underline"
            >
              SimplifyJobs/New-Grad-Positions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
