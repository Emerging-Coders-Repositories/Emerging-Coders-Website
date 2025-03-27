import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  onRetry: () => void;
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Oops! Something went wrong
        </h2>
        <p className="text-zinc-400 mb-6">
          We couldn&apos;t fetch the internship listings. Please try again later
          or check the repository directly.
        </p>
        <Button
          onClick={onRetry}
          className="bg-purple-700 hover:bg-purple-600 text-white"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
