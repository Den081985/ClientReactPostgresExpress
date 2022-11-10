import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useStateContext } from "./context/stateContext";
import { check } from "./http/userApi";

function App() {
  const { setUser } = useStateContext();
  //состояние загрузки страницы во время пользователя
  const [loading, setLoading] = useState(true);
  //запрос на валидность токена пользователя отправляется один раз при загрузке приложения
  useEffect(() => {
    check()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  // if (loading) {
  //   return <Spinner animation="grow" />;
  // }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
