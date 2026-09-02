import { links, profile } from "@/content";
import { LinkRow } from "./LinkRow";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 pt-8 border-t border-line dark:border-line-dark">
      <LinkRow links={links} />
      <p className="mt-4 text-sm text-muted dark:text-muted-dark">
        &copy; {year} {profile.name}
      </p>
    </footer>
  );
}
