const CONTRACT_ADDRESS = "0x2F36c256f202766235012AcF048Fcf880f255e00"
const META_DATA_URL = " ipfs://bafyreifekztviafowtnrt2tsa54t4k6jmilz3mu62afjzqb2tqhomkgyvi/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const NFT = await ethers.getContractFactory("NFT")
   const [owner] = await ethers.getSigners()
   await NFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });