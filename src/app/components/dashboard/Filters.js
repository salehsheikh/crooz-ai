"use client"
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const Filters = () => {
  const [activeTab, setActiveTab] = useState('Custom');
  const tabs = ['Custom', '12 months', '30 days', '7 days', '24 hours'];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='flex flex-col md:flex-row items-center justify-between 2xl:gap-[162px] xl:gap-32 gap-2  w-full'>
       <div className="border border-[#E9EAEB] rounded-lg !h-10 w-full bg-[#FAFAFA] flex flex-1 justify-between items-center">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`xs:px-3 px-2 h-10 flex items-center xs:text-sm text-xs font-semibold cursor-pointer truncate ${
              activeTab === tab
                ? 'border border-[#D5D7DA] rounded-lg bg-white shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] text-[#414651]'
                : 'text-[#717680]'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <p>{tab}</p>
          </div>
        ))}
      </div>

       <div className='rounded-lg border border-[#D5D7DA] w-full shadow-[0_1px_2px_0_rgba(10,13,18,0.05)] py-2 px-3 flex items-center flex-1 gap-2'>
  <Icon icon="mynaui:search" width="20" height="20" className="text-[#717680] text-base overflow-ellipsis cursor-pointer" />
  <input 
    type="text" 
    placeholder="Search" 
    className="w-full bg-transparent border-none focus:outline-none text-sm text-[#333] placeholder-[#A4A6B3]" 
  />
</div>

    </div>
  )
}

export default Filters