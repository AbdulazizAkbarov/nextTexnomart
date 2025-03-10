import axios from "axios";
import { log } from "console";
import Link from "next/link";
import { type } from "os";
import React, { useEffect, useState } from "react";

function XitSavdo() {
  const [mahsulot, setMahsulot] = useState<Maxsulotlar[]>([]);
  type Maxsulotlar = {
    all_count: number;
    availability: string;
    axiom_monthly_price: string;
    benefit: number;
    discount_price: number;
    id: number;
    image: string;
    is_can_loan_order: number;
    name: string;
    reviews_count: number;
    sale_price: number;
  };
  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setMahsulot(res.data.data.data);
      });
  }, []);
  return (
    <div className="container px-6 mx-auto mt-5">
      <h2 className="font-bold text-2xl">Xit Savdo</h2>

      <div className=" flex items-center flex-wrap justify-between gap-5">
        {mahsulot.map((item, id) => {
          return (
            <Link href={`/about/${item.id}`} key={id} className="border-1 border-gray-500 rounded inline-block p-1 w-[210px] h-[400px]">
              <img
                className="w-[200px] h-[220px] rounded"
                src={item.image}
                alt=""
              />
              <h2 className="my-2">{item.name}</h2>

              <h2 className="px-2 py-1 bg-gray-400 rounded-full text-[12px] inline my-2">
                {item.axiom_monthly_price}
              </h2>

              <h2 className="mt-3 font-bold text-xl">{(item.sale_price).toLocaleString("ru")} so'm</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default XitSavdo;
