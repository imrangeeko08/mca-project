import Link from "next/link";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = ({isUserLoggedIn}) => {
  const [email, setEmail] = useState(''); 
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
              <a className="btn btn-link" href="/About">
                About Us
              </a>
              <a className="btn btn-link" href="/Contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="/Services">
                Our Services
              </a>
              <a className="btn btn-link" href="/BusinessTerms">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="/CodeOfCunduct">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Enter Email for Signup.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  type="email"
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)} // Update the email state as user types
                  required
                />
                <Link
                  href={`/Signup?email=${encodeURIComponent(email)}`} // Pass the email from state
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2  me-2"
                >
                  SignUp
                </Link>
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
                  Instant Logistic
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a
                  className="border-bottom"
                  href="https://my-portfolio-nine-alpha-39.vercel.app/"
                >
                  Imran Khan
                </a>
                <br />
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
