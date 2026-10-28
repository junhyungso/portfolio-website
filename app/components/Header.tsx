"use client";

import { profile } from "../data";
import {
  YouTubeLogo,
  MenuIcon,
  SearchIcon,
  MicIcon,
  BellIcon,
} from "./icons";

type HeaderProps = {
  onMenuClick: () => void;
  query: string;
  onQueryChange: (value: string) => void;
};

export default function Header({
  onMenuClick,
  query,
  onQueryChange,
}: HeaderProps) {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-4 bg-yt-bg px-2 sm:px-4">
      {/* Left: menu + logo */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-yt-text transition-colors hover:bg-yt-hover"
        >
          <MenuIcon />
        </button>
        <a
          href="#home"
          className="flex items-center gap-1.5"
          aria-label="Home"
        >
          <YouTubeLogo />
          <span className="hidden text-lg font-bold tracking-tight sm:inline">
            Portfolio
          </span>
        </a>
      </div>

      {/* Center: search */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-xl items-center">
          <label className="flex h-10 flex-1 items-center rounded-l-full border border-yt-border bg-[#121212] pl-4 focus-within:border-yt-blue">
            <SearchIcon className="mr-2 hidden h-4 w-4 text-yt-text-secondary sm:block" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              type="search"
              placeholder="Search projects, skills, companies…"
              aria-label="Search projects"
              className="h-full w-full bg-transparent text-sm text-yt-text placeholder:text-yt-text-secondary focus:outline-none"
            />
          </label>
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-12 items-center justify-center rounded-r-full border border-l-0 border-yt-border bg-yt-elevated text-yt-text-secondary transition-colors hover:bg-yt-hover"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Search with your voice"
            className="ml-2 hidden h-10 w-10 items-center justify-center rounded-full bg-yt-elevated text-yt-text transition-colors hover:bg-yt-hover sm:flex"
          >
            <MicIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Right: notifications + avatar */}
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="relative hidden h-10 w-10 items-center justify-center rounded-full text-yt-text transition-colors hover:bg-yt-hover sm:flex"
        >
          <BellIcon className="h-6 w-6" />
          <span className="absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-yt-red px-1 text-[10px] font-medium text-white">
            4
          </span>
        </button>
        <a
          href="#contact"
          aria-label="Profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yt-red to-[#7b2ff7] text-sm font-medium text-white"
        >
          {initials}
        </a>
      </div>
    </header>
  );
}
