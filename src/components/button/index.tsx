import { ButtonHTMLAttributes, ReactNode } from "react";
import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <button
      className={`flex justify-center gap-2 items-center w-full hover:cursor-pointer px-2 py-3 ${
        themeContext?.theme === "dark"
          ? "bg-gray-100 text-[#181818]"
          : "bg-[#181818] text-white"
      }  rounded`}
      {...props}
    >
      {children}
    </button>
  );
}
