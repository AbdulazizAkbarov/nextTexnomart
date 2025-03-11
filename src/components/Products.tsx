import { ProductType } from "@/app/page";
import React from "react";

function Products({ products }: { products: ProductType[] }) {
  return (
    <div className="flex flex-wrap justify-between gap-5">
      {products.map((item, id) => {
        return (
          <div key={id} className=" border inline-block w-[250px] ">
            <img className="w-[200px]" src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.axiom_monthly_price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
