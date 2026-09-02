import { projects } from "@/content";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <FadeIn>
      <section aria-labelledby="projects-heading">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <div className="divide-y divide-line dark:divide-line-dark">
          {projects.map((project) => (
            <div key={project.title} className="py-7 first:pt-0 last:pb-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
