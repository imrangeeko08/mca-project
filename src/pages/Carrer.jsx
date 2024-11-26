import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Carrer = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Application submitted successfully!');
        toast.success(data.message)
        setFormData({
          name: '',
          email: '',
          phone: '',
          coverLetter: '',
        });
      } else {
        setStatus(data.message || 'Failed to submit the application');
        toast.error(data.message)
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setStatus('Error submitting the application');
    }
  };



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
          <img src="/Image/why-join-us.jpg" alt="Why Join Us"  className="img-fluid w-100"  />
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
          <div className="row justify-content-around">
            <div className="col-md-3 text-center  rounded px-3 py-3 shadow ">
              <blockquote className="blockquote  ">
                <p>Working here has been a transformative experience. The company values and encourages personal growth.</p>
                <footer className="blockquote-footer">Jane Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-3 text-center rounded px-3 py-3 shadow">
              <blockquote className="blockquote  ">
                <p>The team culture here is amazing. Everyone is encouraged to contribute and grow.</p>
                <footer className="blockquote-footer">John Smith</footer>
              </blockquote>
            </div>
            <div className="col-md-3 text-center  rounded px-3 py-3 shadow">
              <blockquote className="blockquote">
                <p>XYZ Logistics offers endless opportunities for development and learning.</p>
                <footer className="blockquote-footer">Emily Johnson</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Internship Program Section */}
        <section className="internship-program row my-5 align-items-center">
          <div className="col-md-6">
            <h3 className="display-5">Our Internship Program</h3>
            <p>
              We offer hands-on experience for students and graduates looking to start their careers in logistics.
              Our internship program provides training, mentorship, and a clear pathway to full-time opportunities.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/Image/internship.jpeg" alt="Internship Program" className="img-fluid" />
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  className="form-control"
                  id="coverLetter"
                  name="coverLetter"
                  rows="3"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Why do you want to work with us?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </form>
            {status && <p>{status}</p>}
          </Modal.Body>
        </Modal>

        {/* FAQ Section */}
        <section className="faq-section my-5">
  <h3 className="text-center mb-4">Frequently Asked Questions</h3>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="accordion" id="faqAccordion">
        
        {/* Question 1 */}
        <div className="accordion-item border-bottom">
          <h5 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              How can I apply for a job?
            </button>
          </h5>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can apply by clicking on the Apply Now button above, which will guide you through the application process.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item border-bottom">
          <h5 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What are the benefits of working with Instant Logistics?
            </button>
          </h5>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              We offer competitive salaries, excellent benefits, and a dynamic working environment that supports your growth.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item border-bottom">
          <h5 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Are there opportunities for career advancement?
            </button>
          </h5>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we believe in promoting from within and offer regular training programs to help our team members grow their skills and advance in their careers.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item border-bottom">
          <h5 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What is the company policy on work-life balance?
            </button>
          </h5>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Instant Logistics values work-life balance and offers flexible work schedules where possible. We believe that a balanced life is key to job satisfaction and productivity.
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="accordion-item border-bottom">
          <h5 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What are the training programs available for new employees?
            </button>
          </h5>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              New employees receive an onboarding training to familiarize them with our systems and processes. We also offer specialized training to enhance job-specific skills and knowledge.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default Carrer;
