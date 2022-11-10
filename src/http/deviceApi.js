import { $host, $authHost } from ".";

//запрос на создание типа товара
export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

//запрос типов товаров
export const feetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};
//запрос на создание брэндов
export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

//запрос брэндов
export const feetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};
//запрос на создание товара
export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};
//запрос товаров
export const feetchDevices = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};
//запрос определенного товара
//запрос товаров
export const feetchOneDevices = async (id) => {
  const { data } = await $host.get("api/device" + "/" + id);
  return data;
};
//занесение товара в корзину
export const createBasketDevice = async (device) => {
  const { data } = await $authHost.post("api/basket", device);
  return data;
};
