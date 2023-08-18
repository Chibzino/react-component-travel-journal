import React from "react";
import "./main.css";
import Card from "./components/cards";
import data from "./components/data";
import Navbar from "./components/navbar";

export default function App() {
  const cards = data.map((arrays) => {
    return (
      <Card
        //each child in a list shoud have a unique "key" prop
        key={arrays.id}
        arrays={arrays}
      />
    );
  });
  return (
    <div className="flex items-center justify-center">
      <div className=" w-[900px] ">
        <Navbar />

        {cards}
      </div>
    </div>
  );
}
