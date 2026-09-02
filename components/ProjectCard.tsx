import type { Project } from "@/content";
import { Pill } from "./Pill";

function getStatusLabel(project: Project): string | null {
  const labels = project.links.map((link) => link.label.toLowerCase());
  if (labels.some((label) => label.includes("google play"))) return "Live on Google Play";
  if (labels.some((label) => label.includes("live"))) return "Live app";
  if (labels.includes("github")) return "Open source";
  return null;
}

export function ProjectCard({ project }: { project: Project }) {
  const status = getStatusLabel(project);

  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-xl">{project.title}</h3>
        {status && (
          <span className="ml-auto shrink-0 text-[0.75rem] uppercase tracking-wide text-accent dark:text-accent-dark">
            {status}
          </span>
        )}
      </div>
      <p className="mt-1 text-muted dark:text-muted-dark">{project.summary}</p>
      <p className="mt-4 leading-[1.6] max-w-content">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 space-y-2 max-w-content list-disc pl-4 marker:text-muted dark:marker:text-muted-dark">
          {project.highlights.map((point) => (
            <li key={point} className="leading-[1.6]">
              {point}
            </li>
          ))}
        </ul>
      )}

      {project.note && (
        <p className="mt-4 text-sm text-muted dark:text-muted-dark border-l-2 border-line dark:border-line-dark pl-4 max-w-content leading-[1.6]">
          {project.note}
        </p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
        {project.stack.map((tech) => (
          <li key={tech}>
            <Pill>{tech}</Pill>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2" aria-label={`Links for ${project.title}`}>
        {project.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 transition-colors duration-150"
            >
              {link.label} &rarr;
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
