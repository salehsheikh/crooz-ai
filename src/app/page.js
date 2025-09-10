"use client"
import { Icon } from "@iconify/react";
import Filters from "./components/dashboard/Filters";
import ProgressCards from "./components/dashboard/ProgressCards";
import FunnelChart from "./components/dashboard/FunnelChart";
import ActionItems from "./components/dashboard/ActionItems";
import KeyOppurtunities from "./components/dashboard/KeyOppurtunities";
import TrainingResources from "./components/dashboard/TrainingResources";
import { useState } from "react";

export default function Home() {
    const [active, setActive] = useState(0); 

  const buttons = [
    { label: "Ask AI Assistant", icon: "circum:calendar" },
    { label: "Get task updates", icon: "circum:calendar" },
    { label: "Create Workspace", icon: "circum:calendar" },
    { label: "Connect Apps", icon: "circum:calendar" },
  ];
  return (
    <div className=" space-y-5 pt-8">
      
      <div>
        <div className="flex flex-wrap xl:flex-nowrap justify-between 2xl:gap-23 gap-3.5 items-center w-full">
          <div>
          <p className="text-[#353941] text-2xl leading-7.5 tracking-tight font-bold">Welcome back, Olivia! </p>
<p className="text-2xl leading-7.5 tracking-tight font-bold bg-gradient-to-r from-[#67C0B4] to-[#006E62] text-transparent bg-clip-text">
  How can I help you today?
</p>
</div>
           <div className="flex flex-wrap xl:flex-nowrap gap-3">
      {buttons.map((btn, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`rounded-lg py-2.5 px-3.5 flex w-fit items-center gap-1.5 cursor-pointer  ${
              isActive
                ? "bg-gradient-to-r from-[#006E62] via-[#45A99D] to-[#9CE7DC] shadow-[0_4px_16px_0_rgba(0,72,62,0.15)]"
                : "border border-[#45A99D] bg-white"
            }`}
          >
            <Icon
              icon={btn.icon}
              width="24"
              height="24"
              className={isActive ? "text-white" : "text-[#45A99D]"}
            />
            <p
              className={`text-sm font-semibold leading-5 ${
                isActive ? "text-white truncate" : "text-[#414651] truncate"
              }`}
            >
              {btn.label}
            </p>
          </div>
        );
      })}
    </div>
        </div>
      </div>
  <div>
    <Filters/>
  </div>
  <div>
    <ProgressCards/>
  </div>
  <div className="flex flex-col xl:flex-row xl:flex w-full gap-6">
    <div className=" flex-1"><FunnelChart/></div>
  <div className="flex-1"><ActionItems/></div>
  </div>
  <div className="flex flex-col xl:flex-row xl:flex w-full gap-6">
     <div className=" flex-1">
    <KeyOppurtunities/>
  </div>
  <div className=" flex-1">
    <TrainingResources/>
  </div>
  </div>
 
  
  </div>
  );
}
