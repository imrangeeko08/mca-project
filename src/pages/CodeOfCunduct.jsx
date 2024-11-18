import Link from 'next/link'
import React from 'react'

const CodeOfCunduct = () => {
  return (
    <div className="code-of-conduct">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container py-5">
          <h1 className="animate-title">Code of Conduct</h1>
          <p className="animate-description">
            Building trust and ensuring ethical standards for a better tomorrow.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Code of Conduct</h2>
          <p>
            At APL Logistic, we pride ourselves on maintaining the highest ethical standards in every facet of our operations. 
            Our Code of Conduct serves as the foundation for our business practices, ensuring fairness, transparency, and respect for all.
          </p>
          <p>
            We are committed to fostering a workplace culture that values diversity, integrity, and accountability. This code outlines our 
            responsibilities and expectations for employees, partners, and stakeholders.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section py-5 text-white">
        <div className="container">
          <h2 className="text-center mb-4 text-white">Core Values</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="value-box animate-box">
                <h4>Integrity</h4>
                <p>
                  Acting with honesty and transparency in all our dealings with clients, employees, and partners.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-box animate-box">
                <h4>Respect</h4>
                <p>
                  Treating everyone with dignity and ensuring an inclusive environment for all.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-box animate-box">
                <h4>Excellence</h4>
                <p>
                  Striving for the highest standards in our work, service delivery, and professional conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Standards Section */}
      <section className="ethical-standards-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Ethical Standards</h2>
          <p>
            We believe that ethical practices are fundamental to maintaining trust and credibility. Our ethical standards guide our actions 
            and decision-making, ensuring that we operate responsibly and sustainably.
          </p>
          <ul>
            <li>Adherence to legal and regulatory requirements in all regions we operate.</li>
            <li>Commitment to providing safe and fair working conditions for employees.</li>
            <li>Zero tolerance for discrimination, harassment, or unethical behavior.</li>
            <li>Environmental responsibility and sustainable business practices.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 text-center text-white">
        <div className="container">
          <h2>Join Us in Building a Culture of Trust</h2>
          <p>
            By upholding our Code of Conduct, we can collectively create a positive and impactful environment that benefits everyone.
          </p>
         <Link href="/About"><button className="btn btn-light animate-btn">Learn More</button></Link> 
        </div>
      </section>
    </div>
  )
}

export default CodeOfCunduct
