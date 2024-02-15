import { u as useState } from './state-t0JlwV5Q.mjs';

const useGenre = () => useState("useGenre", () => []);
const useUniqueGenre = () => useState("useUniqueGenre", () => []);
function getGenreKrList(genreName) {
  return useGenre().value.filter(
    (genre) => genre.genre_name === genreName
  );
}
function uniqueGenreByGenre() {
  const genres = useGenre().value;
  const genreCounts = genres.reduce((counts, genre) => {
    counts[genre.genre_name] = (counts[genre.genre_name] || 0) + 1;
    return counts;
  }, {});
  const uniqueGenres = genres.filter(
    (genre, index, self) => index === self.findIndex((g) => g.genre_name === genre.genre_name)
  );
  const result = uniqueGenres.map((genre) => ({
    genre_name: genre.genre_name,
    count: genreCounts[genre.genre_name]
  }));
  result.sort((a, b) => b.count - a.count);
  return result;
}

export { useUniqueGenre as a, getGenreKrList as g, uniqueGenreByGenre as u };
//# sourceMappingURL=useGenre-pQZGhYHe.mjs.map
