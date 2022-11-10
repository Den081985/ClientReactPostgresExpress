import React from "react";
import { Pagination } from "react-bootstrap";
import { useStateContext } from "../context/stateContext";

const Pages = () => {
  const { totalCount, limit, page, setPage } = useStateContext();
  //количество страниц расчет
  const pageCount = Math.ceil(totalCount / limit);
  //массив страниц
  const pages = [];
  //в массив страниц добавляем номера страниц i = 0 i + 1 = 1 и тд
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((item) => (
        <Pagination.Item
          key={item}
          active={page === item}
          onClick={() => setPage(item)}
        >
          {item}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
