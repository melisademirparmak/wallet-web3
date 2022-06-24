import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/connectors/injected';

const Home = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <button onClick={connect}>
        {active ? 'Connected' : 'Connect a Wallet'}
      </button>
      <p>{account}</p>
      <button onClick={disconnect}>Deactive</button>
    </div>
  );
};

export default Home;
