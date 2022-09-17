import { useEffect, useState } from "preact/hooks";

export default function ToggleDisplayThemeButton(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isDarkMode") === "true") {
      document.body.classList.add("dark");
    }
  });

  const switchTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <button
      onClick={switchTheme}
      className={`outline-none text-4xl z-50 transform  duration-200 ease-in-out fixed right-12	top-1.5	${
        !isDarkMode ? "rotate-[360]" : ""
      }`}
    >
      {isDarkMode ? "🌝" : "🌚"}
    </button>
  );
}
