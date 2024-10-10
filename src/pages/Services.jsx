import React from 'react'
import { FaArrowRight, FaQuoteRight } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <div class="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
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
                    {" "}
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
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
                    {" "}
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.7s"
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
                    {" "}
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
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
                    {" "}
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
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
                    {" "}
                    <FaArrowRight />
                  </i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.7s"
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
                    {" "}
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

    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Testimonial</h6>
            <h1 className="mb-0">Our Clients Say!</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item p-4 my-5">
              <i> <FaQuoteRight
                className="text-light position-absolute top-0 end-0 mt-n3 me-4"
                size="3em" 
              /></i>
              <div className="d-flex align-items-end mb-4">
                <img
                  className="img-fluid flex-shrink-0"
                  src="/Image/testimonial-1.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item p-4 my-5">
              <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img
                  className="img-fluid flex-shrink-0"
                  src="/Image/testimonial-2.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item p-4 my-5">
              <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img
                  className="img-fluid flex-shrink-0"
                  src="/Image/testimonial-3.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item p-4 my-5">
              <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img
                  className="img-fluid flex-shrink-0"
                  src="/Image/testimonial-4.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Client Name</h5>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
