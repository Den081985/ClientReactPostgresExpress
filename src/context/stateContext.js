import React, { useContext, useState } from "react";
import iphoneImg from "../img/pexels-cottonbro-4065899.jpg";

// //массив товаров
// const devices = [
//   { id: 1, name: "Iphone 12 pro", price: "40000", rating: 5, img: iphoneImg },
//   { id: 2, name: "Iphone 13 pro", price: "45000", rating: 5, img: iphoneImg },
//   { id: 3, name: "Iphone 14 pro", price: "50000", rating: 5, img: iphoneImg },
//   { id: 4, name: "Iphone 15 pro", price: "55000", rating: 5, img: iphoneImg },
// ];

const stateContext = React.createContext();

const StateProvider = ({ children }) => {
  //стояние типов товаров
  const [types, setTypes] = useState([
    { id: 1, name: "Freezer" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Notebook" },
    { id: 4, name: "TV" },
  ]);
  //cостояние брэндов
  const [brands, setBrands] = useState([
    { id: 1, name: "BOSH" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Samsung" },
    { id: 4, name: "Xiaomi" },
  ]);
  //состояние товаров
  const [devices, setDevices] = useState([
    { id: 1, name: "Iphone 12 pro", price: "40000", rating: 5, img: iphoneImg },
    { id: 2, name: "Iphone 13 pro", price: "45000", rating: 5, img: iphoneImg },
    { id: 3, name: "Iphone 14 pro", price: "50000", rating: 5, img: iphoneImg },
    { id: 4, name: "Iphone 15 pro", price: "55000", rating: 5, img: iphoneImg },
  ]);
  //состояние авторизации пользователя
  const [isAuth, setIsAuth] = useState(true);
  //состояние пользователя
  const [user, setUser] = useState({});
  //состояние выбранных элементов
  const [selectedType, setSelectedType] = useState({});
  //состояние выбранных брэндов
  const [selectedBrand, setSelectedBrand] = useState({});
  //состояние номера страницы
  const [page, setPage] = useState(1);
  //состояние количества  товаров доступных по данному запросу
  const [totalCount, setTotalCount] = useState(0);
  //состояние количества отображаемых товаров на странице
  const [limit, setLimit] = useState(3);
  return (
    <stateContext.Provider
      value={{
        isAuth: isAuth,
        setIsAuth: setIsAuth,
        user: user,
        setUser: setUser,
        selectedType: selectedType,
        setSelectedType: setSelectedType,
        selectedBrand: selectedBrand,
        setSelectedBrand: setSelectedBrand,
        types,
        setTypes: setTypes,
        brands,
        setBrands: setBrands,
        devices,
        setDevices: setDevices,
        page,
        setPage: setPage,
        limit,
        setLimit: setLimit,
        totalCount,
        setTotalCount: setTotalCount,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(stateContext);
