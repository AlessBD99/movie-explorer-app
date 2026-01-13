export const getPosterUrl = (poster: string | undefined, title: string = "Movie"): string => {
  const cleanPoster = poster?.trim();
  if (!cleanPoster || cleanPoster === "N/A") {
    const encodedTitle = encodeURIComponent(title);
    return `https://placehold.co/400x600/1a1a1a/ffffff?text=${encodedTitle}`;
  }
  return cleanPoster;
};
