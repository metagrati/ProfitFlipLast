import { getContract } from './contract.js';
import './components/contract-info.js';

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
  roundInfo.setAttribute('epoch', epoch);
  roundInfo.setAttribute('start', new Date(round.startTimestamp * 1000).toLocaleString());
  roundInfo.setAttribute('lock', new Date(round.lockTimestamp * 1000).toLocaleString());
  roundInfo.setAttribute('close', new Date(round.closeTimestamp * 1000).toLocaleString());
  roundInfo.setAttribute('lock-price', round.lockPrice.toString());
  roundInfo.setAttribute('close-price', round.closePrice.toString());
  roundInfo.setAttribute('total-amount', ethers.formatEther(round.totalAmount));
}

async function main() {
  const contract = await getContract();
  await loadContractInfo();
  await loadRoundInfo();
}

document.addEventListener("DOMContentLoaded", main);
