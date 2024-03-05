const Web3 = require('web3');
const abi = [/* Paste your contract ABI here */];
const contractAddress = '[{"inputs":[{"internalType":"string","name":"essay","type":"string"}],"name":"applicant_essay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"applicant_id","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"lor","type":"string"}],"name":"applicant_lor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"resume","type":"string"}],"name":"applicant_resume","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"sop","type":"string"}],"name":"applicant_sop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"printuser_essay","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"printuser_id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"printuser_lor","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"printuser_resume","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"printuser_sop","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]';

// Initialize Web3
const web3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/inw5pD6QH9yfntT3TJ9_-Ee6l2kxzX50');

// Instantiate contract
const contract = new web3.eth.Contract(abi, contractAddress);

// Example function to interact with the contract
async function setUserId(id) {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.applicant_id(id).send({ from: accounts[0] });
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Example usage
setUserId(123); // Replace 123 with the desired user ID
