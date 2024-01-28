import { u as useState } from './state-1iJA_-lt.mjs';

const useGenre = () => useState("useGenre", () => []);
function uniqueGenre() {
  return useGenre().value.filter(
    (genre, index, self) => index === self.findIndex((g) => g.kr === genre.kr)
  );
}
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

export { uniqueGenre as a, getGenreKrList as g, uniqueGenreByGenre as u };
//# sourceMappingURL=useGenre-nlsnrXsp.mjs.map
