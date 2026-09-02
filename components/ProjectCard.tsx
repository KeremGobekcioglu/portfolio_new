import type { Project } from "@/content";
import { Pill } from "./Pill";
import { ProjectVideo } from "./ProjectVideo";
import { ProjectScreenshots } from "./ProjectScreenshots";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <h3 className="font-serif text-xl">{project.title}</h3>
      <p className="mt-1 text-muted dark:text-muted-dark">{project.summary}</p>
      <p className="mt-4 leading-[1.65] max-w-content">{project.description}</p>

      {project.video && <ProjectVideo video={project.video} />}

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 space-y-2 max-w-content list-disc pl-4 marker:text-muted dark:marker:text-muted-dark">
          {project.highlights.map((point) => (
            <li key={point} className="leading-[1.65]">
              {point}
            </li>
          ))}
        </ul>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <ProjectScreenshots screenshots={project.screenshots} />
      )}

      {project.note && (
        <p className="mt-4 text-sm text-muted dark:text-muted-dark border-l-2 border-line dark:border-line-dark pl-4 max-w-content leading-[1.65]">
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
