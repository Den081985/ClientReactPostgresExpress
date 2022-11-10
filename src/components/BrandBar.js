import React from "react";
import { Card, Row } from "react-bootstrap";
import { useStateContext } from "../context/stateContext";
//Card, Row-компоненты bootstrap
const BrandBar = () => {
  //массив брэндов
  const { brands, selectedBrand, setSelectedBrand } = useStateContext();
  return (
    <Row className="d-flex flex-column">
      {brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedBrand(brand)}
          border={brand === selectedBrand ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
};

export default BrandBar;
