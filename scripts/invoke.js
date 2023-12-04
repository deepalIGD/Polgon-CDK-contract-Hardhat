// interactWithContract.js
const { ethers } = require('hardhat');
const { web3 } = require('web3-utils');

async function main() {
  // Replace these values with your actual contract address and ABI
  const contractAddress = '0x75642D2D835dd72FEAb76534F43fCDC8B9e56DDD';
 

  // Connect to an Ethereum node
  //const provider = new ethers.providers.Contract('https://sepolia.infura.io/v3/5b7d545a6ebb46078acc75aa8a6d9efd'); // Replace with your Ethereum node URL

  // Create a contract instance
  const MyContract = await ethers.getContractFactory("CDKValidium");
  
 
  const contract = MyContract.attach(
    "0x75642D2D835dd72FEAb76534F43fCDC8B9e56DDD" // The deployed CDK implementation contract address
  );
  // Call a function on the contract
  const result = await contract.verifyBatchesTrustedAggregator(0, 0, 1, '0x0000000000000000000000000000000000000000000000000000000000000000', '0x630601b7e6ef2d060d2dab13f1c8c40cddce28011d0fbce47250b191bd29fcdf',
    [
        '0x054b417c54a91954c2c576e115e19d1bb6b89745b5bc6c3516d3e1728785f5a5',
        '0x0596d81ad8b8f6dc266ed77fbd085251093c80f732719732d690ab68078fe210',
        '0x02ed6cf3aabd85c2b531a2925e1cb45e7dc056efb769157243e06f35e73ed369',
        '0x22f463137af6ad352d3c65a9b569edcc9eb7f15375457e01bc54e3d458b3ea0b',
        '0x1822805c3cf15ab4a3b54e2cd3423f8e7216d20f94e900c19279dc115d1ed561',
        '0x1f4b408b0a4e6371041b1f732a85f3cfa924d0cf97b73284370c7c197e57180d',
        '0x11d6c730d986d2a43aa3041d5ec98721f1e38519fd2b02c031607a44caf76ecf',
        '0x05cdd3a0bbe5ca5835b5ac42868904988578aa99c62047317294ec92b57a73c0',
        '0x0f4576ae245d4f27ad82f2f9504c90e96a85202a6e877995f95172c000896886',
        '0x101f1c59ba5f86d8031efa2f74081ec21e72c71f8308549945732cd2ee4f20dc',
        '0x07096a1ec76f8a2ed5a8f74898172befc29ca364b54ba3883d4fad7eaf234b9b',
        '0x087399a4eb16f24582042d7d3dff4ecd1f6aa1321b0ff861d160697c556dea39',
        '0x0993cbfc84275aff81827ced101f8bae281f1efb06cd3d8ca42af2a5180c30e9',
        '0x1ddc9e956c6117ddece8bee935696f1eedc23392375b73235efa01433ea8bcf3',
        '0x109879a10a2415c84cb9b523280a590c857b44d5d88944783e9f3ff4950f8214',
        '0x27846ad7affea313ddb49b4135c1e8e5bd110565c494618375650edefd4938f8',
        '0x01aab369b1716386947c3bbb75a3e5be5cc2ed735543cbf3acb8c3c8f0d9d1f2',
        '0x0c574ef902b9431a6c7f32061cad551e57f51a71f7b2c5e2b8064576382c3246',
        '0x0b83aee4b36eb3612d41871fce0b916092ca50ec9764e2e8c53b9c23371d7224',
        '0x097a986632d6b5fb91e6b0fbfa380aebbd3e64a6e13a39a70ac36beef55f2b41',
        '0x2b876e59141b2146cfe605751aaeee8a0c4dabc4c120f62eb2dff73f5df26d58',
        '0x1f9f5ce598e84dff00fa7b1c5395cbb4fcba95909625ed8ef95f458e9cc6fd65',
        '0x163fc9bb2bc89d4cde84837c8729d833b31554af5c573ffc919df73d10496502',
        '0x0a450a104f0833b22960e2f9b5802002689db66b9adbfee1fa9762e861d25bf4'
    ]
);
const receipt = await result.wait();
console.log('Transaction Receipt:', receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
