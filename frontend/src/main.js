import { getContract } from './contract.js';
import './components/contract-info.js';

async function loadContractInfo() {
  const contract = await getContract();
  const owner = await contract.owner();

  const contractInfo = document.querySelector('contract-info');
  contractInfo.setAttribute('address', contract.target);
  contractInfo.setAttribute('owner', owner);
}

document.addEventListener("DOMContentLoaded", loadContractInfo);
