import { Film, Tv } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getPosterUrl } from "../../utils/movieUtils";
import { useState } from "react";

interface MovieCardProps {
  movie: any;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  index,
}) => {
  const navigate = useNavigate();
  const id = movie.imdbID ?? movie.id ?? String(index);
  const title = movie.Title ?? movie.title ?? "Untitled";
  const poster = getPosterUrl(movie.Poster ?? movie.poster, title);
  const year = movie.Year ?? movie.year ?? "";
  const type = movie.Type ?? movie.type ?? "movie";
  const genre = movie.Genre
    ? String(movie.Genre)
        .split(",")
        .map((g: string) => g.trim())
    : movie.genre ?? [];

  const [posterError, setPosterError] = useState(false);
  const hasPoster = movie.Poster !== 'N/A' && !posterError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => navigate(`/movie/${id}`)}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-card bg-neutral-800">
        {hasPoster ? (
          <img
            src={poster}
            alt={title}
            onError={() => setPosterError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-6xl">🎬</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {type === "movie" ? (
            <Film className="h-3.5 w-3.5" style={{ color: 'hsl(var(--gold))' }} />
          ) : (
            <Tv className="h-3.5 w-3.5" style={{ color: 'hsl(var(--gold))' }} />
          )}
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            {type}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-16 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {genre?.map((g: string) => (
              <span
                key={g}
                className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full bg-primary/20 text-primary"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{year}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
