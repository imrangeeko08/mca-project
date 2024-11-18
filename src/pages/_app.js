"use client";
import "@/styles/globals.scss";
import "@/styles/bootstrap.scss";
import "@/pages/markets/market.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // Dynamically import the Bootstrap JS file
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // State to trigger re-evaluation of login status
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Function to check the user login status from localStorage
    const checkUserLoginStatus = () => {
      const userLoggedIn = localStorage.getItem("isLoggedIn"); // Replace with your actual logic
      setIsUserLoggedIn(userLoggedIn ? true : false);
    };

    // Initial check when the app is loaded
    checkUserLoginStatus();

    // Trigger login check on route change
    const handleRouteChange = (url) => {
      if (url === "/" ||url==="/Login" ||url==="/Signup") {
        // Trigger login check logic when homepage is visited
        checkUserLoginStatus();
      }
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      <Component {...pageProps} isLoggedIn={isUserLoggedIn} />
      <ToastContainer />
      <Footer />
    </>
  );
}
