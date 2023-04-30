import React from "react";
import Heading from "../components/Heading";
import CoachAdvice from "../components/coachAdvice";
import AccountStatus from "../components/AccountStatus";
import UnitOne from "../components/UnitOne";

const RoadmapContainer = () => {
  return (
    <div className="bg-[#1D9299] w-[100vw] h-auto py-1">
      <Heading />
      <CoachAdvice />
      <AccountStatus />
      <UnitOne />
    </div>
  );
};

export default RoadmapContainer;
