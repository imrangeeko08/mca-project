import { Inter } from "next/font/google";
import Home from "./Home";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
export default function Index() {
  return (
    <main className={` ${inter.className}`}>
      <Home></Home>
    </main>
  );
}


