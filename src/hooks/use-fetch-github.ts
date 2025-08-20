import { useEffect, useState } from 'react';

import { Job } from '@/types/internship';
import { parseInternshipData } from '@/utils/parse-internships';

interface UseFetchGithubResult {
  data: Job[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

/**
 * Custom hook to fetch and parse internship data from GitHub
 */
export function useFetchGithub(repoPath: string): UseFetchGithubResult {
  const [data, setData] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoPath}/contents/README.md`
        );

        if (!response.ok) {
          throw new Error(
            `GitHub API responded with status ${response.status}`
          );
        }

        const readme = await response.json();
        const content = readme.content;
        const decodedContent = atob(content);

        const parsedJobs = parseInternshipData(decodedContent);
        setData(parsedJobs);
      } catch (error) {
        console.error('Error fetching from GitHub:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [repoPath, refreshKey]);

  const refetch = () => setRefreshKey((prevKey) => prevKey + 1);

  return { data, isLoading, isError, refetch };
}
