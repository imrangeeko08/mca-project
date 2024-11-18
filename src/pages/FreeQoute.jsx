import React, { useState } from "react";

import { toast } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
const Qoute = () => {
  const [formData, setFormData] = useState({
    customer: "",
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    emailAddress: "",
    phone: "",
    location: "",
    city: "",
    originCargo: "",
    destinationCargo: "",
    service:"",
    inquiries: "",
    source: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Form Submited   successful!");
      setFormData({
        customer: "",
        firstName: "",
        lastName: "",
        companyName: "",
        jobTitle: "",
        emailAddress: "",
        phone: "",
        location: "",
        city: "",
        originCargo: "",
        destinationCargo: "",
        inquiries: "",
        source: "",
        service:""
      });
    } else {
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-sections">
        <div className="d-flex flex-column w-100">
          <h2 className="text-center text-white">GET IN TOUCH</h2>
          <h2 className="text-center text-white">Instant Logistic Solution.</h2>
        </div>
      </div>
      <div className="contact-section position-relative">
        <div className="container custome-bg text-dark">
          <p className="text-center text-dark fs-4">
            Contact Instant Logistics
          </p>
          <p class="text-center text-dark">For sales inquiry or feedback...</p>
          <form onSubmit={handleSubmit}>
            {/* Customer Radio Buttons */}
            <div className="form-group mb-3 d-flex flex-md-row flex-column gap-3">
              <label>Are you an APL Logistics customer?</label>
              <div className="d-flex">
                <div className="form-check d-flex form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customer"
                    value="yes"
                    onChange={handleChange}
                    checked={formData.customer === "yes"}
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check d-flex form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customer"
                    value="no"
                    onChange={handleChange}
                    checked={formData.customer === "no"}
                  />
                  <label className="form-check-label">No</label>
                </div>
              </div>
            </div>

            {/* Other Form Fields */}
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="jobTitle">Job Title *</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="emailAddress">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="originCargo">Origin Cargo *</label>
                <input
                  type="text"
                  className="form-control"
                  id="originCargo"
                  name="originCargo"
                  value={formData.originCargo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="destinationCargo">Destination Cargo *</label>
                <input
                  type="text"
                  className="form-control"
                  id="destinationCargo"
                  name="destinationCargo"
                  value={formData.destinationCargo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="service">select service *</label>
              <select
                className="form-control"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Ocean Freight">Ocean Freight</option>
                <option value="Road Freight">Road Freight</option>
                <option value="Advertisement">Train Freight</option>
                <option value="Customs Clearance">Customs Clearance</option>
                <option value="Warehouse Solutions">Warehouse Solutions</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inquiries">Your Inquiries (optional)</label>
              <textarea
                className="form-control"
                id="inquiries"
                name="inquiries"
                rows="4"
                value={formData.inquiries}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="source">How did you hear about us? *</label>
              <select
                className="form-control"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Qoute;
