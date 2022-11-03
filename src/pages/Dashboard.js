import React from "react";
import Person1 from "../assets/Person1.png";
import Person2 from "../assets/Person2.png";
import Card from "../components/UI/Card";
import DashboardCar from "../components/UI/DashboardCar";
import PersonCard from "../components/UI/PersonCard";
import Setup from "../components/UI/Setup";

function Dashboard() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Card
          className="hover:bg-purple"
          bgCardColor="bg-purple"
          energy
          percentage="45%"
          title="Energy"
        />
        <Card
          className="hover:bg-pink"
          bgCardColor="bg-pink"
          range
          percentage="157k%"
          title="Range"
        />
        <Card
          className="hover:bg-purple"
          bgCardColor="bg-purple"
          breakFluid
          percentage="9%"
          title="Break fluid"
        />
        <Card
          className="hover:bg-yellow"
          bgCardColor="bg-yellow"
          Tirewear
          percentage="25%"
          title="Tire Wear"
        />
      </div>
      <div className="flex gap-4">
        <Setup />
        <PersonCard
          mainText="You have earned"
          number="20"
          word="Badges"
          bottomText="Hooray! Way to go Mohammed"
          image={Person1}
          className="bg-darkBlue"
          colorNumber="text-carrot"
          colorBottomText="text-carrot"
        />
        <PersonCard
          mainText="You have earned"
          number="1500"
          word="Points"
          bottomText="Redeem and claim your rewards!"
          image={Person2}
          className="bg-[#6E1946]"
          colorNumber="text-[#FAC39B]"
          colorBottomText="text-[#FAC39B]"
        />
      </div>
      <DashboardCar />
    </div>
  );
}

export default Dashboard;
