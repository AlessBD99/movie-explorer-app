import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface MoviePosterProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackSizeClassName?: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({
  src,
  alt,
  className,
  containerClassName,
  fallbackSizeClassName = "text-4xl",
}) => {
  const [error, setError] = useState(false);
  const hasPoster = src && src !== "N/A" && !error;

  return (
    <div className={cn("relative overflow-hidden flex items-center justify-center bg-neutral-800", containerClassName)}>
      {hasPoster ? (
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover", className)}
          onError={() => setError(true)}
        />
      ) : (
        <span className={cn(fallbackSizeClassName)}>🎬</span>
      )}
    </div>
  );
};

export default MoviePoster;
