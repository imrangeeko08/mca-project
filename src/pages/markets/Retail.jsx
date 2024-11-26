import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa";
const Retail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Step 1: Data for stages
  const stagesData = [
    {
      stageNumber: 1,
      imagePath: "/Image/industrial_advantage_1-768x512.jpg",
      altText: "Stage 1",
      heading: "Vendor Management",
      description:
        "To meet market demands and counter disruption, vendors have to produce on time and on spec. We have decades of experience managing vendors in Asia, Latin America and around the world and offer a comprehensive program to bring precision and consistency into your sourcing operations globally.",
      duration: 800,
    },
    {
      stageNumber: 2,
      imagePath: "/Image/industrial_advantage_2-768x513.jpg",
      altText: "Stage 2",
      heading: "Complex Inbound Planning",
      description:
        "APL Logistics is a recognized leader in designing and implementing complex solutions for inbound product planning. If you are looking to deliver your products “shelf ready”, we can work with you to create load rules by color, size, category or any other combination to help get products to the right place at the right time.",
      duration: 1000,
    },
    {
      stageNumber: 3,
      imagePath: "/Image/industrial_advantage_3-768x512.jpg",
      altText: "Stage 3",
      heading: "Distribution and Fulfillment",
      description:
        "In Latin America, we have created innovative and award-winning solutions to distribute retail products across multiple channels. If you really want to push boundaries, our Ship Max℠ program can help you improve both cost and performance for last-mile deliveries.",
      duration: 1200,
    },
    {
      stageNumber: 4,
      imagePath: "/Image/industrial_advantage_4-768x513.jpg",
      altText: "Stage 4",
      heading: "Trade Solutions",
      description:
        "If you are looking at setting up a regional distribution center in Asia, trade compliance is a must. We can help from the beginning of the project through to go-live with proven trade compliance solutions tested in Asias tough retail markets.",
      duration: 1200,
    },
  ];

  const services = [
    "Order management",
    "Vendor management",
    "Consolidation",
    "Global air, sea and land freight management",
    "Multimodal transportation",
    "Deconsolidation",
    "Regional Distribution Centers (DC) and destination DC",
    "Store order fulfillment",
    "Distribution management",
    "End-to-end supply chain visibility",
  ];

  return (
    <div className="Retail">
      {/* Background Image Section */}
      <div className="automative-banner" data-aos="fade-in">
        <div className="banner-text mt-4" data-aos="fade-up">
          <h1 className="text-white fw-normal mt-5">Retail</h1>
          <p className="text-white">
          We will help you find ways to do business better.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <div className="row p-4 border-0 shadow">
          {/* Left Side: Image */}
          <div
            className="col-md-6 rounded overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="/Image/retail_about_image-1024x684.jpg"
              alt="Automotive Supply Chain"
              className="img-f luid rounded-lg"
            />
          </div>

          {/* Right Side: Text */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-light heading text-secondary fs-1">
              Win More Market Share
            </h2>
            <p className="subheading">
              Supply chain solutions that resolve the dynamic demands of retail
              logistics.
            </p>
            <div className="mt-4" data-aos="fade-up">
              <p className="description">
                Whether you operate as a full service department store, upscale
                specialty store, brand name bargain operation or self-service
                discount store, our team of retail experts can help you find
                better ways to do business. Identifying opportunities in your
                retail supply chain that offer improvements through:
              </p>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {services.map((service, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <FaCheck
                      style={{ marginRight: "10px", color: "#00008B" }}
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stages Section */}
        <div className="row row-max-width-720px mt-5">
          <div
            className="column text-center"
            data-aos="fade"
            data-aos-easing="ease-in-shine"
            data-aos-duration="800"
          >
            <div className="advantages-heading separator-top-red separator-top">
              <h2 className="fw-light heading text-secondary fs-1">
              Exclusive
              Value-Added Services
              </h2>
              <p className="subheading">
              Our value-added services are customized to serve the specialized needs of the retail industry

              </p>

              <div className="row mt-5 justify-content-center text-center advantages-stages p-4 border-0 shadow">
                {/* Step 2: Map over the stagesData array */}
                {stagesData.map((stage, index) => (
                  <div
                    className="col-md-4 justify-content-center"
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

export default Retail;
