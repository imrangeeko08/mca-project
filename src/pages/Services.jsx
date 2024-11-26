'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaQuoteRight } from 'react-icons/fa'

import { Pagination, Autoplay } from 'swiper/modules';
import AOS from "aos";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const Services = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);



  const testimonials = [
    {
      img: '/Image/testimonial-1.jpg',
      name: 'Emily Davis',
      profession: 'CEO, Global Enterprises',
      text: 'Partnering with your team has been a transformative experience. Your reliable and innovative logistics solutions have streamlined our operations immensely. Thank you for always delivering excellence!'
    },
    {
      img: '/Image/testimonial-2.jpg',
      name: ' John Smith',
      profession: 'Founder, EcoTrade Supplies',
      text: 'We appreciate your unwavering commitment to providing top-notch services. Your expertise and support have made a significant impact on our business.'
    },
    {
      img: '/Image/testimonial-3.jpg',
      name: 'Michael Johnson',
      profession: 'Managing Director, Zenith Manufacturing',
      text: 'Your teams efficiency and dedication have set a benchmark in logistics services. We are grateful for your consistent support and exceptional results.'
    },
    {
      img: '/Image/testimonial-4.jpg',
      name: 'Sophia Brown',
      profession: 'Operations Manager, ClearPath Logistics',
      text: 'The professionalism and reliability of your services have exceeded our expectations. It is been a pleasure collaborating with such a skilled and proactive team.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div class="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link class="text-white" href="#">Home</Link></li>
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
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/service-1.jpg" alt="Air Freight" />
                </div>
                <h4 className="mb-3">Air Freight</h4>
                <p>
                  Fast and reliable air freight solutions for your time-sensitive shipments. We ensure
                  quick transit and seamless customs clearance, so your goods reach their destination
                  safely and on schedule.
                </p>
                <Link className="btn-slide mt-2" href="">
                  <i><FaArrowRight /></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/service-2.jpg" alt="Ocean Freight" />
                </div>
                <h4 className="mb-3">Ocean Freight</h4>
                <p>
                  Comprehensive ocean freight services to handle your global shipping needs. Whether it is
                  full container loads or less-than-container loads, we offer cost-effective and
                  efficient solutions.
                </p>
                <Link className="btn-slide mt-2" href="">
                  <i><FaArrowRight /></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/service-3.jpg" alt="Road Freight" />
                </div>
                <h4 className="mb-3">Road Freight</h4>
                <p>
                  Flexible and dependable road freight services designed to meet your domestic and
                  cross-border transportation needs. Experience safe and on-time deliveries across the
                  region.
                </p>
                <Link className="btn-slide mt-2" href="">
                  <i><FaArrowRight /></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/service-4.jpg" alt="Train Freight" />
                </div>
                <h4 className="mb-3">Train Freight</h4>
                <p>
                  Efficient and eco-friendly rail freight solutions for bulk shipments. We provide
                  cost-effective services that connect key markets while minimizing environmental impact.
                </p>
                <Link className="btn-slide mt-2" href="">
                  <i><FaArrowRight /></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/service-5.jpg" alt="Customs Clearance" />
                </div>
                <h4 className="mb-3">Customs Clearance</h4>
                <p>
                  Navigate the complexities of global trade with our expert customs clearance services.
                  We handle all documentation, ensuring hassle-free entry of your goods across borders.
                </p>
                <Link className="btn-slide mt-2" href="">
                  <i><FaArrowRight /></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="/Image/service-6.jpg" alt="Warehouse Solutions" />
                </div>
                <h4 className="mb-3">Warehouse Solutions</h4>
                <p>
                  Secure and scalable warehousing options tailored to your business needs. Our solutions
                  include inventory management, distribution, and value-added services to optimize your
                  supply chain.
                </p>
                <Link className="btn-slide mt-2" href="">
                  <i><FaArrowRight /></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Why Choose Us Start --> */}
      <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, #0066cc, #00b3b3)" }}>
        <div className="container text-white">
          <div className="text-center wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-white fw-bold shadow p-4 bg-danger text-uppercase mb-3">Why Choose Us</h6>
            <h1 className="mb-5">Making the Impossible, Possible</h1>
          </div>
          <div className="row g-5">
            {/* Capabilities */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 bg-white text-dark rounded shadow custom-box">
                <h5 className="mb-4">Capabilities</h5>
                <p className='text-dark'>
                  We tirelessly troubleshoot to eliminate choke points, prevent stock depletion, streamline unnecessary redundancies, and make delays a thing of the past. Our team is equipped to tackle the most complex logistics challenges with precision and speed.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="300">
              <div className="p-4 bg-white text-dark rounded shadow custom-box">
                <h5 className="mb-4">Mission</h5>
                <p className='text-dark'>
                  Our mission is to design, build, and implement innovative, profitable, and sustainable products and services that help our customers meet consumer and industrial demands globally, irrespective of fulfillment channels.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-4 col-md-6 wow fadeInUp rounded" data-aos="fade-up" data-aos-delay="400">
              <div className="p-4 bg-white text-dark rounded shadow custom-box">
                <h5 className="mb-4">Vision</h5>
                <p className='text-dark'>
                  APL Logistics seeks to be a premier, profitable provider of global supply-chain services to help enable sustainable trade and commerce in key markets and regions. We will accomplish this by investing in our people, our facilities, and technology. We aim to foster a culture that challenges, inquires, and focuses continually on the customer.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href="/Contact" className="btn btn-danger btn-outline-dark border-0 text-white py-3 px-5">Get in Touch</Link>
          </div>
        </div>
      </div>
      {/* <!-- Why Choose Us End --> */}


      {/* <!-- Service End --> */}

      <div className="container-xxl py-5">
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
                      <p className="m-0">{`${testimonial.profession}`}</p>
                    </div>
                  </div>
                  <p className="mb-0">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default Services
