import React from "react";
import Img from "../images/globe.png";

export default function Navbar() {
  return (
    <>
      <div className="flex bg-red-500 items-center justify-center h-[60px] mt-4 rounded-t-[20px] mx-10">
        <img className="w-10" src={Img} alt="" />
        <p className=" text-[25px] font-semibold pl-4 text-white">
          My Travel Journal
        </p>
      </div>
    </>
  );
}
