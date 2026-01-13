import React from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { NavbarLogo } from "./NavbarLogo";
import { NavLink } from "./NavLink";
import type { INavbarProps } from "../core/models/navigation/INavbarProps";

const Navbar: React.FC<INavbarProps> = ({ logoIcon, links }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20">
          <div className="flex-shrink-0 z-10">
            <NavbarLogo Icon={logoIcon} />
          </div>

          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="flex items-center gap-10 pointer-events-auto">
              {links.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 z-10">
            <button 
              className="btn-settings group"
              title="Configuración"
            >
              <Settings className="w-5 h-5" />
              <span className="tooltip-gold">
                CONFIGURACIÓN
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
