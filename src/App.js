import { ThirdwebProvider } from "@thirdweb-dev/react";
import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { defineChain } from "thirdweb/chains";

import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProjectComponent from './component/CreateProjectComponent';
import ContributeComponent from './component/ContributeComponent';
import ProjectsListComponent from './component/ProjectsListComponent';
import ProjectDetailsComponent from './component/ProjectDetailsComponent';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomePage from "./component/Homepage";

function App() {
  const [contractInstance, setContractInstance] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const client = createThirdwebClient({
      clientId: "c59926a42e58218b67e14e915ed3a2ae" 
    });

    const chain = defineChain(44787);

    const contract = getContract({
      client,
      chain,
      address: "0xB4b5f5f46A27bf5A9bc2618c8946D4b73EC88884" 
    });

    setContractInstance(contract);
    setIsLoading(false); // Set loading to false after contract is fetched
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <ThirdwebProvider desiredChainId={44787}>
    
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={isLoading ? (
              <div>Loading...</div> 
            ) : (
              <HomePage contract={contractInstance} /> 
            )} 
          />
          <Route 
            path="/create" 
            element={isLoading ? (
              <div>Loading...</div> 
            ) : (
              <CreateProjectComponent contract={contractInstance} /> 
            )} 
          />
          <Route 
            path="/contribute" 
            element={isLoading ? (
              <div>Loading...</div> 
            ) : (
              <ContributeComponent contract={contractInstance} /> 
            )} 
          />
          <Route 
            path="/projects" 
            element={isLoading ? (
              <div>Loading...</div> 
            ) : (
              <ProjectsListComponent contract={contractInstance} /> 
            )} 
          />
          <Route 
            path="/projects/:projectId" 
            element={isLoading ? (
              <div>Loading...</div> 
            ) : (
              <ProjectDetailsComponent contract={contractInstance} /> 
            )} 
          />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
    </QueryClientProvider>

  );
}

export default App;