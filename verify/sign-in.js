import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SignInPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', location: '', estate: '', additionalInfo: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle sign-in and verification
    navigate(`/${role}/home`);
  };

  return (
    <div>
      <h2>{`Sign-In (${role === 'tenant' ? 'Tenant' : 'Security Guard'})`}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="estate"
          placeholder="Estate"
          value={formData.estate}
          onChange={handleChange}
          required
        />
        {role === 'tenant' && (
          <>
            <input
              type="text"
              name="building"
              placeholder="Building"
              value={formData.building}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="floor"
              placeholder="Floor"
              value={formData.floor}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="houseNumber"
              placeholder="House Number"
              value={formData.houseNumber}
              onChange={handleChange}
              required
            />
          </>
        )}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;

