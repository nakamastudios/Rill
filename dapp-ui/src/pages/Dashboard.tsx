import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Screens.css';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="dashboard">
      <a onClick={() => navigate('/events')}></a>
    </main>
  );
}
