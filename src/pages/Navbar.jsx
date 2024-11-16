"use client";
import React from "react";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  const router = useRouter();
    const isActive = path => router.pathname === path;
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

    // Check login status on component mount
 useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);  // Ensure false if not logged in
    }
  }, []); // Empty dependency array means it runs once on mount

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        router.push('/Login');
    };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary top-0 sticky-top w-100  z-100 p-0">
        <a
          href="/"
          className="navbar-brand bg-primary my-2 ms-2 d-flex align-items-center px-4 px-lg-3 "
        >
          <h2 className="mb-2 fs-4 text-white">Logistica</h2>
        </a>
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
              <a
                className={`nav-item dropdown-toggle nav-link ${
                  isActive("/") ? "active" : ""
                }`}
              >
                MARKETS <FaChevronDown className={`ms-1`} />
                {/* Submenu */}
              </a>
              <ul className="submenu d-flex list-unstyled dropdown-menu   fade-up m-0">
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
              <a
                href=""
                className="nav-link dropdown-toggle fs-2"
                data-bs-toggle="dropdown"
              >
                About US <FaChevronDown className={`ms-1`} />
              </a>
              <div className="dropdown-menu fade-up m-0">
                <Link href="/About" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/price") ? "active" : ""
                    }`}
                  >
                    Company overviwe
                  </a>
                </Link>
                <Link href="/ManagmentTeams" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/features") ? "active" : ""
                    }`}
                  >
                    Managment Teams
                  </a>
                </Link>
                <Link href="/BusinessTerms" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/quote") ? "active" : ""
                    }`}
                  >
                    Business Terms
                  </a>
                </Link>
                <Link href="/CodesOfConduct" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/team") ? "active" : ""
                    }`}
                  >
                    Codes of Conduct
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/Services" legacyBehavior>
              <a
                className={`nav-item nav-link ${
                  isActive("/Services") ? "active" : ""
                }`}
              >
                Services <FaChevronDown className={`ms-1`} />
              </a>
            </Link>

           

            <Link href="/Contact" legacyBehavior>
              <a
                className={`nav-item nav-link ${
                  isActive("/Contact") ? "active" : ""
                }`}
              >
                Contact
              </a>
            </Link>
            <Link href="/Carrer" legacyBehavior>
              <a
                className={`nav-item nav-link ${
                  isActive("/Carrer") ? "active" : ""
                }`}
              >
                Carrer
              </a>
            </Link>

          {isLoggedIn ? (
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
            <Link className="nav-item " href="/FreeQoute">
              {" "}
              <button className="btn text-nowrap mt-3 btn-danger border-0 btn-outline-dark   rounded-1 p-2 text-white">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </nav>

     
    </div>
  );
};

export default Navbar;
