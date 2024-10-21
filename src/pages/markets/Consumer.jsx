import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Automative = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Step 1: Data for stages
  const stagesData = [
    {
      stageNumber: 1,
      imagePath: "/Image/consumer_advantage_1.jpg",
      altText: "Stage 1",
      heading: "Freight Management",
      description: "Consolidate, deconsolidate, and rush orders as needed.",
      duration: 800
    },
    {
      stageNumber: 2,
      imagePath: "/Image/consumer_advantage_2.jpg",
      altText: "Stage 2",
      heading: "customized packaging",
      description: "Add ticket inserts, strategic bundling, and even palletized point-of-purchase displays.",
      duration: 1000
    },
    {
      stageNumber: 3,
      imagePath: "/Image/consumer_advantage_3.jpg",
      altText: "Stage 3",
      heading: "delivery optimization",
      description: "Ensure on-time arrival through specialized delivery techniques such as direct-store-delivery and Just-In-Time (JIT) replenishment.",
      duration: 1200
    },
    {
      stageNumber: 4,
      imagePath: "/Image/consumer_advantage_4-768x512.jpg",
      altText: "Stage 4",
      heading: "Returns management",
      description: "Inspect and sort inventory for re-stock or other distribution, with customized reporting and management.",
      duration: 1200
    },
    {
      stageNumber: 5,
      imagePath: "/Image/consumer_advantage_5.jpg",
      altText: "Stage 5",
      heading: "Product distribution support",
      description: "We act as your virtual distribution center (DC) network, offering space to accommodate seasonal volume surges.",
      duration: 1200
    },
    {
      stageNumber: 6,
      imagePath: "/Image/consumer_advantage_6.jpg",
      altText: "Stage 6",
      heading: "Transportation services",
      description: "Global sea, land and air freight management and streamlined multimodal transportation keeps you on time and under budget.",
      duration: 1200
    },
    {
      stageNumber: 7,
      imagePath: "/Image/consumer_advantage_7.png",
      altText: "Stage 7",
      heading: "Vendor management",
      description: "Track vendors and goods in one sophisticated, easy-to-use platform.",
      duration: 1200
    }
  ];

  return (
    <div className="consumer">
      {/* Background Image Section */}
      <div className="automative-banner" data-aos="fade-in">
        <div className="banner-text mt-4" data-aos="fade-up">
          <h1 className="text-white mt-5">Consumer</h1>
          <p className="text-white">Your goods are in good hands with us.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <div className="row p-4 border-0 shadow">
          {/* Left Side: Image */}
          <div className="col-md-6 rounded overflow-hidden" data-aos="fade-right">
            <img
              src="/Image/Woman-in-Supermarket-blur-1024x682.png"
              alt="Automotive Supply Chain"
              className="img-fluid rounded-lg"
            />
          </div>

          {/* Right Side: Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-light heading text-secondary fs-1">
              Superior Supply Chain Logistics for Consumer Goods
            </h2>
            <p className="subheading">
              Helping you provide better products through smarter rotation.
            </p>
            <div className="mt-4" data-aos="fade-up">
              <p className="description">
                Supply chain challenges can be especially pressing for the consumer market, where ever-present pressures on price meet huge fluctuations in volume and seasonal distribution trends. Our sophisticated tracking and analytics monitors consumer goods by expiry date, product, lot number, and location, allowing you to increase efficiency and reduce returns through better rotation. We help drive down costs for inventory, warehousing, transportation, and other vital supply chain components.
              </p>
            </div>
          </div>
        </div>

        {/* Stages Section */}
        <div className="row row-max-width-720px mt-5">
          <div className="column text-center" data-aos="fade" data-aos-easing="ease-in-shine" data-aos-duration="800">
            <div className="advantages-heading separator-top-red separator-top">
              <h2 className="fw-light heading text-secondary fs-1">
                Targeted Services for Your Market
              </h2>
              <p className="subheading">
                End-to-end solutions to keep shelves stocked and quality high
              </p>

              <div className="row mt-5 text-center advantages-stages p-4 border-0 shadow">
                {/* Step 2: Map over the stagesData array */}
                {stagesData.map((stage, index) => (
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-duration={stage.duration}
                    key={index}
                  >
                    <div className="stage-item">
                      <h1 className="stage-number">{stage.stageNumber}</h1>
                      <div className="stage-image-container">
                        <img
                          src={stage.imagePath}
                          alt={stage.altText}
                          className="img-fluid rounded-circle stage-image"
                        />
                      </div>
                      <h5 className="subheading">{stage.heading}</h5>
                      <p className="advantage-description">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automative;
