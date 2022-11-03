import React from "react";
import setup from "../../assets/Setup.png";

function Setup() {
  return (
    <div className="flex gap-12 p-6 bg-[#FFE0BA] rounded-md">
      <div className="flex flex-col gap-2 justify-evenly">
        <div>
          <p className="text-style text-darkBlue">Apply for a car loan !</p>
          <p className="font-normal text-[16px] text-darkBlue">
            This is a sample of a generated text
          </p>
        </div>
        <div>
          <button className=" bg-darkBlue p-4 font-bold text-[12px] text-white rounded-md">
            Discover More
          </button>
        </div>
      </div>
      <div>
        <img src={setup} alt="" />
      </div>
    </div>
  );
}

export default Setup;
