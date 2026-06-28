import React from "react";

const Cardcontent = (props) => {
  return (
    <div className=" h-full w-full flex flex-col justify-between absolute top-0 left-0 ">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold text-2xl text-black m-5">
        {props.idx}
      </h2>
      <div className="flex flex-col justify-center items-center text-center">
        <div>
          <p className="mb-16 font-bold leading-relaxed text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quidem nobis, voluptatum nisi voluptas inventore
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <button className=" text-white mb-2 h-12 w-50 rounded-4xl bg-blue-700 text-center flex justify-center items-center font-semibold">
            {props.tag}
          </button>
          <button className="h-12 w-12 rounded-full bg-blue-700 text-white text-3xl">
            <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardcontent;
