import React from 'react';
import { Film, Tv, LayoutGrid } from 'lucide-react';

interface MovieTypeFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export const MovieTypeFilter: React.FC<MovieTypeFilterProps> = ({ selectedType, onTypeChange }) => {
  const types = [
    { id: 'all', label: 'Todo', Icon: LayoutGrid },
    { id: 'movie', label: 'Película', Icon: Film },
    { id: 'series', label: 'Serie', Icon: Tv },
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-neutral-800/40 rounded-2xl border border-neutral-700/50 backdrop-blur-md">
      {types.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => onTypeChange(id)}
          className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
            selectedType === id
              ? 'btn-gold rounded-xl'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-700/30 rounded-xl'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};
