import { profile, links, education } from "@/content";
import { LinkRow } from "./LinkRow";
import { ThemeToggle } from "./ThemeToggle";

// "Sep 2020 – Jun 2026" -> "2020–2026"; "Feb 2023 – Jun 2023" -> "2023"
function yearRange(dates: string): string {
  const years = dates.match(/\d{4}/g) ?? [];
  const start = years[0];
  const end = years[years.length - 1];
  if (!start) return dates;
  return start === end ? start : `${start}–${end}`;
}

export function Sidebar() {
  return (
    <div className="lg:sticky lg:top-16 lg:self-start">
      <header>
        <h1 className="font-serif text-[clamp(2.25rem,4vw,3rem)] leading-[1.1]">{profile.name}</h1>
        <p className="mt-4 text-[1.125rem] leading-[1.4] text-ink dark:text-ink-dark">{profile.positioning}</p>
        <p className="mt-3 text-sm text-muted dark:text-muted-dark">{profile.location}</p>
      </header>

      <div className="mt-8">
        <h2 className="text-[0.75rem] uppercase tracking-wide text-muted dark:text-muted-dark">Education</h2>
        <div className="mt-3 space-y-4">
          {education.map((item) => (
            <div key={item.institution}>
              <p className="text-[0.9375rem] font-normal text-ink dark:text-ink-dark">{item.institution}</p>
              <p className="text-[0.8125rem] text-muted dark:text-muted-dark">
                {(item.note ?? item.degree).replace(/\.$/, "")} · {yearRange(item.dates)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <nav aria-label="Contact links" className="mt-6">
        <LinkRow links={links} className="lg:flex-col lg:items-start lg:gap-3" />
      </nav>

      <div className="mt-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
