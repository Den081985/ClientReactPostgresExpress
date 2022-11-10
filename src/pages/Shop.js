import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import { useStateContext } from "../context/stateContext";
import { feetchBrands, feetchDevices, feetchTypes } from "../http/deviceApi";
import Pages from "../components/Pages";
//Основная страница с выводом товаров
/**
 * Container, Row(строка), Col(колонки)-bootstrap компоненты
 */
const Shop = () => {
  const {
    setTypes,
    setBrands,
    setDevices,
    setTotalCount,
    page,
    selectedType,
    selectedBrand,
  } = useStateContext();
  //запрос типов устройств
  useEffect(() => {
    feetchTypes().then((data) => setTypes(data));
    feetchBrands().then((data) => setBrands(data));
    feetchDevices(null, null, 2, 6).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count); //количество находится в поле count ответа
    });
  }, []);
  //для запроса товаров при изменении номера страницы
  useEffect(() => {
    feetchDevices(selectedType.id, selectedBrand.id, page, 2).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count); //количество находится в поле count ответа
    });
  }, [page, selectedBrand, selectedType]);
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
