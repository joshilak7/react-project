import React from "react";
import Cardcontent from "./Cardcontent";

const Card = (props) => {
  return (
    <div className="h-full bg-blue-700 w-80 relative rounded-4xl overflow-hidden shrink-0">
      <img
        className="overflow-hidden h-full w-full object-cover"
        src={props.img}
        alt="logo"
      />
      <Cardcontent tag={props.tag} idx={props.idx} />
    </div>
  );
};

export default Card;
