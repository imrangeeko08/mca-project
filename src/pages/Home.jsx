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


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaQuoteRight } from 'react-icons/fa';
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const handleFreeQuoteClick = () => {
    // Check if the user is logged in by checking localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Modify this key according to your app's login status.

    if (isLoggedIn) {
      // Redirect to the Free Quote page if logged in
      router.push('/FreeQoute');
    } else {
      // Show a popup if not logged in
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };


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
                      <Link
                        href=""
                        className="btn btn-primary py-2 px-3 py-md-3 px-md-5 me-3 animated"
                        data-aos="fade-left"
                        data-aos-delay="800"
                      >
                        Read More
                      </Link>
                      <Link
                        href="#"
                        className="btn btn-secondary py-2 px-3 py-md-3 px-md-5 animated"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        onClick={handleFreeQuoteClick}
                      >
                        Free Quote
                      </Link>

                      {showPopup && (
                        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login Required</h5>
                                <button type="button" className="btn-close" onClick={closePopup}></button>
                              </div>
                              <div className="modal-body">
                                You need to log in to access the Free Quote page.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closePopup}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => router.push('/Login')}>Login</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
                      <Link
                        href=""
                        className="btn btn-primary py-2 px-3 py-md-3 px-md-5 me-3 animated"
                        data-aos="fade-left"
                        data-aos-delay="800"
                      >
                        Read More
                      </Link>
                      <Link
                        href="/FreeQoute"
                        className="btn btn-secondary py-2 px-3 py-md-3 px-md-5 animated"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        onClick={handleFreeQuoteClick}

                      >
                        Free Quote
                      </Link>
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
              <Link href="" className="btn btn-primary py-3 px-5">
                Explore More
              </Link>
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
                <Link className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </Link>
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
                <Link className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </Link>
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
                <Link className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </Link>
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
                <Link className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </Link>
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
                <Link className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </Link>
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
                <Link className="btn-slide mt-2" href="">
                  <i>
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </Link>
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

      {/* <!-- Testimonial End --> */}

      {/* <div className="container-xxl py-5">
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
      </div> */}

      {/* <!-- Testimonial End --> */}
    </main>
  );
}



