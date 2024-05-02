import React, { useCallback, useEffect, useState } from 'react';
import Block from './Block';
import { ethers } from 'ethers';


declare global {
  interface Window {
    keplr?: any;
    cosmos: any
  }
}

const App: React.FC = () => {
  const [USDCWalletAccount, setUSDCWalletAccount] = useState<string>();
  const [ETHWalletAccount, setETHWalletAccount] = useState<string>();
  const [USDCBalance, setUSDCBalance] = useState<number>(0);
  const [ETHBalance, setETHBalance] = useState<number>(0);

  const connect = useCallback(async () => {
    try {
      const accounts : any = await window?.ethereum?.request({method: "eth_requestAccounts"})
      console.log(accounts);
      if(accounts){
        setETHWalletAccount(accounts[0]);
      }
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  }, [setETHWalletAccount]);


  useEffect(() => {
    if(ETHWalletAccount){
      getETHBalance(ETHWalletAccount)
    }
  }, [ETHWalletAccount]);

  useEffect(() => {
    if(USDCWalletAccount){
      getUSDCBalance(USDCWalletAccount);
    }
  }, [USDCWalletAccount])

  const getETHBalance = async (address : string) => {
    try {
      console.log(address);
      const balance: any = await window?.ethereum?.request({ method: 'eth_getBalance', params: [address, 'latest']})
      console.log(balance);
      if(balance){
        setETHBalance(Number(ethers.formatEther(balance)))
      }
    }catch(e){
      
    }
  }

  const connectKeplrWallet = useCallback(async () => {
    if (window.keplr) {
      try {
        await window.keplr.enable('noble-1');
        const offlineSigner = await window.keplr.getOfflineSigner('noble-1');
        const accounts = await offlineSigner.getAccounts();

        setUSDCWalletAccount(accounts[0].address)
        console.log("Keplr wallet connected!");
      } catch (error) {
        console.error("Error connecting to Keplr wallet:", error);
      }
    } else {
      console.error("Keplr extension not found");
    }
  }, [])

  const getUSDCBalance = useCallback(async (address : string) => {
    try {
      console.log(window?.keplr);
      const balance: any = await window?.keplr.requestMethod('eth_getBalance');
      console.log(balance);
      if(balance){
        setETHBalance(Number(ethers.formatEther(balance)))
      }
    }catch(e){
      console.log(e)
    }
  }, []);



  return (
    <>
      {USDCWalletAccount && <button onClick={() => { getUSDCBalance(USDCWalletAccount)}}/>}
      <h1 className="text-black text-2xl font-bold mb-4 text-center">Bridge USDC from Noble to Etherium</h1>
      <div className="flex gap-[120px] justify-center">
        <Block onClickConnect={() => connectKeplrWallet()} onClickDisconnect={() => setUSDCWalletAccount(undefined) }title="Noble Test Chain" subtitle="1. Burn USDC on Noble" currency="USDC" balance={USDCBalance} walletName="Kelpr" isConnectedToWallet={USDCWalletAccount} actionText="Burn" />
        <Block onClickConnect={() => connect()} onClickDisconnect={() => setETHWalletAccount(undefined) } title="Sepolia Test Chain" subtitle="1. Mint USDC on ETH" currency="ETH" balance={ETHBalance} walletName="Metamask" isConnectedToWallet={ETHWalletAccount} actionText="Mint"/>
      </div>
      </>
  );
};

export default App;
