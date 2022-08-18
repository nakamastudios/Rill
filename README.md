# Rill

Rill is the next generation of e-sports gaming.

Built on Polygon

The solidity smart contract can be deployed using truffle to mumbai or matic mainnet. The dApp uses [React](https://reactjs.org/)



Please refer to the following steps to deploy this DApp on Mumbai testnet
### 1. NodeJS version 10 or 12
```
node -v
> v10.24.1
```
### 2. Metamask

[Download the metamask extension](https://metamask.io/)

### 3. Truffle
```
npm install -g truffle 
```

### 4. Wallet 
If you have no wallet yet, please use Metamask to create a new wallet. After this you can get add some test MATIC to your wallet thanks to this [MATIC faucet](https://faucet.polygon.technology/)

### 5. Install npm dependencies
Run following command in the root of the project:
```
npm i
```

### 6. Modify the privatekey in .env
Paste your account's private key to 'MNEMONIC' in the .env file

### 7. Deploy contract using truffle
Deploy contract:
```
npm run migrate
```
On sucessfull deploy, copy the `contract address`

### 8. TODO: Paste your contract address to a variable somewhere in the dapp-ui project

### 9. Run DApp UI
```
cd dapp-ui
npm i
npm start
```

### 10. Navigate to http://localhost:3000/ to see the app running.

