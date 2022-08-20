import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { placeBounty } from '../services';
import './Screens.css';

export function Event() {
  const navigate = useNavigate();

  async function _placeBounty() {
    console.log(await placeBounty());
  }

  return (
    <main className="event">
      <a onClick={_placeBounty}></a>
    </main>
  );
}
