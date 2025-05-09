"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import ThemeContext from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const isDarkTheme = themeContext?.theme === "dark";

  return (
    <header
      className={`py-4 px-5 flex justify-between items-center shadow-md ${themeContext?.theme}`}
    >
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <button
        className={`${
          isDarkTheme ? "border-gray-50" : "border-gray-400"
        } p-3 border-1 rounded-full hover:cursor-pointer flex justify-center items-center`}
        onClick={themeContext?.toggleTheme}
      >
        {!isDarkTheme ? (
          <MoonIcon size={24} color="#202020" />
        ) : (
          <SunIcon size={24} color="white" />
        )}
      </button>
    </header>
  );
}
