'use client';

import { useEffect, useState } from 'react';
import About from './components/About';
import ChannelHeader from './components/ChannelHeader';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import { navItems } from './nav';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [query, setQuery] = useState('');

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Reveal-on-scroll for elements tagged with `.reveal`. A MutationObserver
  // picks up elements mounted later (filtering, remounts) so they don't stay hidden.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );
    const observeAll = () =>
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => observer.observe(el));

    observeAll();
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  // Searching surfaces the projects section as the active nav target.
  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (value.trim() !== '') setActiveSection('projects');
  };

  return (
    <div className="min-h-screen">
      <Header
        onMenuClick={() => setMobileOpen((o) => !o)}
        query={query}
        onQueryChange={handleQueryChange}
      />

      <Sidebar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={() => setMobileOpen(false)}
      />

      {/* Main content — offset for fixed header + desktop sidebar */}
      <main className="px-3 pb-20 pt-18 sm:px-6 md:ml-60 lg:px-10">
        <div className="mx-auto flex max-w-8xl flex-col gap-14">
          <ChannelHeader />
          <About />

          <Experience />
          <Projects query={query} />
          <Contact />
        </div>
      </main>
    </div>
  );
}
