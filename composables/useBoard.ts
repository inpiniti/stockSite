interface Board {
  // 게시판 객체의 구조를 정의하세요.
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  book: string;
}

export const useBoard = () => {
  const boards = useState<Board[]>("boards", () => []);

  async function getBoards() {
    const result = await useSupabase().value.from("board").select();
    boards.value = result?.data || [];
    return boards.value;
  }

  return {
    getBoards,
  };
};

// supabase 에서 board 를 가져오는데, kr만 가져오는데, 중복은 제거 하고 싶다.
export async function getKr(boards: Board[]) {
  // group by
  const { data, error } = await useSupabase()
    .value.from("board_kr")
    .select()
    .order("kr");

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
