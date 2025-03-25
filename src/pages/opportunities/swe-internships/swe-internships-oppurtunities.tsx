"use client";

import React, { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchInput } from "@/pages/opportunities/swe-internships/search-input";
import { JobTable } from "@/pages/opportunities/swe-internships/jobs-table";
import { PaginationControls } from "@/pages/opportunities/swe-internships/pagination-controls";
import { ErrorState } from "@/pages/opportunities/swe-internships/error-state";

import { useFetchGithub } from "@/hooks/use-fetch-github";
import { useSearch } from "@/hooks/use-search";
import { usePagination } from "@/hooks/use-pagination";

export default function InternshipsComponent() {
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
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="bg-background border-border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold">
            Software Engineering Internships
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Browse available software engineering internships for Summer 2024
          </p>
        </CardHeader>

        <CardContent>
          <SearchInput value={searchInput} onChange={setSearchInput} />
          <div className="text-sm text-muted-foreground mb-4">
            {isLoading ? (
              <Skeleton className="h-4 w-40" />
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
            <div className="mt-6">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>
              Data sourced from{" "}
              <a
                href="https://github.com/SimplifyJobs/Summer2024-Internships"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
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
