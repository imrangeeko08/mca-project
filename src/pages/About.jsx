import React, { useEffect } from 'react'
import { FaGlobe, FaShare, FaShippingFast } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / 100;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 12);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div class="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link class="text-white" href="/">Home</Link></li>
              <li class="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- About Start --> */}

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
              <Link href="/" className="btn btn-primary py-3 px-5">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Fact Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" data-aos="fade-up">
              <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
              <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
              <p className="mb-5">
                Instant Logistic has been the leading provider of end-to-end logistics solutions, offering innovative services since 1990. We specialize in managing and optimizing your shipments globally, ensuring efficiency and reliability every step of the way.
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
                    className="bg-primary p-4 mb-4 wow fadeIn"
                    data-wow-delay="0.3s"
                    data-aos="fade-up"
                  >
                    <FaUsers className="text-white mb-3" size={32} />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      <span className="counter" data-count="860">0</span>
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div
                    className="bg-secondary p-4 wow fadeIn"
                    data-wow-delay="0.5s"
                    data-aos="fade-up"
                  >
                    <FaShip className="text-white mb-3" size={32} />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      <span className="counter" data-count="1270">0</span>
                    </h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="bg-success p-4 wow fadeIn"
                    data-wow-delay="0.7s"
                    data-aos="fade-up"
                  >
                    <FaStar className="text-white mb-3" size={32} />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      <span className="counter" data-count="740">0</span>
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

      {/* <!-- Feature Start --> */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 feature-text" data-aos="fade-up" data-aos-delay="100">
              <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
              <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
              <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="300">
                <FaGlobe
                  className="text-primary"
                  style={{ fontSize: "3rem", flexShrink: 0 }}
                />
                <div className="ms-4">
                  <h5>Worldwide Service</h5>
                  <p className="mb-0">
                    At Instant Logistic, we provide a comprehensive global service network that connects key logistics hubs across the world. We ensure timely and efficient handling of goods through strategically located distribution centers, enabling seamless transportation and storage solutions for all types of cargo.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="500">
                <FaShippingFast
                  className="text-primary"
                  style={{ fontSize: "3rem", flexShrink: 0 }}
                />
                <div className="ms-4">
                  <h5>On Time Delivery</h5>
                  <p className="mb-0">
                    We prioritize fast and reliable delivery. Whether by air, sea, or land, our advanced logistics management system ensures on-time delivery, optimized routes, and real-time tracking, offering peace of mind to our customers that their shipments are in safe hands.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-0" data-aos="fade-up" data-aos-delay="700">
                <FaHeadphones
                  className="text-primary"
                  style={{ fontSize: "3rem", flexShrink: 0 }}
                />
                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">
                    Our dedicated support team is available 24/7 to assist you with any logistics-related queries or issues. Whether you need updates on your shipment or require help with custom clearance, our experts are just a call away to provide personalized assistance at any time of day or night.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/Image/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Instant Logistic Feature"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End --> */}



      {/* <!-- Team Start --> */}
      <div className="container-xxl">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Meet Our Expert Team Members</h1>
          </div>
          <div className="row g-2">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-1.jpg" alt="Team Member 1" />
                </div>
                <h5 className="mb-0">John Doe</h5>
                <p>Chief Logistics Officer (CLO)</p>
                <p className="text-muted">
                  John has over 20 years of experience in the logistics industry, overseeing operations and ensuring seamless global supply chain management.
                </p>
                <div className="btn-slide mt-1">
                  <i><FaShare /></i>
                  <span>
                    <Link href="https://www.facebook.com/johndoe" aria-label="Facebook">
                      <i><FaFacebookF /></i>
                    </Link>
                    <Link href="https://twitter.com/johndoe" aria-label="Twitter">
                      <i><FaTwitter /></i>
                    </Link>
                    <Link href="https://www.instagram.com/johndoe" aria-label="Instagram">
                      <i><FaInstagram /></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-2.jpg" alt="Team Member 2" />
                </div>
                <h5 className="mb-0">Jane Smith</h5>
                <p>Head of Operations</p>
                <p className="text-muted">
                  Jane specializes in optimizing supply chains, improving operational efficiency, and managing large-scale logistics projects worldwide.
                </p>
                <div className="btn-slide mt-1">
                  <i><FaShare /></i>
                  <span>
                    <Link href="https://www.facebook.com/janesmith" aria-label="Facebook">
                      <i><FaFacebookF /></i>
                    </Link>
                    <Link href="https://twitter.com/janesmith" aria-label="Twitter">
                      <i><FaTwitter /></i>
                    </Link>
                    <Link href="https://www.instagram.com/janesmith" aria-label="Instagram">
                      <i><FaInstagram /></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-3.jpg" alt="Team Member 3" />
                </div>
                <h5 className="mb-0">Samuel Lee</h5>
                <p>Logistics Strategy Manager</p>
                <p className="text-muted">
                  Samuel leads the team in developing innovative strategies to streamline transportation, warehousing, and delivery services.
                </p>
                <div className="btn-slide mt-1">
                  <i><FaShare /></i>
                  <span>
                    <Link href="https://www.facebook.com/samuellee" aria-label="Facebook">
                      <i><FaFacebookF /></i>
                    </Link>
                    <Link href="https://twitter.com/samuellee" aria-label="Twitter">
                      <i><FaTwitter /></i>
                    </Link>
                    <Link href="https://www.instagram.com/samuellee" aria-label="Instagram">
                      <i><FaInstagram /></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="900">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-4.jpg" alt="Team Member 4" />
                </div>
                <h5 className="mb-0">Olivia Brown</h5>
                <p>Customer Relations Manager</p>
                <p className="text-muted">
                  Olivia ensures exceptional customer service and fosters strong client relationships, providing tailored logistics solutions.
                </p>
                <div className="btn-slide mt-1">
                  <i><FaShare /></i>
                  <span>
                    <Link href="https://www.facebook.com/oliviabrown" aria-label="Facebook">
                      <i><FaFacebookF /></i>
                    </Link>
                    <Link href="https://twitter.com/oliviabrown" aria-label="Twitter">
                      <i><FaTwitter /></i>
                    </Link>
                    <Link href="https://www.instagram.com/oliviabrown" aria-label="Instagram">
                      <i><FaInstagram /></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}


    </div>
  )
}

export default About
