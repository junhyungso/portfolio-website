/* Lightweight inline SVG icon set (YouTube-flavored).
   All icons inherit `currentColor` and accept a className. */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  ...props,
});

export function YouTubeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 20" height={20} aria-hidden>
      <path
        fill="#FF0000"
        d="M27.97 3.12A3.6 3.6 0 0 0 25.42.57C23.16 0 14.13 0 14.13 0S5.1 0 2.85.57A3.6 3.6 0 0 0 .3 3.12C-.27 5.37-.27 10-.27 10s0 4.63.57 6.88a3.6 3.6 0 0 0 2.55 2.55C5.1 20 14.13 20 14.13 20s9.03 0 11.29-.57a3.6 3.6 0 0 0 2.55-2.55c.57-2.25.57-6.88.57-6.88s0-4.63-.57-6.88z"
      />
      <path fill="#fff" d="M11.25 14.29 18.77 10l-7.52-4.29z" />
    </svg>
  );
}

export const HomeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 10v10h6v-6h4v6h6V10L12 3z" />
  </svg>
);

export const BriefcaseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9 4a2 2 0 0 0-2 2v1H3v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7h-4V6a2 2 0 0 0-2-2H9zm0 2h6v1H9V6zm-4 5h14v3h-5v-1H10v1H5v-3z" />
  </svg>
);

export const FolderPlayIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2zm-.5 6 5 3-5 3v-6z" />
  </svg>
);

export const SparkIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2l2.4 6.2L20 9l-4.8 4 1.6 6L12 15.6 7.2 19l1.6-6L4 9l5.6-.8L12 2z" />
  </svg>
);

export const PersonIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4.2V18h16V8.2l-8 5-8-5zM18.8 6H5.2l6.8 4.25L18.8 6z" />
  </svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M20.87 20.17 14.9 14.2a6.5 6.5 0 1 0-.7.7l5.96 5.97.71-.7zM10.5 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </svg>
);

export const BellIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm7-5v-1l-2-2v-4a5 5 0 0 0-4-4.9V4.5a1 1 0 0 0-2 0v.6A5 5 0 0 0 7 10v4l-2 2v1h14z" />
  </svg>
);

export const MicIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.7 8.65 22 10.9 22 14.3V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21H9V9z" />
  </svg>
);

export const GitHubIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2z" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const ShareIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M18 16a3 3 0 0 0-2.4 1.2l-7-3.5a3 3 0 0 0 0-1.4l7-3.5a3 3 0 1 0-.7-1.9c0 .24.03.47.08.7l-7 3.5a3 3 0 1 0 0 5.2l7 3.5a3 3 0 1 0 2.9-2.3z" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10V6h-2v7h6v-2h-4z" />
  </svg>
);

export const GraduationIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.8l-7 3.8-7-3.8z" />
  </svg>
);
