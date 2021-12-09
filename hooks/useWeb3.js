import { useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [web3] = useState(new Web3());

  return web3;
};

export default useWeb3;
