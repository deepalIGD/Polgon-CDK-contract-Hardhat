// deploy.js
const { ethers } = require("hardhat");

async function main() {


  const MyContract = await ethers.getContractFactory("CDKValidium");
  
  // Pass constructor parameters as an array
  const initialParameterValue = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
  const myContract = await MyContract.deploy(initialParameterValue, initialParameterValue, initialParameterValue, initialParameterValue, initialParameterValue, 1, 5);
  
  await myContract.deployed();

  console.log("MyContract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
