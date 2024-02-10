import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItem, setShowIndex }) => {

  const handleClick= () =>{
    setShowIndex();
  }

  return (
    <div className="w-7/12 m-auto mb-18 shadow-sm">
      <div className="flex justify-between px-4 pt-4 cursor-pointer" onClick={handleClick}>
        <h1 className="text-xl font-bold px-2">
          {data.title} <span>({data.itemCards.length})</span>{" "}
        </h1>
        <span>⬇️</span>
      </div>
     {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
