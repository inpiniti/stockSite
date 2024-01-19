import { useStorage } from "@vueuse/core";

export const useDarkmode = () => {
  const darkmode = useStorage("darkmode", false);

  function toggleDarkmode() {
    darkmode.value = !darkmode.value;
  }

  return {
    darkmode,
    toggleDarkmode,
  };
};
