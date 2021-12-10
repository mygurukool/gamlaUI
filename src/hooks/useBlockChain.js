import React from 'react';
import Web3 from 'web3';
var Eth = require('web3-eth');

const PROJECTID = 'b6ee01e1f2cb4f9eb3ed84daf81bd244';
const useBlockChain = () => {
  const web3 = new Web3(`https://rinkeby.infura.io/v3/${PROJECTID}`);

  const getAccounts = async () => {
    // const accounts = await web3.eth.getBalace(
    //   `0x547e590081A9Ec850E6B7B6955115fB1323b2ea1`,
    // );

    const accounts = await web3.eth.getAccounts();
    console.log('web3 get', accounts);
  };
  const getBalace = async () => {
    const accounts = await web3.eth.getBalance(
      `0x547e590081A9Ec850E6B7B6955115fB1323b2ea1`,
    );
    console.log('web3 balance', accounts);
  };

  const createAccount = async () => {
    const accounts = await web3.eth.accounts.create();
    console.log('web3 create', accounts);
    getAccounts();
  };

  React.useEffect(() => {
    getAccounts();
  }, []);

  return {getAccounts, createAccount, getBalace};
};

export default useBlockChain;
