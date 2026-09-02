import type { ReactNode } from "react";

export function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <h2 id={id} className="font-serif text-2xl">
        {children}
      </h2>
      <div className="mt-3 border-b border-line dark:border-line-dark" />
    </div>
  );
}
