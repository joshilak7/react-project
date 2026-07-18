import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState([]);
  const [index, setindex] = useState(1);
  useEffect(
    function user() {
      nn();
    },
    [index],
  );
  async function nn() {
    const img = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    console.log(img.data);
    setnum(img.data);
  }
  return (
    <div>
      <button className="h-20 w-20 bg-amber-700 py-4 px-2 m-11" onClick={nn}>
        click
      </button>
      <div className="flex w-100% h-100% flex-wrap justify-center align-top gap-5 text-20 text-center text-gray-500">
        {num.map((elem) => (
          <div className="" key={elem.id}>
            <a href={elem.url} target="_blank">
              <img
                src={elem.download_url}
                alt={elem.author}
                width="230"
                className="rounded-4xl bg-cover object-cover hover:scale-95 h-40"
              />
              <p>{elem.author}</p>
            </a>
          </div>
        ))}
        <div className="m-5">
          <button
            className="h-11 w-20 bg-amber-700 m-4 text-amber-50"
            onClick={() => {
              if (index > 1) {
                setindex(index - 1);
                setnum([]);
              }
            }}
          >
            prv
          </button>
          <button
            className="h-11 w-20 bg-amber-700 m-4 text-amber-50"
            onClick={() => {
              setindex(index + 1);
              setnum([]);
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
