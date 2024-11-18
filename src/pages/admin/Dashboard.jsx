"use client";

import React from "react";
import { useRouter } from "next/router";
import ContactDetails from "./ContactDetails";

const Dashboard = ({ children }) => {
  const router = useRouter();

  // Navigate to different pages
  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="d-flex vh-100">
      {/* Left Sidebar */}
      <div
        className="bg-dark text-white p-3 d-flex flex-column align-items-start"
        style={{ width: "250px" }}
      >
        <h4 className="mb-4">Dashboard</h4>
        <button
          className="btn btn-link text-white text-start w-100 text-nowrap"
          onClick={() => navigateTo("/admin/ContactDetails")}
        >
          Shipment Details
        </button>
        <button
          className="btn btn-link text-white text-start w-100 text-nowrap"
          onClick={() => navigateTo("/admin/UserDetails")}
        >
          User Details
        </button>
        <button
          className="btn btn-link text-white text-start w-100 text-nowrap"
          onClick={() => navigateTo("/admin/CareerAplication")}
        >
          Job Aplication
        </button>
       
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light p-4">
        <h1>Welcome to the Dashboard</h1>
        <p>Select an option from the sidebar to view details.</p>
        <ContactDetails></ContactDetails>
      </div>

     
    </div>
  );
};

export default Dashboard;
