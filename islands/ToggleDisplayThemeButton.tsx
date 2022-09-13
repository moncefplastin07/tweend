import { useState } from "preact/hooks";

export default function ToggleDisplayThemeButton(props) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const switchTheme = ()=>{
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark')
  }
  return (
    <button
      onClick={switchTheme}
      className={`outline-none text-4xl z-50 transform  duration-200 ease-in-out fixed right-1.5	top-1.5	${
        !isDarkMode ? "rotate-[360]" : ""
      }`}
    >
      {isDarkMode ? "🌝" : "🌚"}
    </button>
  );
}