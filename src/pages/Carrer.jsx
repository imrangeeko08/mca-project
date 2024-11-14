import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Carrer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  return (
    <div className="career">
      {/* Background Image Section */}
      <div className="automative-banner" data-aos="fade-in">
        <div className="banner-text mt-5" data-aos="fade-up">
          <h1 className="text-white mt-3">Welcome to APL Logistics Careers</h1>
        </div>
      </div>

      <div className="container mt-5">
        {/* Why Join Us Section */}
        <section className="why-join-us text-center my-5 bg-light p-4">
          <h2 className="display-4">Why Join Us</h2>
          <p className="lead">
            At XYZ Logistics, we are more than just a workplace. We are a family that fosters innovation,
            collaboration, and continuous learning. Join us to be part of a team that is redefining the future of logistics.
          </p>
          <img src="/path/to/why-join-us-image.jpg" alt="Why Join Us" className="img-fluid" />
        </section>

        {/* Good Working Environment Section */}
        <section className="good-environment row my-5">
          <div className="col-md-6">
            <h3 className="display-5">Qualities of a Good Working Environment</h3>
            <ul>
              <li>Open communication and collaboration across all levels</li>
              <li>Support for career growth and personal development</li>
              <li>Work-life balance and flexibility</li>
              <li>Diversity and inclusion as core values</li>
              <li>Employee health and wellness programs</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="/Image/goodwork.jpg" alt="Good Environment" className="img-fluid" />
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="team-culture row my-5 align-items-center">
          <div className="col-md-6 order-md-2">
            <h3 className="display-5">Our Team Culture</h3>
            <p>
              We believe in empowering our employees by promoting a positive, inclusive team culture.
              Everyone has a voice here, and we encourage creativity and leadership from every team member.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img src="/Image/team-culture.jpg" alt="Team Culture" className="img-fluid" />
          </div>
        </section>

        {/* Employee Benefits Section */}
        <section className="employee-benefits row my-5">
          <div className="col-md-6">
            <h3 className="display-5">Employee Benefits</h3>
            <p>
              We offer competitive benefits, including health insurance, retirement plans, generous PTO, and
              educational assistance. Our employees are our most valuable asset, and we ensure they are well-supported.
            </p>
            <ul>
              <li>Comprehensive healthcare coverage</li>
              <li>Paid time off and holidays</li>
              <li>Retirement savings plan</li>
              <li>Professional development and training programs</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="/Image/employee-benifit.png" alt="Employee Benefits" className="img-fluid border" />
          </div>
        </section>

        {/* Employee Testimonials Section */}
        <section className="employee-testimonials my-5">
          <h3 className="text-center my-5">What Our Employees Say</h3>
          <div className="row">
            <div className="col-md-4 text-center">
              <blockquote className="blockquote">
                <p>"Working here has been a transformative experience. The company values and encourages personal growth."</p>
                <footer className="blockquote-footer">Jane Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-4 text-center">
              <blockquote className="blockquote">
                <p>"The team culture here is amazing. Everyone is encouraged to contribute and grow."</p>
                <footer className="blockquote-footer">John Smith</footer>
              </blockquote>
            </div>
            <div className="col-md-4 text-center">
              <blockquote className="blockquote">
                <p>"XYZ Logistics offers endless opportunities for development and learning."</p>
                <footer className="blockquote-footer">Emily Johnson</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Internship Program Section */}
        <section className="internship-program row my-5">
          <div className="col-md-6">
            <h3 className="display-5">Our Internship Program</h3>
            <p>
              We offer hands-on experience for students and graduates looking to start their careers in logistics.
              Our internship program provides training, mentorship, and a clear pathway to full-time opportunities.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/path/to/internship-image.jpg" alt="Internship Program" className="img-fluid" />
          </div>
        </section>

        {/* Ready to Join Us Section */}
        <section className="ready-to-join p-3 text-center my-5 bg-light">
          <h3 className="display-5 ">Ready to Start with Us?</h3>
          <p>Click the button below to explore our open positions or submit your job application.</p>
          <Button className="btn btn-primary btn-lg" onClick={handleModal}>
            Apply Now
          </Button>
        </section>

        {/* Job Application Modal */}
        <Modal show={showModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Job Application Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Resume Upload Field */}
              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <input type="file" className="form-control-file" id="resume" required />
              </div>

              {/* Cover Letter Field */}
              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  className="form-control"
                  id="coverLetter"
                  rows="3"
                  placeholder="Why do you want to work with us?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </form>
          </Modal.Body>
        </Modal>

        {/* FAQ Section */}
        <section className="faq-section my-5">
          <h3 className="text-center">Frequently Asked Questions</h3>
          <div className="row">
            <div className="col-md-6">
              <h5>How can I apply for a job?</h5>
              <p>
                You can apply by clicking on the "Apply Now" button above, which will guide you through
                the application process.
              </p>
            </div>
            <div className="col-md-6">
              <h5>What are the benefits of working with XYZ Logistics?</h5>
              <p>
                We offer competitive salaries, excellent benefits, and a dynamic working environment
                that supports your growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Carrer;
