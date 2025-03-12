import { getContract } from './contract.js';
import { ethers } from 'ethers';
import './components/round-info.js';
import './components/contract-info.js';

let contract;

async function loadContractInfo() {
  const owner = await contract.owner();

  const contractInfo = document.querySelector('contract-info');
  contractInfo.setAttribute('address', contract.target);
  contractInfo.setAttribute('owner', owner);
}

async function loadRoundInfo() {
  const epoch = await contract.currentEpoch();
  const round = await contract.rounds(epoch);
  const roundInfo = document.querySelector('round-info');

    // If no round is active
    if (epoch == 0) {
      roundInfo.setAttribute('epoch', 'No active round');
      roundInfo.setAttribute('start', 'N/A');
      roundInfo.setAttribute('lock', 'N/A');
      roundInfo.setAttribute('close', 'N/A');
      roundInfo.setAttribute('lock-price', 'N/A');
      roundInfo.setAttribute('close-price', 'N/A');
      roundInfo.setAttribute('total-amount', '0');
      return;
    }

  roundInfo.setAttribute('epoch', epoch.toString());
  roundInfo.setAttribute('start', new Date(Number(round.startTimestamp) * 1000).toLocaleString());
  roundInfo.setAttribute('lock', new Date(Number(round.lockTimestamp )* 1000).toLocaleString());
  roundInfo.setAttribute('close', new Date(Number(round.closeTimestamp) * 1000).toLocaleString());
  roundInfo.setAttribute('lock-price', round.lockPrice.toString());
  roundInfo.setAttribute('close-price', round.closePrice.toString());
  roundInfo.setAttribute('total-amount', ethers.formatEther(round.totalAmount));
}

async function main() {
  contract = await getContract();
  await loadContractInfo();
  await loadRoundInfo();
}

document.addEventListener("DOMContentLoaded", main);
