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
        const githubApiUrl = `https://api.github.com/repos/${repoPath}/contents/README.md`;
    
        const repoMetadata = await fetch(githubApiUrl);

        if (!repoMetadata.ok) {
          throw new Error(
            `GitHub API responded with status ${repoMetadata.status}`
          );
        }

        const json = await repoMetadata.json();
        if (!("git_url" in json)) {
          throw new Error("Unexpected metadata format. Metadata received: " + JSON.stringify(json) + ", expected git_url field.");
        }

        const response = await fetch(json.git_url);

        if (!response.ok) {
          throw new Error(
            `GitHub API responded with status ${response.status}`
          );
        }

        const readme = await response.json();
        const { content, encoding } = readme; // encoding should be "base64"

        if (encoding !== 'base64')
          throw new Error('Unexpected README encoding');

        const bytes = Uint8Array.from(atob(content), (c) => c.charCodeAt(0));
        const decodedContent = new TextDecoder('utf-8').decode(bytes);

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
