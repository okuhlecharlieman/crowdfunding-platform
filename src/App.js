import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState, useEffect } from "react"; // Import useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProjectComponent from './component/CreateProjectComponent';
import ContributeComponent from './component/ContributeComponent';
import ProjectsListComponent from './component/ProjectsListComponent';
import ProjectDetailsComponent from './component/ProjectDetailsComponent';
import HomePage from "./component/Homepage";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// 1. Initialize Thirdweb SDK with your chain ID
const sdk = new ThirdwebSDK("44787"); // Replace with your chain ID (e.g., 44787 for Alfajores)

// 2. Get the contract instance
const contract = sdk.getContract("0xB4b5f5f46A27bf5A9bc2618c8946D4b73EC88884"); // Replace with your contract address

// 3. Access the ABI
console.log(contract.abi);

function App() {
  const [contractInstance, setContractInstance] = useState(null);

  useEffect(() => {
    // Connect to the contract using Thirdweb SDK
    setContractInstance(contract);
  }, []);


  return (
    <ThirdwebProvider desiredChainId={44787}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage contract={contractInstance} />} /> 
          <Route path="/create" element={<CreateProjectComponent contract={contractInstance} />} /> 
          <Route path="/contribute" element={<ContributeComponent contract={contractInstance} />} /> 
          <Route path="/projects" element={<ProjectsListComponent contract={contractInstance} />} /> 
          <Route path="/projects/:projectId" element={<ProjectDetailsComponent contract={contractInstance} />} /> 
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  );
}

export default App;