"use client";
import { b } from "@/components/Type";
import { Pagination } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { type } from "os";
import React, { useEffect, useState } from "react";

function page() {
  const { slug } = useParams();
  const [mahsulot, setMahsulot] = useState<b>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${current}`
      )
      .then((res) => {
        setMahsulot(res.data.data);
        console.log(res.data.data);
      });
  }, [current]);
  return (
    <div>
      <div className=" flex items-center flex-wrap justify-between gap-5">
      {mahsulot?.products.map((item, id) => {
        return (
          <div
            key={id}
            className="border-1 border-gray-500 rounded inline-block p-1 w-[210px] h-[400px]"
          >
            <img
              className="w-[200px] h-[180px] rounded"
              src={item.image}
              alt=""
            />
            <h2 className="my-2">{item.name}</h2>

            <h2 className="px-2 py-1 bg-gray-400 rounded-full text-[12px] inline my-2">
              {item.axiom_monthly_price}
            </h2>

            <h2 className="mt-3 font-bold text-xl">
              {item.sale_price.toLocaleString("ru")} so'm
            </h2>
          </div>
        );
      })}

    
    </div>
  <div className="ml-[550px]">
  <Pagination
      defaultCurrent={current}
      total={mahsulot?.total}
      onChange={(a) => {
        setCurrent(a);
      }}
    ></Pagination>
  </div>
    </div>
  );
}

export default page;
