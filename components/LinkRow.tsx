import { Icon } from "./icons";
import type { SiteLink } from "@/content";

export function LinkRow({ links, className = "" }: { links: SiteLink[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="inline-flex items-center gap-1.5 text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark transition-colors duration-150"
            target={link.icon === "mail" ? undefined : "_blank"}
            rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
          >
            <Icon name={link.icon} className="h-4 w-4 shrink-0" />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
