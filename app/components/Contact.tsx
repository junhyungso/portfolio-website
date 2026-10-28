import { contactLinks, profile } from '../data';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from './icons';

const iconFor = {
  email: MailIcon,
  phone: PhoneIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  location: PinIcon,
} as const;

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mb-4 flex items-center gap-3">
        <MailIcon className="h-6 w-6 text-yt-red" />
        <h2 className="text-xl font-bold sm:text-2xl">Contact</h2>
      </div>

      <div className="overflow-hidden rounded-2xl bg-yt-bg-raised">
        {/* Contact grid */}
        <div className="grid grid-cols-1 gap-px bg-yt-border sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((c) => {
            const Icon = iconFor[c.kind];
            const external = c.kind === 'linkedin' || c.kind === 'github';
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 bg-yt-bg-raised px-5 py-4 transition-colors hover:bg-yt-elevated"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yt-elevated text-yt-text transition-colors group-hover:bg-yt-red group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs uppercase tracking-wide text-yt-text-secondary">
                    {c.label}
                  </span>
                  <span className="truncate text-sm text-yt-text group-hover:text-white">
                    {c.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-yt-text-secondary">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
