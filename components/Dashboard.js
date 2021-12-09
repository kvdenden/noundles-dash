import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";

import RainbowsPanel from "./RainbowsPanel";
import useWeb3 from "../hooks/useWeb3";

const Dashboard = () => {
  const [address, setAddress] = useState();
  const [validated, setValidated] = useState(true);

  const web3 = useWeb3();

  const handleChange = useCallback(
    (e) => {
      const address = e.target.value;
      if (web3.utils.isAddress(address)) {
        setAddress(address);
        setValidated(true);
      } else {
        setAddress(null);
        setValidated(address == "");
      }
    },
    [web3]
  );

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Wallet Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
            onChange={handleChange}
            isInvalid={!validated}
          />
        </Form.Group>
      </Form>
      <hr />
      <RainbowsPanel address={address} />
    </>
  );
};

export default Dashboard;
