
import { useState, useEffect } from "react";

import { ethers } from "ethers";
import abi from '../utils/CommunityFundFactory.json';
import fundabi from '../utils/CommunityFund.json';

import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [allFunds, setAllFunds] = useState([]);

  const contractAddress = "0x5E6249be9d836b168a67A98F8d3F2854cb0387E2";
  const contractABI = abi.abi;
  const fundABI = fundabi.abi;

  const createContract = async (name, requiredNbOfParticipants, recurringAmount, startDate, duration) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer   = provider.getSigner();

    const communityFundFactory = new ethers.Contract(contractAddress, contractABI, signer);
    const createFundTxn = communityFundFactory.createCommunityFund(
      //name, requiredNbOfParticipants, recurringAmount, startDate, duration
      "Unicorn Ironman", 10, 1000, 1639100000, 10
    );

    await createFundTxn.wait();
    console.log("Mined -- ", createFundTxn.hash);
  }

  const getFundData = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const communityFund = new ethers.Contract(address, fundABI, provider);

    const name = await communityFund.name();

    const requiredNbOfParticipants = await communityFund.requiredNbOfParticipants();
    const recurringAmount          = await communityFund.recurringAmount();
    const startDate                = await communityFund.startDate();
    const duration                 = await communityFund.duration();

    return { name, requiredNbOfParticipants, recurringAmount, startDate, duration }
  }

  const getContracts = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer   = provider.getSigner();

    const communityFundFactory = new ethers.Contract(contractAddress, contractABI, provider);

    const contracts = await communityFundFactory.getCommunityFunds()

    //const fundData = await getFundData;
    const contractsDetails = contracts.map(await getFundData);
    let contractsData = [];
    // const contractsData    = contractsDetails.map(element => { element.then(result => {
    //   result
    // }) })
    console.log(contracts);
    console.log(await contractsDetails);
    setAllFunds([])
    await contractsDetails.forEach(element => { element.then(result => {
      console.log(result);
      contractsData.push(result);
      setAllFunds(oldFunds => [...oldFunds, result]);
    }) });
    console.log("--> ", await contractsData);
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    getContracts();
  }, [])

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div>
      <Button variant="contained" disabled={!!currentAccount} onClick={connectWallet}>
        { currentAccount ? 'Connected \u2713' : 'Connect Wallet'}
      </Button>&nbsp;

      <Button variant="contained" disabled={!currentAccount} onClick={createContract}>
        Create Contract
      </Button>
      <br/><br/>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fund (name)</TableCell>
              <TableCell align="right">Number of Participants</TableCell>
              <TableCell align="right">Recurring Amount</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allFunds.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.requiredNbOfParticipants.toString()}</TableCell>
                <TableCell align="right">{row.recurringAmount.toString()}</TableCell>
                <TableCell align="right">{row.startDate.toString()}</TableCell>
                <TableCell align="right">{row.duration.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <style jsx global>{`body {
        background: antiquewhite }
      `}</style>
    </div>
  )
}

