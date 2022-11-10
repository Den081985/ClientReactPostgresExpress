import React from "react";
import { useStateContext } from "../context/stateContext";
import { ListGroup } from "react-bootstrap";
//компонет панели типов
const TypeBar = () => {
  //массив типов и пропсы из контекста
  const { types, setSelectedType, selectedType } = useStateContext();
  return (
    <ListGroup>
      {types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={type.id}
          onClick={() => setSelectedType(type)} //изменение состояние выбранного типа
          active={type.name === selectedType}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
