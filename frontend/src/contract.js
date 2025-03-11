import { ethers } from "ethers";
import ABI from "./data/abi/contracts/ProfitFlip.sol/ProfitFlip.json";

const contractAddress = "0xafF9Ea1f907083706818d9411e1903351766C4d2";

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask not detected");
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  return contract;
}

export async function getCurrentRoundInfo() {
    const contract = await getContract();
    const currentEpoch = await contract.currentEpoch();
    const roundInfo = await contract.rounds(currentEpoch);
    return {
      epoch: currentEpoch.epoch,
      startTimestamp: currentEpoch.startTimestamp,
      lockTimestamp: currentEpoch.lockTimestamp,
      closeTimestamp: currentEpoch.closeTimestamp,
      lockPrice: currentEpoch.lockPrice,
      closePrice: currentEpoch.closePrice,
      totalAmount: currentEpoch.totalAmount
    };
  }
  
