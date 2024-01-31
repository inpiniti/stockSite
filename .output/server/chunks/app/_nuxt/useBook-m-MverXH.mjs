import { u as useState } from './state-1iJA_-lt.mjs';
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
//# sourceMappingURL=useBook-m-MverXH.mjs.map
