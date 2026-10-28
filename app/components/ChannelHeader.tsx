'use client';

import Image from 'next/image';
import { useState } from 'react';
import { profile } from '../data';
import {
  BellIcon,
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
  ShareIcon,
} from './icons';

export default function ChannelHeader() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="home" className="scroll-mt-20">
      {/* Banner */}
      <div className="relative h-28 w-full overflow-hidden rounded-2xl sm:h-40 md:h-120">
        <Image
          src="/images/banner.png"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </div>

      {/* Channel info row */}
      <div className="mt-4 flex flex-col gap-4 px-1 sm:flex-row sm:items-center sm:gap-6">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-yt-bg sm:h-32 sm:w-32">
          <Image
            src="/images/me.png"
            alt={profile.name}
            fill
            sizes="(min-width: 640px) 128px, 80px"
            loading="eager"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-yt-text-secondary">
            <span className="font-medium text-yt-text">{profile.handle}</span>
            <span>•</span>
            <span>
              {profile.stats.subscribers} {profile.stats.subscribersLabel}
            </span>
            <span>•</span>
            <span>
              {profile.stats.videos} {profile.stats.videosLabel}
            </span>
          </div>
          <p className="max-w-xl text-sm text-yt-text-secondary">
            {profile.tagline}{' '}
            <span className="text-yt-text">
              {profile.location} · {profile.role}.
            </span>
          </p>

          {/* Action buttons */}
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSubscribed((s) => !s)}
              aria-pressed={subscribed}
              className={`flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors ${
                subscribed
                  ? 'bg-yt-elevated text-yt-text hover:bg-yt-hover'
                  : 'bg-yt-text text-black hover:bg-white'
              }`}
            >
              {subscribed ? (
                <>
                  <BellIcon className="h-4 w-4" />
                  Subscribed
                </>
              ) : (
                'Subscribe'
              )}
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="flex h-9 items-center gap-2 rounded-full bg-yt-elevated px-4 text-sm font-medium text-yt-text transition-colors hover:bg-yt-hover"
            >
              <CheckIcon className="h-4 w-4 text-yt-red" />
              Hire me
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-yt-elevated text-yt-text transition-colors hover:bg-yt-hover"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-yt-elevated text-yt-text transition-colors hover:bg-yt-hover"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              aria-label="Share"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-yt-elevated text-yt-text transition-colors hover:bg-yt-hover"
            >
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
