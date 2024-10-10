import React from 'react'
import { FaGlobe, FaShare, FaShippingFast } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div class="container-fluid overflow-hidden py-5 px-lg-0">
        <div class="container about py-5 px-lg-0">
            <div class="row g-5 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="Image/about.jpg" style={{objectFit: "cover"}} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="text-secondary text-uppercase mb-3">About Us</h6>
                    <h1 class="mb-5">Quick Transport and Logistics Solutions</h1>
                    <p class="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row g-4 mb-5">
                        <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                            <i class="fa fa-globe fa-3x text-primary mb-3"></i>
                            <h5>Global Coverage</h5>
                            <p class="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                        </div>
                        <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                            <i class="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                            <h5>On Time Delivery</h5>
                            <p class="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                        </div>
                    </div>
                    <a href="" class="btn btn-primary py-3 px-5">Explore More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Fact Start --> */}
    <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
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
                    className="bg-primary p-4 mb-4 wow fadeIn"
                    data-wow-delay="0.3s"
                  >
                    <FaUsers className="text-white mb-3" size={32} />

                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      1234
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div
                    className="bg-secondary p-4 wow fadeIn"
                    data-wow-delay="0.5s"
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
                    className="bg-success p-4 wow fadeIn"
                    data-wow-delay="0.7s"
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


    {/* <!-- Feature Start --> */}
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 feature-text wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="text-secondary text-uppercase mb-3">
                Our Features
              </h6>
              <h1 className="mb-5">
                We Are Trusted Logistics Company Since 1990
              </h1>
              <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                <FaGlobe
                  className="text-primary"
                  style={{ fontSize: "3rem", flexShrink: 0 }}
                />
                <div className="ms-4">
                  <h5>Worldwide Service</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet
                    lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                <FaShippingFast
                  className="text-primary"
                  style={{ fontSize: "3rem", flexShrink: 0 }}
                />

                <div className="ms-4">
                  <h5>On Time Delivery</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet
                    lorem sit clita duo justo magna erat amet
                  </p>
                </div>
              </div>
              <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                <FaHeadphones
                  className="text-primary"
                  style={{ fontSize: "3rem", flexShrink: 0 }}
                />

                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">
                    Diam dolor ipsum sit amet eos erat ipsum lorem sed stet
                    lorem sit clita duo justo magna erat amet
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
                  style={{ objectFit: " cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- Feature End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Expert Team Members</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-1.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />{" "}
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        {" "}
                        <FaFacebookF />{" "}
                      </i>
                    </a>
                    <a href="" aria-label="Tw itter">
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
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-2.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i className="">
                    <FaShare />{" "}
                  </i>
                  <span className="">
                    <a href="" aria-label="Facebook">
                      <i>
                        {" "}
                        <FaFacebookF />{" "}
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
                </div>{" "}
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-3.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />{" "}
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        {" "}
                        <FaFacebookF />{" "}
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
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/team-4.jpg" alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
                <div className="btn-slide mt-1">
                  <i>
                    <FaShare />{" "}
                  </i>
                  <span>
                    <a href="" aria-label="Facebook">
                      <i>
                        {" "}
                        <FaFacebookF />{" "}
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

    </div>
  )
}

export default About
