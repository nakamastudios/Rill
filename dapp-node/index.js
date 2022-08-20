require("dotenv").config();

const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const RillContract = require('../dapp-ui/src/contracts/Rill.json');
const address = '0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E';
const privateKey = process.env.PRIVATE_KEY;

const init = async () => {
    const provider = new Provider(privateKey, 'https://matic-mumbai.chainstacklabs.com');
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const rillContract = new web3.eth.Contract(
        RillContract.abi,
        RillContract.networks[networkId].address
    );
    
    web3.eth.getBlockNumber().then((result) => {
        console.log("Latest Polygon Block is ", result);
    });

    console.log(await rillContract.methods.teamId().call());
    console.log(`Old data value: ${await rillContract.methods.teamId().call()}`);
    const receipt = await rillContract.methods.createTeam('nakama', 'logo', ['0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E']).send({ from: address });
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New data value: ${await rillContract.methods.teamId().call()}`);
}

init();

