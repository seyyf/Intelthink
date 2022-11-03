import React from "react";

function PersonCard({
  mainText,
  number,
  word,
  bottomText,
  image,
  className,
  colorNumber,
  colorBottomText,
}) {
  return (
    <div className={`${className} p-4 rounded-md`}>
      <div className="flex ">
        <div className="flex flex-col justify-between w-1/2">
          <p className="text-style text-white">{mainText}</p>
          <span className={`${colorNumber} font-bold text-[40px]`}>
            {number}
          </span>
          <p className="text-style text-white">{word}</p>
        </div>
        <div>
          <img width="120px" src={image} alt="" />
        </div>
      </div>
      <p className={`${colorBottomText}`}>{bottomText}</p>
    </div>
  );
}

export default PersonCard;
