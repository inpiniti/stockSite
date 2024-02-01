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
