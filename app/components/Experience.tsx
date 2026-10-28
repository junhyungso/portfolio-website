import { experiences } from "../data";
import { BriefcaseIcon, PinIcon, PlayIcon } from "./icons";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="mb-4 flex items-center gap-3">
        <BriefcaseIcon className="h-6 w-6 text-yt-red" />
        <h2 className="text-xl font-bold sm:text-2xl">Experience</h2>
        <span className="rounded-full bg-yt-elevated px-2 py-0.5 text-xs text-yt-text-secondary">
          {experiences.length} roles
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="reveal group flex flex-col gap-4 rounded-2xl border border-transparent bg-yt-bg-raised p-3 transition-colors hover:border-yt-border hover:bg-yt-elevated sm:flex-row"
          >
            {/* "Thumbnail" */}
            <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl sm:w-56 md:w-64">
              <div
                className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${
                    ["#cc0000", "#00a1e0", "#7b2ff7", "#1db954"][i % 4]
                  }, #181818)`,
                }}
              >
                {exp.company
                  .replace(/\(.*\)/, "")
                  .trim()
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                {exp.period.split(" — ")[1] === "Present" ? "Now" : "Past"}
              </span>
              {exp.current && (
                <span className="absolute left-2 top-2 flex items-center gap-1 rounded bg-yt-red px-1.5 py-0.5 text-[11px] font-medium text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  LIVE
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col">
              <h3 className="flex items-center gap-2 text-base font-semibold sm:text-lg">
                {exp.title}
                <PlayIcon className="h-4 w-4 text-yt-text-secondary opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-yt-text-secondary">
                <span className="font-medium text-yt-text">{exp.company}</span>
                <span>•</span>
                <span>{exp.period}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <PinIcon className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </div>

              <ul className="mt-2 flex flex-col gap-1.5">
                {exp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-2 text-sm leading-relaxed text-yt-text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yt-red" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
