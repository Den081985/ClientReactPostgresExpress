import React from "react";
import { useStateContext } from "../context/stateContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/constants";

const NavBar = () => {
  const { setUser, isAuth, setIsAuth } = useStateContext();

  //функция для изменения состояния "Exit"
  const logout = () => {
    setUser({});
    setIsAuth(false);
  };
  //объект navigation для перемещения по маршрутам
  let navigate = useNavigate();
  //используем react-bootstrap
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          DeviceStore
        </NavLink>
        <NavLink style={{ color: "white" }} to={BASKET_ROUTE}>
          Basket
        </NavLink>
        {isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
              className="mr-3"
            >
              Admin
            </Button>
            <Button
              variant={"outline-light"}
              className="mr-4"
              onClick={() => logout()}
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
