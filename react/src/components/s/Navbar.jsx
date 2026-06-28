import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-16">
      <h4 className="rounded-full bg-black text-white px-4 py-2 uppercase">
        Targeted Audiunce
      </h4>
      <button className="bg-gray-200 px-8 py-2 rounded-full text-black uppercase tracking-widest text-sm cursor-pointer">
        digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
