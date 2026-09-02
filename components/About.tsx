import { profile } from "@/content";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <FadeIn>
      <section aria-labelledby="about-heading">
        <SectionHeading id="about-heading">About</SectionHeading>
        <div className="space-y-4 max-w-content">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="leading-[1.65]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
