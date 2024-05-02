import Web3 from 'web3';
import contractABI from './contractABI.json'; // Import the ABI of your contract

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Use the given provider (e.g., MetaMask) or a local provider

const contractAddress = '0x123abc...'; // Replace with the address of your deployed contract
const contract = new web3.eth.Contract(contractABI, contractAddress);


type amountOfTokens = number;
type walletAddress = string;



export const burnETHTokens = async (amount: amountOfTokens, address: walletAddress) => {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.burn(address, amount).send({ from: accounts[0] });
        console.log('Tokens burned successfully.');
    } catch (error) {
        console.error('Error burning tokens:', error);
    }
};

export const mintETHTokens = async (amount: number, address: string) => {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.mint(address, amount).send({ from: accounts[0] });
        console.log('Tokens minted successfully.');
    } catch (error) {
        console.error('Error minting tokens:', error);
    }
};
