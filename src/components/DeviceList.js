import React from "react";
import { Row } from "react-bootstrap";
import { useStateContext } from "../context/stateContext";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
  const { devices } = useStateContext();
  return (
    <Row className="d-flex">
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
