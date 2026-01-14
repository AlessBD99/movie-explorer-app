import { useState, useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import { Input } from "../components/ui/Input";
import MovieCard from "../components/ui/MovieCard";
import { MovieFilters } from "../components/filters/MovieFilters";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Modal } from "../components/ui/Modal";
import MoviePoster from "../components/ui/MoviePoster";

export const Home = () => {
  const navigate = useNavigate();
  const { 
    loading, 
    movies, 
    error, 
    searchMoviesByTitle, 
    filters, 
    updateFilters,
    totalResults,
    currentPage
  } = useMovies();
  
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setIsErrorModalOpen(true);
    }
  }, [error]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchMoviesByTitle(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className=" flex flex-col items-center justify-center min-h-[70vh] gap-6">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>
      <h1 className="text-4xl font-extrabold sm:text-6xl tracking-tight text-center">
        Busca tu próxima aventura <br />
      <span className="text-gradient">The Film Vault</span>

      </h1>

      <div className="w-full flex justify-center">
        <Input
          placeholder="Buscar películas..."
          aria-label="Buscar películas"
          value={searchQuery}
          maxLength={50}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
        />
      </div>


      {movies.length > 0 && (
        <MovieFilters 
          type={filters.type}
          view={view}
          onTypeChange={(type) => updateFilters({ type })}
          onViewChange={setView}
        />
      )}

      <div className="w-full">
        {loading && (
          <p className="text-neutral-400 text-center py-10 italic">
            Cargando películas...
          </p>
        )}

        {!loading && movies && movies.length > 0 && (
          <div className="mt-6 w-full space-y-12">
            {view === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {movies.map((movie: any, index: number) => {
                  const id = movie.imdbID ?? movie.id ?? String(index);
                  return (
                    <MovieCard
                      key={id}
                      movie={movie}
                      index={index}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full">
                {movies.map((movie: any, index: number) => {
                  const id = movie.imdbID ?? movie.id ?? String(index);
                  
                  return (
                    <div 
                      key={id}
                      onClick={() => navigate(`/movie/${id}`)}
                      className="group flex items-center gap-6 p-4 rounded-2xl bg-neutral-800/20 border border-neutral-800 hover:bg-neutral-800/40 transition-all cursor-pointer"
                      style={{ 
                        borderColor: 'hsl(var(--border))',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--gold) / 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--border))';
                      }}
                    >
                      <MoviePoster
                        src={movie.Poster}
                        alt={movie.Title}
                        containerClassName="w-16 h-24 rounded-lg shadow-lg"
                        fallbackSizeClassName="text-4xl"
                      />
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl font-bold truncate transition-colors" style={{ color: 'inherit' }}>
                          {movie.Title}
                        </h3>
                        <p className="text-neutral-400 mt-1">{movie.Year} • <span className="uppercase text-xs font-black tracking-tighter" style={{ color: 'hsl(var(--gold))' }}>{movie.Type}</span></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex flex-col items-center gap-8 w-full py-8 border-t border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-neutral-500 text-sm font-medium">
                Mostrando <span className="text-white font-bold">{movies.length}</span> de <span className="text-white font-bold">{totalResults}</span> resultados
              </p>

              <ReactPaginate
                breakLabel="..."
                nextLabel={<ChevronRight className="w-5 h-5" />}
                onPageChange={({ selected }) => {
                  searchMoviesByTitle(searchQuery, selected + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(totalResults / 10)}
                previousLabel={<ChevronLeft className="w-5 h-5" />}
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center gap-2"
                pageClassName="rounded-xl overflow-hidden"
                pageLinkClassName="pagination-link"
                activeClassName="active-page"
                activeLinkClassName="pagination-link-active"
                previousClassName="rounded-xl"
                previousLinkClassName="pagination-nav-link"
                nextClassName="rounded-xl"
                nextLinkClassName="pagination-nav-link"
                breakClassName="w-10 h-10 flex items-center justify-center text-neutral-600"
                disabledClassName="opacity-30 cursor-not-allowed pointer-events-none"
              />
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        title="Problema de sincronización"
        description="No logramos obtener el catálogo en este momento. Por favor, intente más tarde."
        icon={<AlertCircle className="w-10 h-10 text-red-500" />}
        actions={
          <button
            onClick={() => setIsErrorModalOpen(false)}
            className="w-full btn-gold"
          >
            Entendido
          </button>
        }
      />
    </section>
  );
};
