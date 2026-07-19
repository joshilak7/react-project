import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [num, setnum] = useState([]);
  const [index, setindex] = useState(1);
  async function nn() {
    const img = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    console.log(img.data);
    setnum(img.data);
  }
  useEffect(
    function user() {
      nn();
    },
    [index],
  );
  return (
    <div className="mt-5">
      <div className="flex w-full h-full flex-wrap justify-center align-top gap-5 text-20 text-center text-gray-500">
        {num.map((elem) => (
          <div className="font-semibold" key={elem.id}>
            <motion.div
              key={elem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a href={elem.url} target="_blank">
                <img
                  src={elem.download_url}
                  alt={elem.author}
                  width="230"
                  className="rounded-4xl bg-cover object-cover hover:scale-95 h-40"
                />

                <p>{elem.author}</p>
              </a>
            </motion.div>
          </div>
        ))}
        <div className="m-5 flex">
          <button
            className="h-11 w-20 bg-amber-700 m-4 text-amber-50 cursor-pointer transition-all hover:scale-x-95 hover:bg-amber-950 hover:scale-y-95 font-semibold"
            onClick={() => {
              if (index > 1) {
                setindex(index - 1);
              }
            }}
          >
            prv
          </button>
          <div className="flex justify-center m-4 font-semibold">
            <div className="bg-black text-white px-4 py-2 rounded-lg">
              Page: {index}
            </div>
          </div>
          <button
            className="h-11 w-20 bg-amber-700 m-4 text-amber-50 cursor-pointer transition-all hover:scale-x-95 hover:bg-amber-950  hover:scale-y-95 font-semibold"
            onClick={() => {
              setindex(index + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
