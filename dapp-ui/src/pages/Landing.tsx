import React, { useEffect, useState } from 'react';
import { createTeam, fetchTeams, initialize, placeBounty, setAccount, setRillContract } from '../services';
import { useNavigate } from "react-router-dom";
import getWeb3 from "../services/getWeb3";
import RillContract from "../contracts/Rill.json";
import './Screens.css';

export function Landing() {
  const navigate = useNavigate();

  const connect = async () => {
    const account = await initialize();

    account && navigate('/dashboard');
  }

  return (
    <main className="landing">
      <a onClick={connect}></a>
    </main>
  );
}
