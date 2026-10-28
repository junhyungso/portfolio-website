'use client';

import { profile } from '../data';
import { navItems } from '../nav';
import { GitHubIcon, LinkedInIcon } from './icons';

type SidebarProps = {
  activeSection: string;
  mobileOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export default function Sidebar({
  activeSection,
  mobileOpen,
  onClose,
  onNavigate,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden
      />

      <nav
        aria-label="Primary"
        className={`fixed left-0 top-0 z-50 flex h-full w-60 flex-col bg-yt-bg pt-14 transition-transform duration-200 ease-out md:z-30 md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => onNavigate(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center gap-5 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? 'bg-yt-hover font-medium text-yt-text'
                    : 'text-yt-text hover:bg-yt-hover'
                }`}
              >
                <Icon className="h-6 w-6 shrink-0" />
                <span>{item.label}</span>
                {active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-yt-red" />
                )}
              </a>
            );
          })}

          <div className="my-3 border-t border-yt-border" />

          <p className="px-3 pb-1 text-xs uppercase tracking-wide text-yt-text-secondary">
            Connect
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 rounded-xl px-3 py-2.5 text-sm text-yt-text transition-colors hover:bg-yt-hover"
          >
            <LinkedInIcon className="h-6 w-6 shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 rounded-xl px-3 py-2.5 text-sm text-yt-text transition-colors hover:bg-yt-hover"
          >
            <GitHubIcon className="h-6 w-6 shrink-0" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>
    </>
  );
}
