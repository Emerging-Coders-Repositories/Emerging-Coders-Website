import React from "react";
import { Job } from "@/types/internship";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface JobTableProps {
  jobs: Job[];
  isLoading: boolean;
}

export function JobTable({ jobs, isLoading }: JobTableProps) {
  // Render loading skeletons
  const renderSkeletons = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <TableRow key={`skeleton-${i}`}>
          <TableCell>
            <Skeleton className="h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-full" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-32" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-20" />
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Company</TableHead>
            <TableHead>Position</TableHead>
            <TableHead className="w-[140px]">Location</TableHead>
            <TableHead className="w-[100px] text-right">Apply</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            renderSkeletons()
          ) : jobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8">
                No internships found. Try adjusting your search.
              </TableCell>
            </TableRow>
          ) : (
            jobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{job.company}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Apply
                  </a>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
