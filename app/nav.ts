import {
  BriefcaseIcon,
  FolderPlayIcon,
  HomeIcon,
  MailIcon,
  PersonIcon,
} from './components/icons';

export type NavItem = {
  id: string;
  label: string;
  icon: typeof HomeIcon;
};

// Section ids must match the `id` on each <section> in the page.
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About', icon: PersonIcon },
  { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
  { id: 'projects', label: 'Projects', icon: FolderPlayIcon },
  { id: 'contact', label: 'Contact', icon: MailIcon },
];
