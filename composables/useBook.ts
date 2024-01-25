import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();

export const useBook = () => {
  // 책 선택시 다이아로그를 열기 위한 상태
  const open = useState("bookOpen", () => false);

  // 다이아 로그에서 선택된 책이 무엇인지 알기 위해서...
  const selected = useState<any>("bookSelected", () => ({}));

  // 책 리스트에서 선택되었을 때...
  function openBook(newSelectedBook: any) {
    selected.value = newSelectedBook;
    open.value = true;
  }

  return {
    open,
    selected,
    openBook,
  };
};
