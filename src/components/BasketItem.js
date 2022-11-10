import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../utils/constants";
import img from "../img/star-img.png";
import { useNavigate } from "react-router-dom";
//страница корзины
const BasketItem = () => {
  const navigate = useNavigate();
  return (
    <Col md={3} className="mt-3">
      <Card
        style={{ cursor: "pointer", width: 150 }}
        border={"light"}
        onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
      >
        <div>
          <Image
            width={150}
            height={150}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2 text-black-50">
          <div></div>
          <div className="d-flex align-items-center">
            <div></div>
            <Image src={img} width={10} height={10} />
          </div>
        </div>
        <div></div>
      </Card>
    </Col>
  );
};

export default BasketItem;
