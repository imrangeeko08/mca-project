"use client";
import "@/styles/globals.scss";
import "@/styles/bootstrap.scss";
import "@/pages/markets/market.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./admin/Dashboard";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // State to manage login status and user role
  const [userDetails, setUserDetails] = useState({ isLoggedIn: false, role: null });

  useEffect(() => {
    // Dynamically import the Bootstrap JS file
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    // Function to check user login status and role from localStorage
    const checkUserDetails = () => {
      const userLoggedIn = localStorage.getItem("isLoggedIn");
      const user = JSON.parse(localStorage.getItem("user"));

      // Update state with login status and role
      setUserDetails({
        isLoggedIn: userLoggedIn === "true",
        role: user?.role || null,
      });
    };

    // Initial check when the app is loaded
    checkUserDetails();

    // Trigger login check on route change
    const handleRouteChange = (url) => {
      if (url === "/" || url === "/Login" || url === "/Signup") {
        checkUserDetails();
      }
    };

    // Listen to route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
 

            {/* Pass isUserLoggedIn and role to Navbar */}
            <Navbar isUserLoggedIn={userDetails.isLoggedIn} role={userDetails.role} />
      {/* Pass isLoggedIn and role to the current page component */}
      <Component {...pageProps} isLoggedIn={userDetails.isLoggedIn} role={userDetails.role} />
      <ToastContainer />
      <Footer />
    </>
  );
}
