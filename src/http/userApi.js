import { $host, $authHost } from "./index";

import jwt_decode from "jwt-decode";
//функции регистрации,авторизации и проверки валидности
//функция регистрации
export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  //после получения токена сохраняем его в LocalStorage
  localStorage.setItem("token", data.token);
  //возвращаем декодированный токен
  return jwt_decode(data.token);
};

//функция авторизации
export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  //после получения токена сохраняем его в LocalStorage
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

//функция проверки валидности
//после регистрации пользователя и сохранения токена при каждой перезагрузке страницы
//функция check будет проверять токен и если он не валидный пользователь разлогинется
export const check = async () => {
  const { data } = await $host.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
