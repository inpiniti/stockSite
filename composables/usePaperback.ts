export interface Paperback {
  // 게시판 객체의 구조를 정의하세요.
  author: string;
  booknum: number;
  cover_image: string;
  created_at: string;
  description: string;
  id: number;
  kr: string;
  pages: string;
  price: string;
  publication_date: string;
  publisher: string;
}

export const usePaperback = () =>
  useState<Paperback>("paperback", () => <Paperback>{});
