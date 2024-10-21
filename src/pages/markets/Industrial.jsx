import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Industrial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Step 1: Data for stages
    const stagesData = [
        {
            stageNumber: 1,
            imagePath: "/Image/industrial_advantage_1-768x512.jpg",
            altText: "Stage 1",
            heading: "Complex handling",
            description: "From point of origin to destination, we give you a single point of contact across multiple channels, so that you can better manage vendors, documentation, and goods.",
            duration: 800
        },
        {
            stageNumber: 2,
            imagePath: "/Image/industrial_advantage_2-768x513.jpg",
            altText: "Stage 2",
            heading: "Intercontinental customs brokerage",
            description: "Complications at international borders can lead to significant delays. Our experts located in international headquarters throughout the world ensure smooth transitions from country to country.",
            duration: 1000
        },
        {
            stageNumber: 3,
            imagePath: "/Image/industrial_advantage_3-768x512.jpg",
            altText: "Stage 3",
            heading: "Load optimization",
            description: "Utilizing cutting-edge information technology systems and targeted expertise, we help you safely and effectively combine orders to optimize container utilization.",
            duration: 1200
        },
        {
            stageNumber: 4,
            imagePath: "/Image/industrial_advantage_4-768x513.jpg",
            altText: "Stage 4",
            heading: "Load optimization",
            description: "Utilizing cutting-edge information technology systems and targeted expertise, we help you safely and effectively combine orders to optimize container utilization.",
            duration: 1200
        },

    ];

    return (
        <div className="Industrial">
            {/* Background Image Section */}
            <div className="automative-banner" data-aos="fade-in">
                <div className="banner-text mt-4" data-aos="fade-up">
                    <h1 className="text-white mt-5">Industrial</h1>
                    <p className="text-white">Specialized solutions for large-scale projects.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mt-5">
                <div className="row p-4 border-0 shadow">
                    {/* Left Side: Image */}
                    <div className="col-md-6 rounded overflow-hidden" data-aos="fade-right">
                        <img
                            src="/Image/Industrial_about_image-1024x683.jpg"
                            alt="Automotive Supply Chain"
                            className="img-fluid rounded-lg"
                        />
                    </div>

                    {/* Right Side: Text */}
                    <div className="col-md-6" data-aos="fade-left">
                        <h2 className="fw-light heading text-secondary fs-1">
                            Competent Management
                            for Complex Industrial
                            Challenges
                        </h2>
                        <p className="subheading">
                            Customized logistical solutions for aerospace, mining, energy, and manufacturing
                            .
                        </p>
                        <div className="mt-4" data-aos="fade-up">
                            <p className="description">
                                From transporting generators to manufacturing turbines, the needs of industrial networks around the world are complex. If you source parts, supplies, or equipment from international manufacturers, APL Logistics is a prime resource for supply management and optimization. We have the access and expertise to handle specialized transportation needs, ensure reliable delivery, and streamline costs. Our experience in large-scale goods and even larger-scale projects applies to aerospace companies, chemical suppliers, manufacturers, mining, and energy industries around the world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stages Section */}
                <div className="row row-max-width-720px mt-5">
                    <div className="column text-center" data-aos="fade" data-aos-easing="ease-in-shine" data-aos-duration="800">
                        <div className="advantages-heading separator-top-red separator-top">
                            <h2 className="fw-light heading text-secondary fs-1">
                                Let Us Do the Heavy Lifting
                            </h2>
                            <p className="subheading">
                                We manage every detail to ensure better safety and reliable results
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

export default Industrial;
