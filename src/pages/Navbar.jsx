"use client";
import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Logo from "../../public/Image/Logo.jpeg";
const Navbar = ({ isUserLoggedIn }) => {
  const router = useRouter();
  const isActive = path => router.pathname === path;
  // console.log("check:",isUserLoggedIn)
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn); // Set initial state based on prop
  // Handle login status changes
  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn); // Update local state when the prop changes
  }, [isUserLoggedIn]); // Re-run this effect when the prop changes

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false); // Update state to false
    router.push("/Login"); // Navigate to login page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary top-0 sticky-top w-100  z-100 p-0">
        <Link href="/" className="mx-3 py-1">
          <img
            src="/Image/Logo.png"
            alt="Why Join Us"
            className="img-fluid"
            width={100}
            height={10}
          />
        </Link>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-3 gap-2  p-4 p-lg-0 me-auto position-relative">
            <div legacyBehavior className="dropdown nav-item  ">
              <button
                className={`dropdown-toggle nav-link ${
                  isActive("/") ? "active" : ""
                }`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MARKETS <FaChevronDown className="ms-1" />
              </button>
              <ul className="submenu-md list-unstyled dropdown-menu   fade-up m-0">
                <Link href="/markets/Automative">
                  <li className="position-relative dropdown-item ">
                    {" "}
                    {/* Added position-relative */}
                    <div
                      className={`arrow first-arrow d-lg-block d-none rounded-circle`}
                    >
                      <GoArrowRight />
                    </div>
                    <div className="image-container d-lg-block d-none">
                      {" "}
                      {/* New container for image */}
                      <img
                        src="Image/automotive-background-768x512.jpg"
                        alt="automotive"
                      />
                    </div>
                    <span className="title">Automative</span>
                  </li>
                </Link>
                <Link href="/markets/Consumer">
                  <li className="position-relative dropdown-item ">
                    <div
                      className={`arrow second-arrow d-lg-block d-none rounded-circle`}
                    >
                      <GoArrowRight />
                    </div>
                    <div className="image-container d-lg-block d-none">
                      <img
                        src="Image/consumer-background-768x512.jpg"
                        alt="consumer"
                      />
                    </div>
                    <span className="title">Consumer</span>
                  </li>
                </Link>
                <Link href="/markets/Industrial">
                  <li className="position-relative dropdown-item ">
                    <div
                      className={`arrow third-arrow d-lg-block d-none rounded-circle`}
                    >
                      <GoArrowRight />
                    </div>
                    <div className="image-container d-lg-block d-none">
                      <img
                        src="Image/industrial-background-768x512.jpg"
                        alt="industrial"
                      />
                    </div>
                    <span className="title">Industrial</span>
                  </li>
                </Link>
                <Link href="/markets/Retail">
                  <li className="position-relative dropdown-item ">
                    <div
                      className={`arrow fourth-arrow d-lg-block d-none  rounded-circle`}
                    >
                      <GoArrowRight />
                    </div>
                    <div className="image-container d-lg-block d-none">
                      <img
                        src="Image/retail-background-768x576.jpg"
                        alt="retail"
                      />
                    </div>
                    <span className="title">Retail</span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="nav-item dropdown">
              <Link
                href="/"
                className="nav-link dropdown-toggle fs-2"
                data-bs-toggle="dropdown"
              >
                About US <FaChevronDown className={`ms-1`} />
              </Link>
              <div className="dropdown-menu fade-up m-0">
                <Link href="/About" legacyBehavior>
                  <Link
                    href="/About"
                    className={`dropdown-item ${
                      isActive("/price") ? "active" : ""
                    }`}
                  >
                    Company overviwe
                  </Link>
                </Link>
                <Link href="/About" legacyBehavior>
                  <Link
                    href="/About"
                    className={`dropdown-item ${
                      isActive("/features") ? "active" : ""
                    }`}
                  >
                    Managment Teams
                  </Link>
                </Link>
                <Link href="/BusinessTerms" legacyBehavior>
                  <Link
                    href="/BusinessTerms"
                    className={`dropdown-item ${
                      isActive("/quote") ? "active" : ""
                    }`}
                  >
                    Business Terms
                  </Link>
                </Link>
                <Link href="/CodeOfCunduct" legacyBehavior>
                  <Link
                    href="/CodeOfCunduct"
                    className={`dropdown-item ${
                      isActive("/team") ? "active" : ""
                    }`}
                  >
                    Codes of Conduct
                  </Link>
                </Link>
              </div>
            </div>
            <Link href="/Services" legacyBehavior>
              <Link
                href="Services"
                className={`nav-item nav-link ${
                  isActive("/Services") ? "active" : ""
                }`}
              >
                Services
              </Link>
            </Link>

            <Link href="/Contact" legacyBehavior>
              <Link
                href="/Contact"
                className={`nav-item nav-link ${
                  isActive("/Contact") ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </Link>
            <Link href="/Carrer" legacyBehavior>
              <Link
                href="/Carrer"
                className={`nav-item nav-link ${
                  isActive("/Carrer") ? "active" : ""
                }`}
              >
                Carrer
              </Link>
            </Link>

            {isUserLoggedIn ? (
              <button
                className="btn btn-danger text-white h-25 mt-3 mx-2 border-0 btn-outline-dark"
                style={{ padding: "8px 16px", borderRadius: "5px" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link href="/Login" legacyBehavior>
                <button
                  className="btn btn-danger text-white h-25 mt-3 mx-2 border-0 btn-outline-dark"
                  style={{ padding: "8px 16px", borderRadius: "5px" }}
                >
                  Login
                </button>
              </Link>
            )}
            {isUserLoggedIn && (
              <>
                {localStorage.getItem("user") &&
                JSON.parse(localStorage.getItem("user")).role === "admin" ? (
                  <Link className="nav-item" href="/admin/Dashboard">
                    <button className="btn text-nowrap mt-3 btn-danger border-0 btn-outline-dark rounded-1 p-2 text-white">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <Link className="nav-item" href="/FreeQoute">
                    <button className="btn text-nowrap mt-3 btn-danger border-0 btn-outline-dark rounded-1 p-2 text-white">
                      Get a Free Quote
                    </button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
