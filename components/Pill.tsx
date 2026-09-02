export function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line dark:border-line-dark px-2.5 py-1 text-[0.75rem] leading-none text-muted dark:text-muted-dark">
      {children}
    </span>
  );
}
