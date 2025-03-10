"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { type } from "os";
import React, { useEffect, useState } from "react";

function About() {
  type data = {
    name: string;
    loan_price: number;
    large_images: string;
  };

  const [about, setAbout] = useState<data>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${id}`)
      .then((res) => {
        setAbout(res.data.data.data);
      });
  }, []);
  return (
    <div className=" border-2 inline-block m-5 rounded p-1 border-gray-600 ml-[500px] mt-[150px]">
      <img
        width={270}
        className="rounded"
        src={about?.large_images[0]}
        alt=""
      />
      <p className="font-bold mt-2">{about?.name}</p>
      <p className="font-bold text-2xl mt-3">
        {about?.loan_price?.toLocaleString("ru")}
      </p>
    </div>
  );
}

export default About;
