import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/constants";
import img from "../img/star-img.png";
import basket from "../img/basket.png";
/**
 * useNavigateХук возвращает функцию, которая позволяет программно перемещаться
 * Функция navigateимеет две подписи:

Либо передайте Toзначение (того же типа, что и <Link to>) с необязательным вторым { replace, state }аргументом, либо
Передайте дельту, которую вы хотите пройти в стеке истории. Например, navigate(-1)эквивалентно нажатию кнопки «Назад».
 */
const DeviceItem = ({ device }) => {
  let navigate = useNavigate();
  return (
    <Col md={3} className={"mt-3"}>
      <Card
        style={{ cursor: "pointer", width: 150 }}
        border={"light"}
        onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={basket}
            width={15}
            height={15}
            style={{ position: "absolute", right: 0, cursor: "pointer" }}
          />
          <Image
            width={150}
            height={150}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2 text-black-50">
          <div>{device.name}</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={img} width={10} height={10} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
