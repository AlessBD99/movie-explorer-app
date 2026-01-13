import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Calendar, Clock, Globe, Award } from "lucide-react";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { getPosterUrl } from "../utils/movieUtils";

export const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { movie, loading, error, getMovieById } = useMovieDetail();

  useEffect(() => {
    if (id) {
      getMovieById(id);
    }
  }, [id, getMovieById]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'hsl(var(--gold))', borderTopColor: 'transparent' }}></div>
        <p className="text-neutral-400 animate-pulse">Cargando detalles...</p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
        <div className="bg-red-500/10 p-4 rounded-full border border-red-500/20 text-red-500">
          <Globe className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">¡Ups! Algo salió mal</h2>
          <p className="text-neutral-400 max-w-md">{error || "No pudimos encontrar la película que buscas."}</p>
        </div>
        <button 
          onClick={() => navigate("/")}
          className="btn-gold"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="py-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-neutral-400 transition-all mb-8 group hover:text-[hsl(var(--gold))]"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Volver</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4 group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 bg-neutral-800">
            <img 
              src={getPosterUrl(movie.Poster, movie.Title)} 
              alt={movie.Title} 
              onError={(e) => {
                const target = e.currentTarget;
                const fallback = getPosterUrl(undefined, movie.Title);
                if (target.src !== fallback) {
                  target.src = fallback;
                }
              }}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-current" style={{ color: 'hsl(var(--gold-light))' }} />
              <span className="text-sm font-bold" style={{ color: 'hsl(var(--gold-light))' }}>{movie.imdbRating}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {movie.Genre.split(", ").map((genre) => (
                <span key={genre} className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ backgroundColor: 'hsl(var(--gold) / 0.1)', color: 'hsl(var(--gold))', borderWidth: '1px', borderStyle: 'solid', borderColor: 'hsl(var(--gold) / 0.2)' }}>
                  {genre}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              {movie.Title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-neutral-400 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                <span>{movie.Year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                <span>{movie.Runtime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                <span>{movie.Rated}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-neutral-500 text-sm uppercase font-bold tracking-widest">
              Sinopsis
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
              {movie.Plot}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-800">
            <div className="space-y-2">
              <p className="text-neutral-500 text-sm uppercase font-bold tracking-widest">Director</p>
              <p className="text-white text-lg font-semibold">{movie.Director}</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-500 text-sm uppercase font-bold tracking-widest">Reparto</p>
              <p className="text-white text-lg font-semibold leading-snug">{movie.Actors}</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-500 text-sm uppercase font-bold tracking-widest">Escritores</p>
              <p className="text-white font-medium">{movie.Writer}</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-500 text-sm uppercase font-bold tracking-widest">País</p>
              <p className="text-white font-medium">{movie.Country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
