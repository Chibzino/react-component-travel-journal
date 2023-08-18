import React from "react";

export default function Card(props) {
  return (
    <div className="flex pt-10 px-10">
      <div className="min-w-[300px] h-[350px] mr-6">
        <img className="w-[100%] h-[100%]" src={props.arrays.image} alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-bold text-[30px]">{props.arrays.title}</p>
        <p className="font-semibold text-[25px]">{props.arrays.location}</p>
        <p className="text-[16px] text-gray-500 font pb-2">
          {props.arrays.googleMapUrl}
        </p>
        <p className="text-[20px] pb-4">{props.arrays.startDate}</p>
        <p className="text-[18px]">{props.arrays.description}</p>
      </div>
    </div>
  );
}
