import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/constants";
import { login, registration } from "../http/userApi";
import { useStateContext } from "../context/stateContext";

//страница авторизации
//используем классы bootstrap Card Component Form Row-bootstrap компоненты
const Auth = () => {
  /**
   *useLocation Этот хук возвращает текущий location объект. Это может быть полезно, если вы хотите
   * выполнять какой-либо побочный эффект при изменении текущего местоположения.
   */
  const location = useLocation();
  // console.log(location);
  //isLogin = true если поле объекта location.pathname = /login
  const isLogin = location.pathname === LOGIN_ROUTE;

  //состояние инпута email
  const [email, setEmail] = useState("");

  //состояние инпута password
  const [password, setPassword] = useState("");

  const { setUser, setIsAuth } = useStateContext();

  const navigate = useNavigate();

  //функция регистрации и авторизации
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      //состояние user меняем на полученное с ответом
      setUser(data);
      setIsAuth(true);
      //при успешной авторизации переводим пользователя на страницу Shop
      navigate(SHOP_ROUTE);
      console.log(data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            style={{ marginBottom: "1rem" }}
            placeholder="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            type="password"
            className="mt-3"
            style={{ marginBottom: "1rem" }}
            placeholder="Input your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Have no account?
                <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Have an account?
                <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
              </div>
            )}
            <Button
              className="mt-3 align-self-end"
              variant={"outline-dark"}
              onClick={click}
            >
              {isLogin ? "Enter" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
