"use client";

import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";
import AuthContext from "@/contexts/AuthContext";
import LoginForm from "@/components/login-form";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  return (
    <main
      className={`min-h-screen py-8 flex justify-center ${
        themeContext?.theme === "dark" && "dark bg-[#181818]"
      }`}
    >
      {authContext?.user ? <Dashboard /> : <LoginForm />}
    </main>
  );
}
