const hre = require("hardhat")

async function main() {
  const LeveragedYieldFarm = await hre.ethers.getContractAt("LeveragedYieldFarm","0x46d4674578a2daBbD0CEAB0500c6c7867999db34")

  await leveragedYieldFarm.depositDai(50)


  const ethBalanceBefore = await ethers.provider.getBalance(deployer.address)
  const daiBalanceBefore = ethers.utils.formatUnits(await dai.balanceOf(deployer.address))
  const cDaiBalanceBefore = ethers.utils.formatUnits(await cDai.balanceOf(leveragedYieldFarm.address))
  const compBalanceBefore = ethers.utils.formatUnits(await comp.balanceOf(deployer.address))

  console.log('\nWaiting for a new block...\n')

  const BLOCK_NUMBER = await ethers.provider.getBlockNumber()
  const BLOCK = await ethers.provider.getBlock(BLOCK_NUMBER)

  // Fast forward 1 block...
  // New blocks are validated roughly every ~ 12 seconds
  await time.increaseTo(BLOCK.timestamp + 12)

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
