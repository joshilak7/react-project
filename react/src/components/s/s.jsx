import React from "react";
import Navbar from "./Navbar";
import Pagecontent from "./Pagecontent";

const s = (props) => {
  console.log(props);
  return (
    <div className="bg-white h-screen w-full">
      <Navbar />
      <Pagecontent datas={props.datas} />
    </div>
  );
};

export default s;
