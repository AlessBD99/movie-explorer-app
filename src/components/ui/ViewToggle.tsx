import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-neutral-800/40 rounded-2xl border border-neutral-700/50 backdrop-blur-md">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 transition-all duration-300 ${
          view === 'grid'
            ? 'btn-gold rounded-xl'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-700/30 rounded-xl'
        }`}
        title="Vista de cuadrícula"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 transition-all duration-300 ${
          view === 'list'
            ? 'btn-gold rounded-xl'
            : 'text-neutral-400 hover:text-white hover:bg-neutral-700/30 rounded-xl'
        }`}
        title="Vista de lista"
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
};
