import { MovieTypeFilter } from './MovieTypeFilter';
import { ViewToggle } from '../ui/ViewToggle';

interface MovieFiltersProps {
  type: string;
  view: 'grid' | 'list';
  onTypeChange: (type: string) => void;
  onViewChange: (view: 'grid' | 'list') => void;
}

export const MovieFilters: React.FC<MovieFiltersProps> = ({
  type,
  view,
  onTypeChange,
  onViewChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-2 group animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <MovieTypeFilter 
          selectedType={type} 
          onTypeChange={onTypeChange} 
        />
      </div>

      <ViewToggle 
        view={view} 
        onViewChange={onViewChange} 
      />
    </div>
  );
};
