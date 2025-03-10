"use client";

import Products from "@/app/Components/Products";
import TopCatigory from "@/app/Components/TopCatigory";
import XitSavdo from "@/app/Components/XitSavdo";
import axios from "axios";
import { type } from "os";
import { useEffect, useState } from "react";
import Corusel from "./Components/Corusel";
export type ProductType = {
  axiom_monthly_price: number;
  name: string;
  image: string;
};
export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setProducts(res.data.data.data);
      });
  }, []);
  return (
    <div>
      <TopCatigory/>
      <Corusel/>
    <XitSavdo/>
      {/* <Products products={products} /> */}
    </div>
  );
}
