import type { ColumnDef } from "@tanstack/vue-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
interface Board {
  // 게시판 객체의 구조를 정의하세요.
  id: string;
  type: string;
  kr: string;
  title: string;
  subject: string;
  writer: string;
  date: string;
  number: number; // 게시판 번호
  link: string;
  count: number; // 조회수
  recommend: number; // 추천수
}

export const columns: ColumnDef<Board>[] = [
  {
    accessorKey: "type",
    header: "게시판",
  },
  {
    accessorKey: "kr",
    header: "만화명",
  },
  {
    accessorKey: "subject",
    header: "말머리",
  },
  {
    accessorKey: "title",
    header: "제목",
  },
  {
    accessorKey: "writer",
    header: "글쓴이",
  },
  {
    accessorKey: "date",
    header: "작성일",
  },
  {
    accessorKey: "count",
    header: "조회",
  },
  {
    accessorKey: "recommend",
    header: "추천",
  },
];
