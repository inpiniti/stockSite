export const useGenre = () => useState<any>("useGenre", () => []);
export const useUniqueGenre = () => useState<any>("useUniqueGenre", () => []);

export async function getGenre() {
  let { data: newGener, error } = await useSupabase()
    .value.from("genre")
    .select();
  useGenre().value = newGener ?? [];
  useUniqueGenre().value = uniqueGenre();
}

// kr 로 중복 제거
export function uniqueGenre() {
  return useGenre().value.filter(
    (genre: any, index: number, self: any) =>
      index === self.findIndex((g: any) => g.kr === genre.kr)
  );
}

// 특정 장르에 해당하는 리스트 반환
export function getGenreKrList(genreName: string) {
  return useGenre().value.filter(
    (genre: any) => genre.genre_name === genreName
  );
}

// genre_name 로 중복제거하는데, genre_name 의 갯수도 컬럼에 추가해줘
export function uniqueGenreByGenre() {
  const genres = useGenre().value;

  // 장르 이름별 개수 계산
  const genreCounts = genres.reduce((counts: any, genre: any) => {
    counts[genre.genre_name] = (counts[genre.genre_name] || 0) + 1;
    return counts;
  }, {});

  // 중복 제거
  const uniqueGenres = genres.filter(
    (genre: any, index: number, self: any) =>
      index === self.findIndex((g: any) => g.genre_name === genre.genre_name)
  );

  // 중복 개수 추가
  const result = uniqueGenres.map((genre: any) => ({
    genre_name: genre.genre_name,
    count: genreCounts[genre.genre_name],
  }));

  // 개수로 정렬
  result.sort((a: any, b: any) => b.count - a.count);

  return result;
}
