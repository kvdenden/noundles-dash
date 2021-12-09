import React, { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import axios from "axios";
import useWeb3 from "../hooks/useWeb3";

const RainbowsPanel = ({ address }) => {
  const [loading, setLoading] = useState({});
  const [rainbows, setRainbows] = useState({});

  const web3 = useWeb3();

  useEffect(() => {
    if (web3.utils.isAddress(address)) {
      setLoading(true);
      axios.get("/api/rainbows", { params: { address } }).then((response) => {
        const { data } = response;
        setRainbows(data);
        setLoading(false);
      });
    } else {
      setRainbows({});
      setLoading(false);
    }
  }, [web3, address]);

  const oldRainbows = +web3.utils.fromWei(rainbows.oldRainbows || "0");

  const genesisRewards = +web3.utils.fromWei(rainbows.genesisRewards || "0");
  const genesisPendingRewards = +web3.utils.fromWei(rainbows.genesisPendingRewards || "0");
  const genesisRainbows = genesisRewards + genesisPendingRewards;

  const companionRewards = +web3.utils.fromWei(rainbows.companionRewards || "0");
  const companionPendingRewards = +web3.utils.fromWei(rainbows.companionPendingRewards || "0");
  const companionRainbows = companionRewards + companionPendingRewards;

  const evilRainbows = +web3.utils.fromWei(rainbows.evilRewards || "0");

  const totalRainbows = oldRainbows + genesisRainbows + companionRainbows + evilRainbows;

  const formatNumber = (n) =>
    loading ? <Spinner animation="border" size="sm" /> : n == 0 ? 0 : n.toFixed(2);

  return (
    <div>
      <h2>Pending Balance</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Old rainbows</td>
            <td align="right">{formatNumber(oldRainbows)}</td>
          </tr>
          <tr>
            <td>Earned by Genesis</td>
            <td align="right">{formatNumber(genesisRainbows)}</td>
          </tr>
          <tr>
            <td>Earned by Companions</td>
            <td align="right">{formatNumber(companionRainbows)}</td>
          </tr>
          <tr>
            <td>Earned by Evil</td>
            <td align="right">{formatNumber(evilRainbows)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Pending Balance</td>
            <td align="right">{formatNumber(totalRainbows)}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default RainbowsPanel;
