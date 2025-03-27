import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search by company, title, or location...",
}: SearchInputProps) {
  return (
    <div className="relative mb-6 mt-4 max-w-md">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-10 bg-black border-zinc-800 text-white focus-visible:ring-zinc-700 focus-visible:border-zinc-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
