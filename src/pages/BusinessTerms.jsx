import React from "react";

const BusinessTerms = () => {
  return (
    <div className="business-terms">
      {/* Header Section */}
      <section className="header-section py-5 text-center text-white">
        <div className="container">
          <h1>Business Terms and Conditions</h1>
          <p>Your guide to understanding the terms governing our services and operations.</p>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="terms-section py-5">
        <div className="container">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Instant Logistic ! By accessing our services, you agree to comply with these terms and conditions. 
            These terms outline the rules and regulations for using our website and services. Please read them carefully.
          </p>

          <h2>2. Scope of Services</h2>
          <p>
            Our services include but are not limited to freight transportation, warehousing, supply chain solutions, and consultancy. 
            Specific details of our services are outlined in the agreements signed with our clients.
          </p>

          <h2>3. User Obligations</h2>
          <p>
            As a user of our services, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information required for service execution.</li>
            <li>Ensure timely payments as per the agreed terms.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Refrain from using our services for illegal activities or purposes.</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payments for our services must be made in accordance with the terms specified in the service agreement or invoice. 
            Late payments may incur additional charges as defined in our policy.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            [Your Logistics Company] shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:
          </p>
          <ul>
            <li>Delays or interruptions in service delivery due to circumstances beyond our control.</li>
            <li>Loss or damage of goods caused by third-party carriers or unforeseen events.</li>
            <li>Incorrect or incomplete information provided by the client.</li>
          </ul>

          <h2>6. Confidentiality</h2>
          <p>
            We are committed to protecting the confidentiality of your data. All client information shared with us will be used solely 
            for service execution and will not be disclosed to unauthorized parties unless required by law.
          </p>

          <h2>7. Termination of Agreement</h2>
          <p>
            Either party may terminate the agreement by providing written notice under the following circumstances:
          </p>
          <ul>
            <li>Breaches of the terms outlined in this document.</li>
            <li>Mutual agreement between the parties.</li>
            <li>Completion of the contractual term or project.</li>
          </ul>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. 
            Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
          </p>

          <h2>9. Amendments</h2>
          <p>
            [Your Logistics Company] reserves the right to modify these terms at any time. Updates to the terms will be communicated via our website. 
            Continued use of our services implies acceptance of the updated terms.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For any queries or concerns regarding these terms, please reach out to us:
          </p>
          <ul>
            <li>Email: support@yourlogisticscompany.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 Logistics Lane, City, Country</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section py-4 text-center text-white">
        <div className="container">
          <p>© [Your Logistics Company], {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default BusinessTerms;
