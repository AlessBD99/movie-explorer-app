import type { LucideIcon } from 'lucide-react';
import type { INavigationLink } from './INavigationLink';

export interface INavbarProps {
  logoIcon: LucideIcon;
  links: INavigationLink[];
}
