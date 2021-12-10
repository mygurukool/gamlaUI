import React from 'react';
import Web3 from 'web3';
var Eth = require('web3-eth');
const useBlockChain = () => {
  const web3 = new Web3(Web3.givenProvider);

  const getAccounts = async () => {
    const accounts = await web3.eth
      .requestAccounts()
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  React.useEffect(() => {
    getAccounts();
  }, []);
};

export default useBlockChain;
