import { Job } from '@/types/internship';

/**
 * Parses the README content from SimplifyJobs repo to extract job listings
 *
 * @param content The README.md content as a string
 * @returns Array of parsed job listings
 */
export function parseInternshipData(content: string): Job[] {
  const regex =
    /\| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \| <a href="([^"]+?)">.*?<\/a> \| ([^|]+?) \|/g;
  let match: RegExpExecArray | null;
  const jobs: Job[] = [];
  let lastCompanyName = '';

  while ((match = regex.exec(content)) !== null) {
    let company = match[1].trim();

    if (company.startsWith('**[')) {
      company = company.replace(/\*\*\[(.*?)\]\(.*?\)\*\*/, '$1').trim();
    }

    company = company.replace(/[^a-zA-Z0-9\s]/g, '');

    if (company === '') {
      company = lastCompanyName;
    } else {
      lastCompanyName = company;
    }

    const title = match[2].trim().replace(/[^a-zA-Z0-9\s]/g, '');
    const location = match[3].trim();
    const link = match[4].trim();
    const addedOn = match[5].trim();

    jobs.push({
      company,
      title,
      location,
      link,
      addedOn,
    });
  }

  return jobs;
}
