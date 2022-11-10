import React from "react";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../context/stateContext";
import { authRoutes, publicRoutes } from "../routes";
//компонент роутинга и навигации
const AppRouter = () => {
  const { isAuth } = useStateContext();
  //переменная состояния авторизации пользователя
  // const storeData = useSelector((state) => state.rootReducer);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
