import React, { createContext, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import Web3Modal from "web3modal";
import { chainId, chainHex, chainData, TokenContract } from '../constants';

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  providerOptions: {

  } // required
});

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

// Initiate Context
const ContractContext = createContext();
// Provide Context
export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const [contractOwner, setOwner] = useState(null);
  const { activate, active, library } = useWeb3React()

  useEffect(() => {
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleNetworkChanged);
    };
  }, []);

  useEffect(() => {
    if (active) {
      setupNetwork();
    }
  }, [active]);

  const handleAccountsChanged = async (accounts) => {
    console.log("Handling 'accountsChanged' event with payload", accounts)
    if (accounts.length > 0) {
      await activate(injected);
    } else {
      setContract(null);
      setOwner(null);
    }
  }

  const handleNetworkChanged = async (networkId) => {
    console.log("Handling 'chainChanged' event with payload", networkId)
    if (networkId != chainId) {
      requestChain();
    } else {
      await activate(injected)
    }
  }

  const setupNetwork = async () => {
    console.log('setupNetwork -> start')
    try {
      const networkId = await library.eth.net.getId();
      const deployedNetwork = TokenContract.networks[networkId];
      const instance = new library.eth.Contract(
        TokenContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      const getOwner = await instance.methods.getOwner().call();
      const getGameAddress = await instance.methods.getGameAddress().call();
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleNetworkChanged);
      setContract(instance);
      setOwner(getOwner);
      console.log('setupNetwork data', networkId, instance, getOwner, getGameAddress);
    } catch (err) {
      console.log('setupNetwork', err);
    }
  };

  const requestChain = () => window.ethereum.request({ method: 'wallet_addEthereumChain', params: [chainData] });;
  const connectWeb3 = async () => {
    try {
      const provider = await web3Modal.connect();
      if (provider.chainId !== chainHex) {
        requestChain();
      } else {
        await activate(injected);
      }
    } catch (error) {
      console.log('open connect error!', error);
    }
  };
  return (
    <ContractContext.Provider value={{ contract, setContract, contractOwner, setOwner, connectWeb3 }}>
      {children}
    </ContractContext.Provider>
  )
}

export default ContractContext;