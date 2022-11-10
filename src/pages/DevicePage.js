import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useStateContext } from "../context/stateContext";
// import img from "../img/pexels-cottonbro-4065899.jpg";
import starImg from "../img/favorite.png";
import { createBasketDevice } from "../http/deviceApi";
import { useParams } from "react-router-dom";
import { feetchOneDevices } from "../http/deviceApi";

//страница с характеристиками товаров
/**
 *Col md={4}-колонки по 4 столбца
 */
const DevicePage = () => {
  // const device = {
  //   id: 1,
  //   name: "Iphone 12 pro",
  //   price: "40000",
  //   rating: 5,
  // };
  //массив характеристик
  // const description = [
  //   { id: 1, title: "RAM", description: "5GB" },
  //   { id: 2, title: "Camera", description: "12Mpx" },
  //   { id: 3, title: "Processor", description: "Pentium 3" },
  //   { id: 4, title: "Core quantity", description: "2" },
  //   { id: 5, title: "Battery", description: "5" },
  // ];

  const [device, setDevice] = useState({ info: [] });
  //получение параметров строки запроса(id)
  const { id } = useParams();
  // console.log(id);
  const addToBasket = () => {
    createBasketDevice(device).then((data) => console.log(data));
  };

  useEffect(() => {
    feetchOneDevices(id).then((data) => {
      setDevice(data);
      console.log(data);
    });
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            src={process.env.REACT_APP_API_URL + device.img}
            width={300}
            height={300}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{ textAlign: "center" }}>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${starImg}) no-repeat center center`,
                width: 248,
                height: 248,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgrey",
            }}
          >
            <h2>{device.price} rub.</h2>
            <Button variant="outline-dark" onClick={addToBasket}>
              Add to Basket
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h4>Characteristics</h4>
        {device.info.map(
          (
            info,
            index //description.map()
          ) => (
            <Row
              key={info.id}
              style={{
                backgroundColor: index % 2 === 0 ? "lightgray" : "transparent",
                padding: 10,
              }}
            >
              {info.title}: {info.description}
            </Row>
          )
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
