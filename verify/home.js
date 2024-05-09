import React from 'react';
import { useParams } from 'react-router-dom';

const HomePage = () => {
  const { role } = useParams();

  if (role === 'tenant') {
    return (
      <div>
        <h2>Tenant Home Page</h2>
        <button>Book Ticket for Visitor</button>
        <button>Cancel Ticket</button>
        <button>Check My Deliveries</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Security Guard Home Page</h2>
        <button>Display All Registered Tenants</button>
        <input type="text" placeholder="Enter 4-digit Code" />
        <button>Confirm Visitor</button>
      </div>
    );
  }
};

export default HomePage;

