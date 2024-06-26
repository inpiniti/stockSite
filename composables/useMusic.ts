export const useMusic = () => useState<any>("useMusic", () => []);

export async function getMusic() {
  let { data: music } = await useSupabase().value.from("youtube").select("*");
  useMusic().value = music ?? [];
}

export async function getMusicByKr(kr: string) {
  const { data } = await useSupabase()
    .value.from("youtube")
    .select("*")
    .eq("kr", kr);
  return data;
}
