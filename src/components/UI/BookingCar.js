import Axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import refresh from "../../assets/refresh.png";

function BookingCar() {
  const min = 4;
  const max = 6;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const [car, setCar] = useState([]);
  //   const [style, setStyle] = useState("");

  const DashboardData = () => {
    Axios.get("https://my.api.mockaroo.com/booking_car.json?key=549bd630").then(
      (res) => {
        setCar(res.data);
      }
    );
  };

  useEffect(() => {
    DashboardData();
  }, []);

  //   const changeStyle = () => {
  //     setStyle("text-[#F84F56]");
  //   };
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-6">
      {car.map((car) => {
        return (
          <div key={car.id} className={`bg-white rounded-md p-6 w-full`}>
            <div className="flex items-center justify-between gap-4">
              <p className="font-bold text-[20x]"> {car.model}</p>
              <AiOutlineHeart className={`cursor-pointer text-[#A4A5A6]`} />
            </div>
            <div className="flex justify-center items-center">
              <img src={car.image} alt="" />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <p className="text-[#A4A5A6]">{randomNumber}</p>
                  <AiOutlineUser className="text-purple" />
                </div>
                <div className="flex justify-center gap-2">
                  <img src={refresh} alt="" />
                  <p>{randomNumber}</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-[14px]">{car.price}/d</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookingCar;
