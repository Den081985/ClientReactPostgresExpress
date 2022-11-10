import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { useStateContext } from "../../context/stateContext";
import { feetchTypes, feetchBrands, createDevice } from "../../http/deviceApi";
/**
 * Dropdown-bootstrap выпадающий список,Dropdown.Toggle-кнопка
 * Form.Control type="file" для загрузки файлов
 */
const CreateDevice = ({ show, onHide }) => {
  //состояние названия товара
  const [name, setName] = useState("");
  //сoстояние цены товара
  const [price, setPrice] = useState("");
  //состояние изображения товара
  const [file, setFile] = useState(null);
  //состояние выбранного брэнда
  // const [brand, setBrand] = useState(null);
  //состояние выбранного типа товара
  // const [type, setType] = useState(null);

  const inputRef = useRef();

  //функция выбора файла
  const selectFile = () => {
    setFile(inputRef.current.files[0]);
  };
  // console.log(file);
  //загрyзка типов и устройств
  useEffect(() => {
    feetchTypes().then((data) => setTypes(data));
    feetchBrands().then((data) => setBrands(data));
  }, []);

  const {
    devices,
    types,
    brands,
    setTypes,
    setBrands,
    setSelectedType,
    setSelectedBrand,
    selectedType,
    selectedBrand,
  } = useStateContext();

  //массив характеристик
  const [info, setInfo] = useState([]);
  //функция добавления свойства в массив характеристик
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  //функция удаления характеристики из массива характеристик
  const removeInfo = (number) => {
    setInfo(info.filter((prop) => prop.number !== number));
  };
  //функция изменения характеристик
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  /**
   * Объекты FormData позволяют вам легко конструировать наборы пар ключ-значение,
   * представляющие поля формы и их значения
   * FormData.append -добавляет новое значение существующего поля объекта FormData,
   * либо создаёт его и присваивает значение.
   */
  //функция добавления нового товара в ДБ
  const addDevice = () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", selectedBrand.id);
    formData.append("typeId", selectedType.id);
    formData.append("info", JSON.stringify(info)); //массив info передаем как строку
    console.log(info);
    createDevice(formData).then((data) => console.log(data));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" className="mt-2">
              Choose type
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" className="mt-2">
              Choose brand
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Input device name"
            className="mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            placeholder="Input device price"
            className="mt-2"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Form.Control
            className="mt-2"
            type="file"
            ref={inputRef}
            onChange={selectFile}
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="input name of property"
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="input description of property"
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                />
              </Col>
              <Col>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete property
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-danger">
          Close
        </Button>
        <Button onClick={addDevice} variant="outline-success">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
