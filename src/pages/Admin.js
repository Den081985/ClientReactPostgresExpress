import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
//страница администрирования
const Admin = () => {
  //состояния видимости модальных окон
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-5 p-3"
        onClick={() => setTypeVisible(true)}
      >
        Add type
      </Button>
      <Button
        variant="outline-dark"
        className="mt-5 p-3"
        onClick={() => setBrandVisible(true)}
      >
        Add brand
      </Button>
      <Button
        variant="outline-dark"
        className="mt-5 p-3"
        onClick={() => setDeviceVisible(true)}
      >
        Add device
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
