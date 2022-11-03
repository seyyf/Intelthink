import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import refresh from "../../assets/refresh.png";
import setting from "../../assets/setting.png";
import thunder from "../../assets/thunder.png";

function DashboardCar() {
  const [car, setCar] = useState([]);

  const DashboardData = () => {
    Axios.get("https://my.api.mockaroo.com/dash_cars.json?key=549bd630").then(
      (res) => {
        setCar(res.data);
      }
    );
  };

  useEffect(() => {
    DashboardData();
  }, []);
  return (
    <div className=" gap-4 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {car.map((car) => {
        return (
          <div
            key={car.id}
            className={`bg-[${car.color}] bg-white rounded-md p-6 w-full`}
          >
            <div className="flex items-center gap-4">
              <FiRefreshCcw className="cursor-pointer" />
              <p className="font-bold text-[16px]"> 64% Recommend</p>
            </div>
            <div className="flex justify-center items-center">
              <img src={car.image} alt="" />
            </div>
            <p className="font-bold text-[20px]">{car.model}</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <img src={refresh} alt="" />
                <p className="font-medium text-[14px] text-darkGrey">
                  {car.kilometrage.slice(1, -1)}K
                </p>
                <img src={setting} alt="" />
                <img src={thunder} alt="" />
              </div>
              <div>
                <p className="font-medium text-[14px]">{car.price}/h</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardCar;
