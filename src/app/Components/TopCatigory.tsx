import axios from "axios";
import { log } from "console";
import { type } from "os";
import React, { useEffect, useState } from "react";

function TopCatigory() {
  type Catigory = {
    title: string;
  };
  const [catigory, setCatigory] = useState<Catigory[]>([]);

  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        setCatigory(res.data.data.data);
      });
  }, []);
  return (
    <div className="flex items-center my-4 justify-between px-10">
      {catigory.map((item, id) => (
        <p key={id}>{item.title}</p>
      ))}
    </div>
  );
}

export default TopCatigory;
