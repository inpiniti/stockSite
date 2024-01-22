export const useBook = () => {
  const open = useState("bookOpen", () => false);
  const selected = useState<any>("bookSelected", () => ({}));
  const books = useState<any[]>("books", () => []);

  function openBook(newSelectedBook: any) {
    console.log("openBook", newSelectedBook);
    selected.value = newSelectedBook;
    open.value = true;
  }

  return {
    open,
    selected,
    openBook,
  };
};
