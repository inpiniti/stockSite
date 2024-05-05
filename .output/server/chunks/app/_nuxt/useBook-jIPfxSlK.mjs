import { u as useState } from './state-t0JlwV5Q.mjs';
import { e as useToast } from '../server.mjs';

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
//# sourceMappingURL=useBook-jIPfxSlK.mjs.map
