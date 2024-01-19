import { useStorage } from "@vueuse/core";

export const useDarkmode = () => {
  const darkmode = useStorage("darkmode", false);

  function toggleDarkmode() {
    darkmode.value = !darkmode.value;

    setDarkmode();
  }

  function setDarkmode() {
    if (darkmode.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return {
    darkmode,
    toggleDarkmode,
    setDarkmode,
  };
};
