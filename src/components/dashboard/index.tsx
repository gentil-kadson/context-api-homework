"use client";

import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";
import Button from "../button";

export default function Dashboard() {
  const authContext = useContext(AuthContext);

  return (
    <section className="border rounded shadow-md h-fit w-[500px] py-8 px-6 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">
        Welcome, {authContext?.user?.name}!
      </h2>
      <Button onClick={authContext?.logout}>Logout</Button>
    </section>
  );
}
