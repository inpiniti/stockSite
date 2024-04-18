import { u as useState } from './state-0C5oRJ7z.mjs';
import { b as useToast } from '../server.mjs';

useToast();
const useBook = () => {
  const open = useState("bookOpen", () => false);
  const selected = useState("bookSelected", () => ({}));
  function openBook(newSelectedBook) {
    selected.value = newSelectedBook;
    open.value = true;
  }
  return {
    open,
    selected,
    openBook
  };
};

export { useBook as u };
//# sourceMappingURL=useBook-i4UKd4WA.mjs.map
