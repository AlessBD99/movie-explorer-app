import React from 'react';
import type { INavigationLink } from '../core/models/navigation/INavigationLink';

interface NavLinkProps extends INavigationLink {
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ name, Icon, mobile, onClick }) => {
  const baseClasses = mobile 
    ? "flex items-center gap-3 w-full text-left px-4 py-3 text-base text-neutral-400 hover:bg-white/5 hover:text-white rounded-xl transition-all" 
    : "nav-link group";

  return (
    <button
      onClick={onClick}
      className={baseClasses}
    >
      {Icon && <Icon className="w-4 h-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />}
      <span>{name}</span>
    </button>
  );
};
