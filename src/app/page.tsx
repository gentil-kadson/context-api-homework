"use client";

import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

export default function Home() {
  const themeContext = useContext(ThemeContext);

  return (
    <main className={`border-1 min-h-screen ${themeContext?.theme}`}></main>
  );
}
