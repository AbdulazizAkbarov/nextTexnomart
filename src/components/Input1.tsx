import axios from "axios";
import { useParams } from "next/navigation";
import { type } from "os";
import React, { useEffect, useState } from "react";
import {
  AppstoreAddOutlined,
  AppstoreOutlined

} from '@ant-design/icons';
type SearchResult = {
  categories: {
    id: number;
    slug: string;
    title: string;
  }[];
  models: {
    id: number;
    slug: string;
    title: string;
  }[];
  products: {
    id: number;
    slug: string;
    name: string;
    image:string
  }[];
};
function Input1() {
  const [searchstate, setSearchstate] = useState<SearchResult>();
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://gateway.texnomart.uz/api/common/v1/search/header?q=${input}`
      )
      .then((res) => {
        setSearchstate(res.data.data);
        console.log(res.data.data);
      });
  }, [input]);

  if (!searchstate) {
    return "Loading...";
  }

  return (
    <div>
      <div className="mx-auto inline-block ml-[500px] mt-3 ">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="border-1 border-white px-3 py-1  w-96"
          type="text"
          placeholder="Qidiruv"
        />
      </div>
      <div className="absolute z-20 bg-black w-[400px] ml-[36%] mt-2 p-2 rounded-xl">
        {searchstate.categories.map((item) => {
          return <div className=" flex  gap-1">
            <AppstoreOutlined />
            <p key={item.id}>{item.title}</p>
          </div> ;
        })}
        {searchstate.products.map((item) => {
          return <div className="flex gap-2 border my-1 p-1 rounded">
            <img className="w-[20px] h-[20px]" src={item.image} alt="" />
           <p key={item.id}>{item.name}</p>
          </div>
        })}
        {searchstate.models.map((item) => {
          return (
            <p className="bg-gray-400 px-2 p-0.5 rounded inline-block my-2 mx-2"
              key={item.id}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Input1;
