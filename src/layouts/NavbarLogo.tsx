import type { LucideIcon } from 'lucide-react';

export const NavbarLogo: React.FC<{ Icon: LucideIcon }> = ({ }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <svg 
        viewBox="0 0 512 512" 
        className="h-10 w-10 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] transition-transform group-hover:scale-110 duration-300"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#BF953F', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#FCF6BA', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B38728', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g fill="url(#goldGradient)">
          <path d="M16,0v512h480V0H16z M88,476H56v-56h32V476z M88,380H56v-56h32V380z M88,284H56v-56h32V284z M88,188H56v-56h32 V188z M88,92H56V36h32V92z M392,475.313H120V276h272V475.313z M392,236H120V35.313h272V236z M456,476h-32v-56h32V476z M456,380h-32 v-56h32V380z M456,284h-32v-56h32V284z M456,188h-32v-56h32V188z M456,92h-32V36h32V92z" />
        </g>
      </svg>
    </div>
  );
};
