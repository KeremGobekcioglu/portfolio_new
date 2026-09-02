import { profile, links } from "@/content";
import { LinkRow } from "./LinkRow";

export function Header() {
  return (
    <header>
      <h1 className="font-serif text-[clamp(2.25rem,4vw,3rem)] leading-[1.1]">{profile.name}</h1>
      <p className="mt-4 text-[1.125rem] leading-[1.4] text-ink dark:text-ink-dark">{profile.positioning}</p>
      <nav aria-label="Contact links" className="mt-6">
        <LinkRow links={links} />
      </nav>
    </header>
  );
}
