import { otherWork, type OtherWorkItem } from "@/content";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

function ItemBody({ item }: { item: OtherWorkItem }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
        <span className="font-medium underline-offset-4 group-hover:underline group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-150">
          {item.name}
        </span>
        <span className="text-sm text-muted dark:text-muted-dark">{item.tech}</span>
      </div>
      <p className="mt-0.5 text-[0.9375rem] text-muted dark:text-muted-dark">{item.line}</p>
    </>
  );
}

export function OtherWork() {
  return (
    <FadeIn>
      <section aria-labelledby="other-work-heading">
        <SectionHeading id="other-work-heading">Other work</SectionHeading>
        <p className="text-sm text-muted dark:text-muted-dark mb-6 max-w-content">
          Coursework and side projects — older, but they cover ground the work above doesn&apos;t.
        </p>
        <div className="space-y-6">
          {otherWork.map((group) => (
            <div key={group.group}>
              <h3 className="text-[0.75rem] uppercase tracking-wide text-accent dark:text-accent-dark">
                {group.group}
              </h3>
              <ul className="mt-3 space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block text-ink dark:text-ink-dark"
                      >
                        <ItemBody item={item} />
                      </a>
                    ) : (
                      <div className="text-ink dark:text-ink-dark">
                        <ItemBody item={item} />
                      </div>
                    )}
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
