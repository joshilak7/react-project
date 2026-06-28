import React from "react";
import S from "./components/s/s.jsx";
import S1 from "./components/s1/s1.jsx";

const App = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      intro: "Beautiful Mountains",
      tag: "Nature",
    },
    {
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      intro: "Modern City",
      tag: "City",
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      intro: "Blue Ocean",
      tag: "Travel",
    },
  ];
  return (
    <>
      <S datas={data} />
      <S1 />
    </>
  );
};

export default App;
