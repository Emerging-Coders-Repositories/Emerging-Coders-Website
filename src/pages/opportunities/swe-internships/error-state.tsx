import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  onRetry: () => void;
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't fetch the internship listings. Please try again later or
          check the repository directly.
        </p>
        <Button onClick={onRetry}>Try Again</Button>
      </div>
    </div>
  );
}
