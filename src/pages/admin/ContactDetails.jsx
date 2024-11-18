"use client";
import { Table } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

export default function ContactDetails() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/admin/getContacts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setContacts(data.contacts);
        } else {
          console.error('Failed to fetch contacts');
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigates to the previous page in history
  };

//   const handleStatusChange = async (contactId, newStatus) => {
//     try {
//       const response = await fetch(`/api/admin/updateStatus`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ contactId, newStatus }),
//       });

//       if (response.ok) {
//         setContacts((prevContacts) =>
//           prevContacts.map((contact) =>
//             contact._id === contactId ? { ...contact, status: newStatus } : contact
//           )
//         );
//       } else {
//         console.error('Failed to update status');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

  return (
    <div className="mt-4 table-responsive">
      <button className="btn btn-danger rounded-lg mx-2 px-4" onClick={handleBack}>
        Back
      </button>
      <h2 className="text-center mb-4">Shipment Details</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : contacts.length > 0 ? (
        <div className="table-responsive">
            <Table striped bordered hover responsive >
          <thead className="table-dark text-nowrap">
            <tr>
            <th>#</th>
            {/* <th>Status</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Location</th>
              <th>Service</th>
              <th>originCargo</th>
              <th>DestinationCargo</th>
              <th>Inquiries</th>
            
              <th>Created At</th>
            </tr>
          </thead>
          <tbody className="text-nowrap">
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                 
                <td>{index + 1}</td>
                {/* <td className="text-center justify-content-center">
                  <select
                    className="form-select px-5 text-center justify-content-center"
                    value={contact.status || "onway"}
                    onChange={(e) =>
                      handleStatusChange(contact._id, e.target.value)
                    }
                  >
                    <option className="text-center justify-content-center" value="onway">On the way</option>
                    <option value="delivered">Delivered</option>
                    <option value="pending">Pending</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </td> */}
                <td>{contact.firstName}</td>
                <td>{contact.emailAddress}</td>
                <td>{contact.phone}</td>
                <td>{contact.companyName}</td>
                <td>{contact.location}</td>
                <td>{contact.service}</td>
                <td>{contact.originCargo}</td>
                <td>{contact.destinationCargo}</td>
                <td>{contact.inquiries}</td>
               
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
        
      ) : (
        <p className="text-center">No contacts found.</p>
      )}
    </div>
  );
}
