import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Automative = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1 second animation, animates once
  }, []);
  return (
    <div className="consumer">
      {/* Background Image Section */}
      <div className=" automative-banner" data-aos="fade-in">
        <div className="banner-text mt-4" data-aos="fade-up">
          <h1 className="text-white mt-5">Consumer</h1>
          <p className="text-white">
          Your goods are in good hands with us.

          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-5 ">
        <div className="row p-4 border-0 shadow">
          {/* Left Side: Image */}
          <div
            className="col-md-6 rounded overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="/Image/automotive_about_image-1024x681.jpg"
              alt="Automotive Supply Chain"
              className="img-fluid rounded-lg"
            />
          </div>

          {/* Right Side: Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-light heading text-secondary fs-1">
            Superior Supply
Chain Logistics for
Consumer Goods
            </h2>
            <p className="subheading">
            Helping you provide better products through smarter rotation

            </p>
            <div className="mt-4" data-aos="fade-up">
              <p className="description">
              Supply chain challenges can be especially pressing for the consumer market, where ever-present pressures on price meet huge fluctuations in volume and seasonal distribution trends. Our sophisticated tracking and analytics monitors consumer goods by expiry date, product, lot number, and location, allowing you to increase efficiency and reduce returns through better rotation. We help drive down costs for inventory, warehousing, transportation, and other vital supply chain components.
              </p>
            </div>
          </div>
        </div>

        <div className="row row-max-width-720px mt-5 ">
          <div
            className="column text-center aos-init aos-animate"
            data-aos="fade"
            data-aos-easing="ease-in-shine"
            data-aos-duration="800"
          >
            <div className="advantages-heading separator-top-red separator-top ">
              <h2 className="fw-light heading text-secondary fs-1">
              Targeted Services
              for Your Market
              </h2>

              <p className="subheading">
               
End-to-end solutions to keep shelves stocked and quality high
              </p>
              <div className="row mt-5 text-center advantages-stages  p-4 border-0 shadow">
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="stage-item">
                    <h1 className="stage-number">1</h1>
                    <div className="stage-image-container">
                      <img
                        src="/Image/automotive_advantage_1-768x512.jpg"
                        alt="Stage 1"
                        className="img-fluid rounded-circle stage-image"
                      />
                    </div>
                    <h5 className="subheading">freight management</h5>
                    <p class="advantage-description">Consolidate, deconsolidate, and rush orders <br/>
as needed. </p>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="stage-item">
                    <h1 className="stage-number">2</h1>
                    <div className="stage-image-container">
                      <img
                        src="/Image/automotive_advantage_2-768x512.jpg"
                        alt="Stage 2"
                        className="img-fluid rounded-circle stage-image"
                      />
                    </div>
                    <h5 className="subheading">
                      INTERCONTINENTAL SUPPLY CHAINS
                    </h5>
                    <p>
                      Manage the flow of parts and components across
                      international borders.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="stage-item">
                    <h1 className="stage-number">3</h1>
                    <div className="stage-image-container">
                      <img
                        src="/Image/automotive_advantage_3-768x475.jpg"
                        alt="Stage 3"
                        className="img-fluid rounded-circle stage-image"
                      />
                    </div>
                    <h5 className="subheading">FINISHED VEHICLES</h5>
                    <p>
                      Outbound distribution with unique transportation options
                      perfect for vehicle manufacturers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automative;
