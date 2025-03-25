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
  const renderSkeletons = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <TableRow
          key={`skeleton-${i}`}
          className="border-zinc-900 hover:bg-transparent"
        >
          <TableCell>
            <Skeleton className="h-6 w-full bg-zinc-900/70" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-full bg-zinc-900/70" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-32 bg-zinc-900/70" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-24 bg-zinc-900/70" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-6 w-20 bg-zinc-900/70" />
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <div className="border border-zinc-900 rounded-md bg-black">
      <Table>
        <TableHeader className="bg-zinc-900">
          <TableRow className="border-zinc-800 hover:bg-zinc-900">
            <TableHead className="w-[180px] text-zinc-300 font-medium">
              Company
            </TableHead>
            <TableHead className="text-zinc-300 font-medium">
              Position
            </TableHead>
            <TableHead className="w-[140px] text-zinc-300 font-medium">
              Location
            </TableHead>
            <TableHead className="w-[100px] text-zinc-300 font-medium">
              Added On
            </TableHead>
            <TableHead className="w-[80px] text-right text-zinc-300 font-medium">
              Apply
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            renderSkeletons()
          ) : jobs.length === 0 ? (
            <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
              <TableCell colSpan={4} className="text-center py-8 text-zinc-400">
                No internships found. Try adjusting your search.
              </TableCell>
            </TableRow>
          ) : (
            jobs.map((job, index) => (
              <TableRow
                key={index}
                className={`border-zinc-900 ${
                  index % 2 === 0 ? "bg-black" : "bg-zinc-950"
                } hover:bg-zinc-800/30`}
              >
                <TableCell className="font-medium text-zinc-200">
                  {job.company}
                </TableCell>
                <TableCell className="text-zinc-300">{job.title}</TableCell>
                <TableCell className="text-zinc-400">{job.location}</TableCell>
                <TableCell className="text-zinc-500">{job.addedOn}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 hover:underline"
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
