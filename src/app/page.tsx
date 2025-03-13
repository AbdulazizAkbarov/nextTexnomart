"use client";

import Products from "@/components/Products";
import TopCatigory from "@/components/TopCatigory";
import XitSavdo from "@/components/XitSavdo";
import axios from "axios";
import { type } from "os";
import { useEffect, useState } from "react";
import Corusel from "../components/Corusel";
import { Input } from "antd";
import Input1 from "@/components/Input1";
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
      <Input1/>
      <TopCatigory/>
      <Corusel/>
    <XitSavdo/>
      {/* <Products products={products} /> */}
    </div>
  );
}
