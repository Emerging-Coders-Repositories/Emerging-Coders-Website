"use client";
import { useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchInput } from "@/components/opportunities/components/search-input";
import { JobTable } from "@/components/opportunities/components/jobs-table";
import { PaginationControls } from "@/components/opportunities/components/pagination-controls";
import { ErrorState } from "@/components/opportunities/components/error-state";
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
    <div className="container mx-auto py-8 sm:py-12 px-2 sm:px-4 md:px-6 max-w-full sm:max-w-9/12 mb-16 sm:mb-24 mt-16 sm:mt-24">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-white">
          College New Graduate Positions
        </h1>
        <p className="text-zinc-400 mb-6 sm:mb-10 max-w-2xl text-sm sm:text-base">
          Browse available new graduate software engineering positions for 2025.
          This page is updated regularly with the latest opportunities.
        </p>
        <SearchInput value={searchInput} onChange={setSearchInput} />
        <div className="text-xs sm:text-sm text-zinc-600 mb-4">
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
        <div className="sm:mx-0 ">
          <JobTable jobs={currentPageData()} isLoading={isLoading} />
        </div>

        {!isLoading && filteredJobs.length > 0 && (
          <div className="mt-6 w-full">
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
