import { Job } from "@/types/internship";

const norm = (s?: string | null) =>
  (s ?? "").replace(/\s+/g, " ").trim();

export function parseInternshipData(content: string): Job[] {
  // Parse HTML inside the Markdown string
  const container = document.createElement("div");
  container.innerHTML = content;

  const tables = Array.from(container.querySelectorAll("table"));
  const target = tables.find(t => {
    const ths = Array.from(t.querySelectorAll("thead th")).map(th => norm(th.textContent).toLowerCase());
    return ["company", "role", "location", "application", "age"].every(h => ths.includes(h));
  });
  if (!target) return [];

  const rows = Array.from(target.querySelectorAll("tbody tr"));
  const jobs: Job[] = [];
  let lastCompany = "";

  for (const row of rows) {
    const tds = row.querySelectorAll("td");
    if (tds.length < 5) continue;

    let company = norm(tds[0].querySelector("a")?.textContent || tds[0].textContent);
    if (!company) company = lastCompany; else lastCompany = company;

    const title = norm(tds[1].textContent);

    const location = norm(tds[2].textContent);

    // Application link: prefer external "apply" link, else Simplify, else first href
    const anchors = Array.from(tds[3].querySelectorAll<HTMLAnchorElement>("a[href]"));
    const apply = anchors.find(a =>
      /apply|greenhouse|lever|workday|myworkdayjobs|careers|jobs|boards\.greenhouse/i.test(a.href)
    );
    const simplify = anchors.find(a => /simplify\.jobs/i.test(a.href));
    const link = norm((apply?.href || simplify?.href || anchors[0]?.href) ?? "");

    const addedOn = norm(tds[4].textContent);

    if (company && title && link) {
      jobs.push({ company, title, location, link, addedOn });
    }
  }

  return jobs;
}
