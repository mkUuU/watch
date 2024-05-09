import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome! Are you a tenant or a security guard?</h1>
      <button onClick={() => navigate('/signin/tenant')}>I'm a Tenant</button>
      <button onClick={() => navigate('/signin/guard')}>I'm a Security Guard</button>
    </div>
  );
};

export default LandingPage;

