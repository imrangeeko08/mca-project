"use client";
import "@/styles/globals.scss";
import "@/styles/bootstrap.scss";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== "undefined"
      ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
      : null;
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
