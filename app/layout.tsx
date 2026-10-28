import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Junhyung So — Software Engineer',
  description:
    "Hi, I'm Junhyung So, a Frontend Software Engineer with great passion for creating intuitive and user-friendly interfaces. With strong foundation in React and TypeScript, I specialize in building responsive, accessible, and performant web applications. I'm constantly driven to push boundaries, which includes learning new technologies to expand my skillset.Outside of work, I enjoy my personal time watching movies, playing the piano, and participating in community volunteering services. This portfolio website is inspired by my favorite website, Youtube.",
  authors: [{ name: 'Junhyung So' }],
  keywords: [
    'Junhyung So',
    'Software Engineer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Junhyung So — Software Engineer',
    description:
      'Frontend-leaning full-stack software engineer with 4+ years building intuitive, reliable web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full bg-yt-bg text-yt-text">{children}</body>
    </html>
  );
}
