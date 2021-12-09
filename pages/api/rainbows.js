import Web3 from "web3";
import IRainbows from "../../contracts/IRainbows.json";

export default async function handler(req, res) {
  const { address } = req.query;

  const web3 = new Web3(process.env.WEB3_HTTP_PROVIDER_URL);
  const rainbows = new web3.eth.Contract(
    IRainbows.abi,
    process.env.NEXT_PUBLIC_RAINBOWS_CONTRACT_ADDRESS
  );

  const [
    oldRainbows,
    genesisRewards,
    genesisPendingRewards,
    companionRewards,
    companionPendingRewards,
    evilRewards,
  ] = await Promise.all([
    rainbows.methods.getOGRainbowsPending(address).call(),
    rainbows.methods.rewards(address).call(),
    rainbows.methods.getPendingOGReward(address).call(),
    rainbows.methods.companionRewards(address).call(),
    rainbows.methods.getPendingCompanionReward(address).call(),
    rainbows.methods.evilRewards(address).call(),
  ]);

  res.status(200).json({
    oldRainbows,
    genesisRewards,
    genesisPendingRewards,
    companionRewards,
    companionPendingRewards,
    evilRewards,
  });
}
