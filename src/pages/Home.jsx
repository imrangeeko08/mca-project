'use client'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaShare } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaQuoteRight } from 'react-icons/fa';
export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);



  const testimonials = [
    { img: '/Image/testimonial-1.jpg', name: 'Client Name 1', profession: 'Profession 1', text: 'my name is imran khan i want to say that this is the best  service provider company in all over the wolrd ' },
    { img: '/Image/testimonial-2.jpg', name: 'Client Name 2', profession: 'Profession 2', text: 'Testimonial text 2' },
    { img: '/Image/testimonial-3.jpg', name: 'Client Name 3', profession: 'Profession 3', text: 'Testimonial text 3' },
    { img: '/Image/testimonial-4.jpg', name: 'Client Name 4', profession: 'Profession 4', text: 'Testimonial text 4' },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <main className={` ${inter.className}`}>
      {/* Carousel start   */}
      <div className="container-fluid p-0 pb-2">
        <div
          id="carouselExample"
          className="carousel slide position-relative mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* First Carousel Item */}
            <div className="carousel-item active position-relative">
              <img
                className="img-fluid w-100"
                src="/Image/carousel-1.jpg"
                alt=""
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(6, 3, 21, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-10 col-lg-8"
                      data-aos="fade-up" // AOS animation for text coming from bottom
                    >
                      <h5
                        className="text-white text-uppercase mb-3 fs-6 fs-md-5 fs-lg-3 animated"
                        data-aos="fade-up"
                        data-aos-delay="200" // Delayed animation for heading
                      >
                        Transport & Logistics Solution
                      </h5>
                      <h1
                        className="display-5 display-md-4 display-lg-1 text-white animated mb-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        #1 Place For Your{" "}
                        <span className="text-primary">Logistics</span> Solution
                      </h1>
                      <p
                        className="fs-6 fs-md-5 fs-lg-2 fw-medium text-white mb-4 pb-2"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                        diam no. Kasd rebum ipsum et diam justo clita et kasd
                        rebum sea elitr.
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-2 px-3 py-md-3 px-md-5 me-3 animated"
                        data-aos="fade-left"
                        data-aos-delay="800"
                      >
                        Read More
                      </a>
                      <a
                        href=""
                        className="btn btn-secondary py-2 px-3 py-md-3 px-md-5 animated"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                      >
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Carousel Item */}
            <div className="carousel-item position-relative">
              <img
                className="img-fluid w-100"
                src="/Image/carousel-2.jpg"
                alt=""
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(6, 3, 21, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-10 col-lg-8"
                      data-aos="fade-up" // Same effect for second carousel item
                    >
                      <h5
                        className="text-white text-uppercase mb-3 fs-6 fs-md-5 fs-lg-3 animated"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Transport & Logistics Solution
                      </h5>
                      <h1
                        className="display-5 display-md-4 display-lg-1 text-white animated mb-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        #1 Place For Your{" "}
                        <span className="text-primary">Transport</span> Solution
                      </h1>
                      <p
                        className="fs-6 fs-md-5 fs-lg-2 fw-medium text-white mb-4 pb-2"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                        diam no. Kasd rebum ipsum et diam justo clita et kasd
                        rebum sea elitr.
                      </p>
                      <a
                        href=""
                        className="btn btn-primary py-2 px-3 py-md-3 px-md-5 me-3 animated"
                        data-aos="fade-left"
                        data-aos-delay="800"
                      >
                        Read More
                      </a>
                      <a
                        href=""
                        className="btn btn-secondary py-2 px-3 py-md-3 px-md-5 animated"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                      >
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn btn-danger btn-outline-dark btn-outline-dark border-0 p-4"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn btn-danger btn-outline-dark btn-outline-dark border-0 p-4"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Carousel End */}

      {/* about start */}

      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container about py-3 px-lg-0">
          <div className="row g-5 mx-lg-0">
            {/* Left Image */}
            <div
              className="col-lg-6 ps-lg-0 wow fadeInLeft"
              style={{ minHeight: "400px" }}
              data-aos="fade-right" // AOS attribute for sliding right
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/Image/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt="About"
                />
              </div>
            </div>

            {/* Right Content */}
            <div
              className="col-lg-6 about-text"
              data-aos="fade-left" // AOS attribute for sliding left
            >
              <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
              <h1 className="mb-5">Quick Transport and Logistics Solutions</h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4 mb-5">
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                  <FaGlobe className="text-primary mb-3" size={48} />
                  <h5>Global Coverage</h5>
                  <p className="m-0">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
                  <FaShippingFast className="text-primary mb-3" size={48} />
                  <h5>On Time Delivery</h5>
                  <p className="m-0">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam justo.
                  </p>
                </div>
              </div>
              <a href="" className="btn btn-primary py-3 px-5">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About end */}

      {/* <!-- Fact Start --> */}

      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
              <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="d-flex align-items-center">
                <FaHeadphones
                  className="flex-shrink-0 bg-primary p-2 text-white"
                  size={42}
                />
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+012 345 6789</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div
                    className="bg-primary p-4 mb-4"
                    data-aos="fade-up" // AOS animation for the first counter
                    data-aos-delay="300"
                  >
                    <FaUsers className="text-white mb-3" size={32} />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div
                    className="bg-secondary p-4"
                    data-aos="fade-up" // AOS animation for the second counter
                    data-aos-delay="500"
                  >
                    <FaShip className="text-white mb-3" size={32} />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="bg-success p-4"
                    data-aos="fade-up" // AOS animation for the third counter
                    data-aos-delay="700"
                  >
                    <FaStar className="text-white mb-3" size={32} />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fact End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-secondary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/Image/service-1.jpg"
                    alt="Air Freight"
                  />
                </div>
                <h4 className="mb-3">Air Freight</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/Image/service-2.jpg"
                    alt="Ocean Freight"
                  />
                </div>
                <h4 className="mb-3">Ocean Freight</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/Image/service-3.jpg"
                    alt="Road Freight"
                  />
                </div>
                <h4 className="mb-3">Road Freight</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/Image/service-4.jpg"
                    alt="Train Freight"
                  />
                </div>
                <h4 className="mb-3">Train Freight</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/Image/service-5.jpg"
                    alt="Customs Clearance"
                  />
                </div>
                <h4 className="mb-3">Customs Clearance</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    className="img-fluid"
                    src="/Image/service-6.jpg"
                    alt="Warehouse Solutions"
                  />
                </div>
                <h4 className="mb-3">Warehouse Solutions</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Feature Start --> */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 feature-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
              <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
              <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="300">
                <FaGlobe className="text-primary" style={{ fontSize: "3rem", flexShrink: 0 }} />
                <div className="ms-4">
                  <h5>Worldwide Service</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="500">
                <FaShippingFast className="text-primary" style={{ fontSize: "3rem", flexShrink: 0 }} />
                <div className="ms-4">
                  <h5>On Time Delivery</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
              <div className="d-flex mb-0" data-aos="fade-up" data-aos-delay="700">
                <FaHeadphones className="text-primary" style={{ fontSize: "3rem", flexShrink: 0 }} />
                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeInRight"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/Image/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Feature End --> */}

      {/* <!-- Pricing Start --> */}
      {/* <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
            <h1 className="mb-5">Perfect Pricing Plan</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Basic Plan</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>
                    49.00
                    <small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><FaCheck className="text-success me-3" />HTML5 & CSS3</p>
                  <p><FaCheck className="text-success me-3" />Bootstrap v5</p>
                  <p><FaCheck className="text-success me-3" />FontAwesome Icons</p>
                  <p><FaCheck className="text-success me-3" />Responsive Layout</p>
                  <p><FaCheck className="text-success me-3" />Cross-browser Support</p>
                  <a className="btn-slide" href="">
                    <i><FaArrowRight /></i>
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Standard Plan</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>
                    99.00
                    <small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><FaCheck className="text-success me-3" />HTML5 & CSS3</p>
                  <p><FaCheck className="text-success me-3" />Bootstrap v5</p>
                  <p><FaCheck className="text-success me-3" />FontAwesome Icons</p>
                  <p><FaCheck className="text-success me-3" />Responsive Layout</p>
                  <p><FaCheck className="text-success me-3" />Cross-browser Support</p>
                  <a className="btn-slide mt-2" href="">
                    <i><FaArrowRight /></i>
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="700">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Advanced Plan</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>
                    149.00
                    <small className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Month</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><FaCheck className="text-success me-3" />HTML5 & CSS3</p>
                  <p><FaCheck className="text-success me-3" />Bootstrap v5</p>
                  <p><FaCheck className="text-success me-3" />FontAwesome Icons</p>
                  <p><FaCheck className="text-success me-3" />Responsive Layout</p>
                  <p><FaCheck className="text-success me-3" />Cross-browser Support</p>
                  <a className="btn-slide mt-2" href="">
                    <i><FaArrowRight /></i>
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Pricing End --> */}

      {/* <!-- Quote Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
              <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6>
              <h1 className="mb-5">Request A Free Quote!</h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="d-flex align-items-center">
                <FaHeadphones
                  className="bg-primary text-white"
                  style={{ fontSize: "3rem", padding: "0.4rem", flexShrink: 0 }}
                />
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+012 345 6789</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="bg-light text-center p-5 wow fadeIn" data-aos="fade-up" data-aos-delay="300">
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select border-0" style={{ height: "55px" }}>
                        <option defaultValue>Select A Freight</option>
                        <option value="1">Freight 1</option>
                        <option value="2">Freight 2</option>
                        <option value="3">Freight 3</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Special Note"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Quote End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-secondary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Expert Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-1.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                    <a href="" aria-label="Twitter">
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                    <a href="" aria-label="Instagram">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="500">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-2.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                    <a href="" aria-label="Twitter">
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                    <a href="" aria-label="Instagram">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="700">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-3.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                    <a href="" aria-label="Twitter">
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                    <a href="" aria-label="Instagram">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="900">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-4.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                    <a href="" aria-label="Twitter">
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                    <a href="" aria-label="Instagram">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-secondary text-uppercase">Testimonial</h6>
            <h1 className="mb-0">Our Clients Say!</h1>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              // Responsive breakpoints
              320: {  // Small screens
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {  // Tablets
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {  // Larger screens
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`testimonial-item mb-5 p-4 ${activeIndex === index ? 'active-slide' : ''}`}
                  style={{
                    transition: 'all 0.3s ease',
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                    filter: activeIndex === index ? 'card' : 'none',
                    opacity: activeIndex === index ? 1 : 0.5,
                    border: activeIndex === index ? '3px solid white' : 'none', // Highlight active slide
                    borderRadius: '10px',
                  }}
                >
                  <i>
                    <FaQuoteRight className="text-light position-absolute top-0 end-0 mt-n3 me-4" size="1em" />
                  </i>
                  <div className="d-flex align-items-end mb-4">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src={testimonial.img}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="ms-4">
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <p className="m-0">{testimonial.profession}</p>
                    </div>
                  </div>
                  <p className="mb-0">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="text-center">
          <h6 className="text-secondary text-uppercase">Testimonial</h6>
          <h1 className="mb-0">Our Clients Say!</h1>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          style={{ position: 'relative' }}
        >
          {['/Image/testimonial-1.jpg', '/Image/testimonial-2.jpg', '/Image/testimonial-3.jpg', '/Image/testimonial-4.jpg'].map((imgSrc, index) => (
            <SwiperSlide key={index} style={{ filter: index === 0 ? 'none' : 'blur(4px)', transition: 'filter 0.3s' }}>
              <div className="testimonial-item p-4 my-5">
                <i>
                  <FaQuoteRight className="text-light position-absolute top-0 end-0 mt-n3 me-4" size="3em" />
                </i>
                <div className="d-flex align-items-end mb-4">
                  <img className="img-fluid flex-shrink-0" src={imgSrc} style={{ width: "80px", height: "80px" }} />
                  <div className="ms-4">
                    <h5 className="mb-1">Client Name</h5>
                    <p className="m-0">Profession</p>
                  </div>
                </div>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div> */}
      {/* <!-- Testimonial End --> */}
    </main>
  );
}

{
  /* spinner start */
}
{
  /* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */
}
{
  /* spinner end */
}
