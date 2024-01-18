import type { ColumnDef } from "@tanstack/vue-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
interface Board {
  // 게시판 객체의 구조를 정의하세요.
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  book: string;
}

export const columns: ColumnDef<Board>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "title",
    header: "title",
  },
  {
    accessorKey: "author",
    header: "author",
  },
  {
    accessorKey: "date",
    header: "date",
  },
  {
    accessorKey: "content",
    header: "content",
  },
  {
    accessorKey: "book",
    header: "book",
  },
];
