import React, { useEffect, useState } from 'react';
import { createTeam, fetchTeams, placeBounty, setAccount, setRillContract } from '../services';
import { useNavigate } from "react-router-dom";
import getWeb3 from "../services/getWeb3";
import RillContract from "../contracts/Rill.json";
import './Landing.css';

export function Landing() {
  const [storageValue, setStorageValue] = useState(0);
  const [web3, setWeb3] = useState();
  const [accounts, setAccounts] = useState();
  const [contract, setContract] = useState();

  const navigate = useNavigate();

  const connect = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // let web3;

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      // @ts-ignore
      const deployedNetwork = RillContract.networks[networkId];
      const instance = new web3.eth.Contract(
        RillContract.abi,
        deployedNetwork && deployedNetwork.address
        // '0xe95357Ae5667488F671Cca3348B1B5dd5b210009'
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setWeb3(web3);
      setAccounts(accounts);
      setContract(instance);

      setRillContract(instance);
      setAccount(accounts[0]);

      navigate('/experiment');
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  }

  return (
    <main className="landing">
      <a onClick={connect}></a>
    </main>
  );
}
