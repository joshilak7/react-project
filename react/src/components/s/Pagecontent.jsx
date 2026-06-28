import React from "react";
import Rcontent from "./rcontent";
import Rrcontent from "./rrcontent";

const Pagecontent = (props) => {
  console.log(props);
  return (
    <div className="flex justify-between h-[90vh] py-10 bg-white px-19 gap-10">
      <Rcontent />
      <Rrcontent datas={props.datas} />
    </div>
  );
};

export default Pagecontent;
