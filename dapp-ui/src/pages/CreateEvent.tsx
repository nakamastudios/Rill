import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Screens.css';

export function CreateEvent() {
  const navigate = useNavigate();

  return (
    <main className="create-event">
      <a onClick={() => navigate('/events')}></a>
    </main>
  );
}
