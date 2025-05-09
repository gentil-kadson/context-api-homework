"use client";

import Button from "../button";
import { LogInIcon } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";
import AuthContext from "@/contexts/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const { register, handleSubmit } = useForm<{ name: string }>();

  const handleLogin: SubmitHandler<{ name: string }> = (data) => {
    authContext?.login(data.name);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="border border-gray-400 rounded-md shadow-md h-fit w-[500px] flex flex-col items-center gap-8 py-10 px-5"
    >
      <fieldset className="flex flex-col w-full">
        <legend className="text-2xl font-bold text-center">Login</legend>
        <p className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <input
            className="p-2 border border-gray-400 focus:outline-none rounded"
            type="text"
            id="name"
            placeholder="donkus"
            required
            {...register("name")}
          />
        </p>
      </fieldset>
      <Button>
        <LogInIcon
          size={24}
          color={`${themeContext?.theme === "dark" ? "#181818" : "white"}`}
        />
        Login
      </Button>
    </form>
  );
}
