"use client";

import { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchInput } from "@/components/opportunities/components/search-input";
import { JobTable } from "@/components/opportunities/components/jobs-table";
import { PaginationControls } from "@/components/opportunities/components/pagination-controls";
import { ErrorState } from "@/components/opportunities/components/error-state";

import { useFetchGithub } from "@/hooks/use-fetch-github";
import { useSearch } from "@/hooks/use-search";
import { usePagination } from "@/hooks/use-pagination";

export default function SoftwareEngineeringInternships() {
  const {
    data: jobsList,
    isLoading,
    isError,
    refetch,
  } = useFetchGithub("SimplifyJobs/Summer2024-Internships");
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
    <div className="container mx-auto py-8 sm:py-12 px-2 sm:px-4 md:px-6 mt-16 sm:mt-24 max-w-full sm:max-w-9/12 mb-16 sm:mb-24">
      <Card className="bg-black border-zinc-900 shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
            Software Engineering Internships
          </CardTitle>
          <p className="text-zinc-400 mt-2 max-w-2xl text-sm sm:text-base">
            This is an updated repository of summer 2025 internships that we
            have fetched from various online GitHub repositories. The data is
            always fresh with the latest updates and changes made to the
            Simplify Jobs repository. So be sure to check back often!
          </p>
        </CardHeader>
        <CardContent className="px-2 sm:px-6">
          <SearchInput value={searchInput} onChange={setSearchInput} />
          <div className="text-xs sm:text-sm text-zinc-600 mb-4">
            {isLoading ? (
              <Skeleton className="h-4 w-40 bg-zinc-900/70" />
            ) : (
              `Showing ${
                filteredJobs.length === 0 ? 0 : (currentPage - 1) * 15 + 1
              }-${Math.min(currentPage * 15, filteredJobs.length)} of ${
                filteredJobs.length
              } listings`
            )}
          </div>
          <JobTable jobs={currentPageData()} isLoading={isLoading} />
          {!isLoading && filteredJobs.length > 0 && (
            <div className="mt-6 w-full overflow-x-auto">
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
                href="https://github.com/SimplifyJobs/Summer2024-Internships"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 hover:underline"
              >
                SimplifyJobs/Summer2024-Internships
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
