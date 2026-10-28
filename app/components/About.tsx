import { education, profile, skillGroups } from '../data';
import { GraduationIcon, PersonIcon, SparkIcon } from './icons';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mb-4 flex items-center gap-3">
        <PersonIcon className="h-6 w-6 text-yt-red" />
        <h2 className="text-xl font-bold sm:text-2xl">About</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Summary — styled like a video description box */}
        <div className="reveal rounded-2xl bg-yt-bg-raised p-5 lg:col-span-2">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-yt-text-secondary">
            Description
          </h3>
          <p className="text-sm leading-relaxed text-yt-text">
            {profile.resumeSummary}
          </p>

          <div className="mt-5 border-t border-yt-border pt-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-yt-text-secondary">
              <SparkIcon className="h-4 w-4 text-yt-red" />
              Skills
            </h3>
            <div className="flex flex-col gap-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-medium text-yt-text-secondary">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-yt-border bg-yt-elevated px-3 py-1 text-xs text-yt-text transition-colors hover:border-yt-red hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education + quick stats */}
        <div className="flex flex-col gap-4">
          <div className="reveal rounded-2xl bg-yt-bg-raised p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-yt-text-secondary">
              <GraduationIcon className="h-4 w-4 text-yt-red" />
              Education
            </h3>
            <p className="text-base font-semibold text-yt-text">
              {education.school}
            </p>
            <p className="mt-0.5 text-sm text-yt-text-secondary">
              {education.degree}
            </p>
            <p className="mt-0.5 text-sm text-yt-text-secondary">
              {education.location} · {education.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
