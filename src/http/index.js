import axios from "axios";
//новый экземпляр axios с пользовательской конфигурацией. для неавторизованных запросов
const $host = axios.create({
  baseURL: "http://localhost:5000/",
});
//новый экземпляр axios с пользовательской конфигурацией. для авторизованных запросов
const $authHost = axios.create({
  baseURL: "http://localhost:5000/",
});

//функция-интерцептор для получения токена(из локального хранилища)
const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};
//интерцептор перехватывает запрос(ответ) до того как он будет обработан then
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
