import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/connectors/injected';

const Home = () => {
  const { active, account, activate, deactive } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div>
      <button onClick={connect}>Connect to Wallet</button>
      <p>{account}</p>
    </div>
  );
};

export default Home;
