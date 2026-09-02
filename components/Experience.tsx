import { experience } from "@/content";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <FadeIn>
      <section aria-labelledby="experience-heading">
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <div className="divide-y divide-line dark:divide-line-dark">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-medium">
                  {item.role} <span className="text-muted dark:text-muted-dark">&middot; {item.company}</span>
                </p>
                <p className="ml-auto shrink-0 text-sm text-muted dark:text-muted-dark">{item.dates}</p>
              </div>
              <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                {item.employmentType}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <ul className="mt-3 space-y-2 max-w-content list-disc pl-4 marker:text-muted dark:marker:text-muted-dark">
                {item.highlights.map((point) => (
                  <li key={point} className="leading-[1.6]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
