import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      // style={{ marginTop: "6rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2">
                <FaMapMarkerAlt className="me-3" /> 123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FaPhoneAlt className="me-3" /> +012 345 67890
              </p>
              <p className="mb-2">
                <FaEnvelope className="me-3" /> info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <FaTwitter />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaFacebookF />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaYoutube />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <a className="btn btn-link" href="">
                Air Freight
              </a>
              <a className="btn btn-link" href="">
                Sea Freight
              </a>
              <a className="btn btn-link" href="">
                Road Freight
              </a>
              <a className="btn btn-link" href="">
                Logistic Solutions
              </a>
              <a className="btn btn-link" href="">
                Industry solutions
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
                <br />
                Distributed By{" "}
                <a
                  className="border-bottom"
                  href="https://themewagon.com"
                  target="_blank"
                >
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
};

export default Footer;
