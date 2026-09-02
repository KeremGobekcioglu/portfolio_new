import Image, { type StaticImageData } from "next/image";
import type { Project } from "@/content";

import yildiznameDailyReading from "../public/yildizname/daily-reading.png";
import yildiznameCompatDetail from "../public/yildizname/compat-detail.png";

// content.ts keeps `src` as a plain public/ URL string (so the content layer
// stays framework-agnostic); this maps those strings to statically-imported
// images so next/image gets real intrinsic dimensions and an exact srcset
// instead of probing the file at request time.
const staticImagesBySrc: Record<string, StaticImageData> = {
  "/yildizname/daily-reading.png": yildiznameDailyReading,
  "/yildizname/compat-detail.png": yildiznameCompatDetail,
};

export function ProjectScreenshots({ screenshots }: { screenshots: NonNullable<Project["screenshots"]> }) {
  return (
    <div className="mt-6 mb-6 max-w-content">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-1 md:overflow-visible md:snap-none md:pb-0">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="w-[60vw] shrink-0 snap-start md:w-[330px]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[14px] border border-line dark:border-line-dark">
              <Image
                src={staticImagesBySrc[shot.src] ?? shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 767px) 60vw, 330px"
                quality={90}
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-[0.75rem] text-muted dark:text-muted-dark">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
