require("dotenv").config();

const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const RillContract = require('../dapp-ui/src/contracts/Rill.json');
const address = '0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E';
const privateKey = process.env.PRIVATE_KEY;

const collectBounty = async () => {
    const provider = new Provider(privateKey, 'https://matic-mumbai.chainstacklabs.com');
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const rillContract = new web3.eth.Contract(
        RillContract.abi,
        RillContract.networks[networkId].address
    );
    console.log(`Bounty will be collected`);

    const bountyId = 1;
    const collector = '0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E';

    try {
        const receipt = await rillContract.methods.collectBounty(bountyId, collector).send({
            from: address
        });
        console.log(`Transaction hash: ${receipt.transactionHash}`);
        
        console.log(`Bounty ${bountyId} collected by ${collector}`);
    } catch (error) {
        console.log(`Failed to collect bounty ${bountyId} by ${collector}`);
        console.log(error);
    }
}

collectBounty();

module.exports = {
    collectBounty
}