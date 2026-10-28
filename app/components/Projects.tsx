"use client";

import { useMemo, useState } from "react";
import { projects, projectFilters } from "../data";
import { FolderPlayIcon, PlayIcon, ClockIcon } from "./icons";

type ProjectsProps = {
  query: string;
};

export default function Projects({ query }: ProjectsProps) {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesQuery =
        q === "" ||
        [p.title, p.company, p.blurb, ...p.tags]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mb-4 flex items-center gap-3">
        <FolderPlayIcon className="h-6 w-6 text-yt-red" />
        <h2 className="text-xl font-bold sm:text-2xl">Projects</h2>
        <span className="rounded-full bg-yt-elevated px-2 py-0.5 text-xs text-yt-text-secondary">
          {visible.length} of {projects.length}
        </span>
      </div>

      {/* Filter chips */}
      <div className="no-scrollbar -mx-1 mb-5 flex gap-3 overflow-x-auto px-1 pb-1">
        {projectFilters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-yt-text text-black"
                  : "bg-yt-elevated text-yt-text hover:bg-yt-hover"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl border border-yt-border bg-yt-bg-raised p-10 text-center text-yt-text-secondary">
          <p className="text-lg">No projects match “{query}”.</p>
          <p className="mt-1 text-sm">Try a different search or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => {
            const Card = p.link ? "a" : "div";
            const cardProps = p.link
              ? {
                  href: p.link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <Card
                key={p.title}
                {...cardProps}
                className="reveal group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <div
                    className="absolute inset-0 flex items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${p.thumb[0]}, ${p.thumb[1]})`,
                    }}
                  >
                    <span className="font-bold text-white drop-shadow">
                      {p.glyph}
                    </span>
                  </div>
                  {/* hover play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yt-red text-white">
                      <PlayIcon className="h-6 w-6" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    {p.duration}
                  </span>
                  {p.category === "Featured" && (
                    <span className="absolute left-2 top-2 rounded bg-yt-red px-1.5 py-0.5 text-[11px] font-semibold text-white">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Meta row */}
                <div className="mt-3 flex gap-3">
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${p.thumb[0]}, #181818)`,
                    }}
                  >
                    {p.company
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="line-clamp-2 text-sm font-medium leading-snug text-yt-text group-hover:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-yt-text-secondary">
                      {p.company}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-yt-text-secondary">
                      <span>{p.views}</span>
                      <span>•</span>
                      <ClockIcon className="h-3 w-3" />
                      <span>{p.posted}</span>
                    </p>
                  </div>
                </div>

                {/* Blurb + tags */}
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-yt-text-secondary">
                  {p.blurb}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-yt-elevated px-2 py-0.5 text-[11px] text-yt-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}
