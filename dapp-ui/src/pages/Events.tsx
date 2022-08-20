import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Screens.css';

export function Events() {
  const navigate = useNavigate();

  return (
    <main className="events">
      <a onClick={() => navigate('/events/create')}></a>
      <a onClick={() => navigate('/events/1')}></a>
    </main>
  );
}
