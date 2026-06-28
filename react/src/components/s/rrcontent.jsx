import React from "react";
import Card from "./Card";

const Rrcontent = (props) => {
  return (
    <div className="h-full w-2/3 bg-white text-black flex flex-nowrap gap-5 rounded-4xl overflow-x-auto">
      {props.datas.map(function (elem, idx) {
        return <Card img={elem.img} tag={elem.tag} key={idx} idx={idx + 1} />;
      })}
    </div>
  );
};

export default Rrcontent;
