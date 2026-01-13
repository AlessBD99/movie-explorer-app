import React from 'react';
import { Calendar } from 'lucide-react';

interface ReleaseYearFilterProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

export const ReleaseYearFilter: React.FC<ReleaseYearFilterProps> = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="relative group flex items-center p-1 bg-neutral-800/40 rounded-2xl border border-neutral-700/50 backdrop-blur-md transition-all hover:bg-neutral-800/60">
      <div className="pl-3 pr-1 text-neutral-400 group-hover:text-blue-400 transition-colors">
        <Calendar className="w-4 h-4" />
      </div>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="appearance-none bg-transparent text-white pl-2 pr-10 py-2 rounded-xl outline-none text-sm font-semibold cursor-pointer w-full"
      >
        <option value="" className="bg-neutral-900">Año</option>
        {years.map((year) => (
          <option key={year} value={year} className="bg-neutral-900">
            {year}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-neutral-500">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};
