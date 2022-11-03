import React from "react";
import BreakFluid from "../../assets/SVG/BreakFluid.js";
import Energy from "../../assets/SVG/Energy.js";
import Range from "../../assets/SVG/Range.js";
import TireWear from "../../assets/SVG/TireWear.js";

function Card({
  title,
  percentage,
  bgCardColor,
  energy,
  range,
  breakFluid,
  Tirewear,
}) {
  return (
    <div
      className={`group rounded-md flex flex-col bg-white items-center w-full gap-12 hover:${bgCardColor} p-6`}
    >
      <div>
        {/* <img src={image} alt="" className={`${className}`} /> */}
        <div>
          {energy ? (
            <Energy fill="purple" className={`${"group-hover:fill-white"}`} />
          ) : null}
        </div>
        <div>
          {range ? (
            <Range fill="pink" className={`${"group-hover:fill-white"}`} />
          ) : null}
        </div>
        <div>
          {breakFluid ? (
            <BreakFluid
              fill="purple"
              className={`${"group-hover:fill-white"}`}
            />
          ) : null}
        </div>
        <div>
          {Tirewear ? (
            <TireWear fill="yellow" className={`${"group-hover:fill-white"}`} />
          ) : null}
        </div>
      </div>
      <p className="group-hover:text-white text-style">{title}</p>
      <p className="group-hover:text-white text-style">{percentage}</p>
    </div>
  );
}

export default Card;
