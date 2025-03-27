import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;
  const getMaxVisiblePages = () => {
    return window.innerWidth < 640 ? 3 : 5;
  };

  const maxVisiblePages = getMaxVisiblePages();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    e.preventDefault();
    onPageChange(page);
  };

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  return (
    <Pagination className="overflow-x-auto py-2">
      <PaginationContent className="text-zinc-400 flex-wrap justify-center">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={`bg-black border-zinc-800 hover:bg-zinc-900 hover:text-white ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
        {startPage > 1 && (
          <>
            <PaginationItem className="hidden sm:inline-flex">
              <PaginationLink
                href="#"
                onClick={(e) => handleClick(e, 1)}
                isActive={currentPage === 1}
                className={`bg-black border-zinc-800 hover:bg-zinc-900 hover:text-white ${
                  currentPage === 1
                    ? "bg-purple-900 text-white border-purple-800"
                    : ""
                }`}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {startPage > 2 && (
              <PaginationItem className="hidden sm:inline-flex">
                <PaginationEllipsis className="text-zinc-600" />
              </PaginationItem>
            )}
          </>
        )}

        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={(e) => handleClick(e, page)}
              isActive={currentPage === page}
              className={`bg-black border-zinc-800 hover:bg-zinc-900 hover:text-white ${
                currentPage === page
                  ? "bg-purple-600 text-white border-purple-800"
                  : ""
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <PaginationItem className="hidden sm:inline-flex">
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem className="hidden sm:inline-flex">
              <PaginationLink
                href="#"
                onClick={(e) => handleClick(e, totalPages)}
                isActive={currentPage === totalPages}
                className={`bg-black border-zinc-800 hover:bg-zinc-900 hover:text-white ${
                  currentPage === totalPages
                    ? "bg-purple-900 text-white border-purple-800"
                    : ""
                }`}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={`bg-black border-zinc-800 hover:bg-zinc-900 hover:text-white ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
