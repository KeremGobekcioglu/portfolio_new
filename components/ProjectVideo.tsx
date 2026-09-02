"use client";

import { useState } from "react";
import type { Project } from "@/content";

export function ProjectVideo({ video }: { video: NonNullable<Project["video"]> }) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`
  );

  return (
    <div className="mt-6 mb-6 max-w-content">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-line dark:border-line-dark bg-line/30 dark:bg-line-dark/30">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerated-media; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full rounded-lg"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailSrc}
              alt={video.title}
              onError={() => setThumbnailSrc(`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`)}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 transition-transform duration-150 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5 fill-white" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
