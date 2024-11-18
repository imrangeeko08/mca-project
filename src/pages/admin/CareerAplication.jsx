"use client";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";

export default function UserDetails() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch career applications when the component mounts
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/admin/getCareerApplications", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setApplications(data.applications);
        } else {
          console.error("Failed to fetch applications");
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleBack = () => {
    router.back(); // Navigate to the previous page in the history
  };

  return (
    <div className="mt-4">
      <button
        className="btn btn-danger rounded-lg mx-2 px-4"
        onClick={handleBack}
      >
        Back
      </button>
      <h2 className="text-center mb-4">Career Applications</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : applications.length > 0 ? (
        <Table striped bordered hover responsive="sm">
          <thead className="table-dark text-nowrap">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cover Letter</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody className="text-nowrap">
            {applications.map((application, index) => (
              <tr key={application._id}>
                <td>{index + 1}</td>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.phone}</td>
                <td>{application.coverLetter}</td>
                <td>{new Date(application.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center">No applications found.</p>
      )}
    </div>
  );
}
