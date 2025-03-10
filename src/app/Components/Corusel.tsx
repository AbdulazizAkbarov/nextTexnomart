import React from "react";
import { useState } from "react";

function Corusel() {
  const url = [
    "https://mini-io-api.texnomart.uz/newcontent/slider/353/xnoV6GH7LvFlDRpDpsshAaebZk9RQ4t6oVQLq83i.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/352/1KTJ8zmxnXMzBvjTk4jCuXcKPkd251n2Xx9GL4Xn.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/354/UUfhmmcJSCMtzLYELGhD9OgZdwWDaJm1kVTtuW6A.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/356/4lavHjB0DmCfBwJzIoabAP309zKfjTeydsdol063.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/347/dyFPEw5MYDBCgQSopcXyBcpOE1HVhSugUCb7V3ad.webp",
  ];

  const [index, setIndex] = useState(0);

  const Next = () => {
    if (index < url.length - 1) {
      setIndex(index + 1);
    }
  };

  const Back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="mt-8 mx-auto">
      <div className="relative mx-auto ml-[50px]">
        {index > 0 && (
          <button className="absolute bg-white border top-[150px] left-[12px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl pb-1 cursor-pointer shadow-xl border-none text-[#DA002B]" onClick={Back}>
            &#60;
          </button>
        )}
        <img className=" rounded-xl h-[350px] w-[1300]" onClick={Next} src={url[index]} alt="" />
        {index < url.length - 1 && (
          <button
          className="absolute bg-white border top-[150px] left-[1230px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl pb-1 cursor-pointer shadow-xl border-none text-[#DA002B]"
            onClick={Next}
          >
            &#62;
          </button>
        )}
      </div>
      
    </div>
  );
}

export default Corusel;
