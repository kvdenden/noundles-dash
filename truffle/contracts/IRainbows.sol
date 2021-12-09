// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRainbows {
    function balanceOf(address user) external view returns (uint256); // current balance

    function getOGRainbowsPending(address user) external view returns (uint256); // old rainbows

    function rewards(address user) external view returns (uint256); // earned by genesis noundles before last timestamp

    function getPendingOGReward(address user) external view returns (uint256); // earned by genesis noundles since last timestamp

    function companionRewards(address user) external view returns (uint256); // earned by companions before last timestamp

    function getPendingCompanionReward(address user)
        external
        view
        returns (uint256); // earned by companions since last timestamp

    function evilRewards(address user) external view returns (uint256); // stolen by evils

    function interval() external view returns (uint256); // reward interval for genesis noundles

    function rate() external view returns (uint256); // reward rate for genesis noundles

    function companionInterval() external view returns (uint256); // reward interval for companions

    function companionRate() external view returns (uint256); // reward rate for companions

    function stealingEnabled() external view returns (bool); // withdrawal tax enabled?

    function stealPercentage() external view returns (uint256); // withdrawal tax rate (stolen by evils)
}
