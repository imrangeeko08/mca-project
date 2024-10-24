"use client";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  const router = useRouter();
  const isActive = path => router.pathname === path;
  const [isLogin, setIsLogin] = useState(true); // Toggle state between login and signup

  const toggleMode = () => {
    setIsLogin(!isLogin);
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
            {/* <Link href="/About" legacyBehavior>
              <a className={`nav-item nav-link ${isActive("/About") ? "active" : ""}`}>
                About US <FaChevronDown className={`ms-1`} />
              </a> 
            </Link> */}
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

            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle fs-2"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu fade-up m-0">
                <Link href="/price" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/price") ? "active" : ""
                    }`}
                  >
                    Pricing Plan
                  </a>
                </Link>
                <Link href="/features" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/features") ? "active" : ""
                    }`}
                  >
                    Features
                  </a>
                </Link>
                <Link href="/quote" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/quote") ? "active" : ""
                    }`}
                  >
                    Free Quote
                  </a>
                </Link>
                <Link href="/team" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/team") ? "active" : ""
                    }`}
                  >
                    Our Team
                  </a>
                </Link>
                <Link href="/testimonial" legacyBehavior>
                  <a
                    className={`dropdown-item ${
                      isActive("/testimonial") ? "active" : ""
                    }`}
                  >
                    Testimonial
                  </a>
                </Link>
              </div>
            </div> */}

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

            <Link href="/Login" legacyBehavior>
              <button
                className="btn btn-danger text-white h-25 mt-3 mx-2 border-0 btn-outline-dark"
                // data-bs-toggle="modal"
                // data-bs-target="#loginModal"
                style={{ padding: "8px 16px", borderRadius: "5px" }}
              >
                Login
              </button>
            </Link>
            <Link className="nav-item " href="/FreeQoute">
              {" "}
              <button className="btn text-nowrap mt-3 btn-danger border-0 btn-outline-dark   rounded-1 p-2 text-white">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* form */}
      {/* <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                {isLogin ? "Login" : "Sign Up"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label text-black">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-black">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label text-black">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-1 w-75 btn-outline-dark border-0"
                  >
                    {isLogin ? "Login" : "Sign Up"}
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <span>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={toggleMode}
                  className="btn btn-link p-0 text-primary"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
