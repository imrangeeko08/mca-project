// pages/UserDetails.js
"use client";

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/getUsers");
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  const handleBack = () => {
    router.back(); // Navigates to the previous page in history
  };
  return (
    <div className="container mt-4">
    <button 
      className="btn btn-danger rounded-lg mx-2 px-4" 
      onClick={handleBack}
    >
      Back
    </button>
      <h2 className="text-center mb-4">User Details</h2>
      <Table striped bordered hover responsive>
        <thead className="text-nowrap">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserDetails;
