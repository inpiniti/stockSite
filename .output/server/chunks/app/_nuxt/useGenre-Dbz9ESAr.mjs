import { useStorage } from '@vueuse/core';
import { u as useState } from './state-JJ2SDzd5.mjs';

const useCoverList = () => useStorage("coverList", () => [{}]);
const useCoverListFirst = () => useStorage("coverListFirst", () => [{}]);
async function updateCoverImage(books) {
  console.log("updateCoverImage");
  console.log("books", books);
  const coverList = useCoverList();
  return books.map((book) => {
    const matchingCover = coverList.value.find(
      (cover) => cover.kr === book.kr && cover.booknum === book.booknum
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }
    return book;
  });
}
async function updateCoverImageFirst(books) {
  console.log("updateCoverImage");
  console.log("books", books);
  const coverList = useCoverListFirst();
  return books.map((book) => {
    const matchingCover = coverList.value.find(
      (cover) => cover.kr === book.kr
    );
    if (matchingCover) {
      book.img = matchingCover.cover_image;
    }
    return book;
  });
}
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

export { updateCoverImage as a, updateCoverImageFirst as b, useUniqueGenre as c, useCoverList as d, getGenreKrList as g, uniqueGenreByGenre as u };
//# sourceMappingURL=useGenre-Dbz9ESAr.mjs.map
