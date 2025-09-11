"use client"
import Checkbox from '@/app/shared/Checkbox'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const ActionItems = () => {
     const [accepted, setAccepted] = React.useState(false);
       const tableData = [
    {
      id: 1,
      avatar: "/images/avatar (1).svg",
      name: "Lily-Rose C",
      username: "@lilyrose",
      dueDate: "Jan 16, 2025",
      status: "Complete",
      statusColor: "#ECFDF3",
      borderColor: "#ABEFC6",
      textColor: "#067647",
       checkboxColor: "green",
    },
    {
      id: 2,
      avatar: "/images/avatar (2).svg",
      name: "Caitlyn King",
      username: "@caitlynk",
      dueDate: "Feb 22, 2025",
      status: "Not Started",
      statusColor: "#FEF3F2",
      borderColor: "#FECDCA",
      textColor: "#B42318",
       checkboxColor: "purple",
    },
    {
      id: 3,
      avatar: "/images/avatar (3).svg",
      name: "Fleur Cook",
      username: "@fleur_cook",
      dueDate: "Mar 5, 2025",
      status: "In Progress",
      statusColor: "#FEF6EE",
      borderColor: "#F9DBAF",
      textColor: "#B93815",
        checkboxColor: "purple",
    },
    {
      id: 4,
      avatar: "/images/avatar (4).svg",
      name: "Marco Kelly",
      username: "@marcokelly",
      dueDate: "Mar 5, 2025",
      status: "Complete",
      statusColor: "#ECFDF3",
      borderColor: "#ABEFC6",
      textColor: "#067647",
       checkboxColor: "green",
    },
     {
      id: 5,
      avatar: "/images/avatar (5).svg",
      name: "Lulu Meyers",
      username: "@lulu_meyers",
      dueDate: "Feb 22, 2025",
      status: "Not Started",
      statusColor: "#FEF3F2",
      borderColor: "#FECDCA",
      textColor: "#B42318",
       checkboxColor: "green",
    },
     {
      id: 6,
      avatar: "/images/avatar (6).svg",
      name: "Mikey Lawrence",
      username: "@mikeylawrence",
      dueDate: "Mar 5, 2025",
      status: "In Progress",
      statusColor: "#FEF6EE",
      borderColor: "#F9DBAF",
      textColor: "#B93815",
        checkboxColor: "purple",
    },
      {
      id: 7,
      avatar: "/images/avatar (7).svg",
      name: "Freya Browning",
      username: "@freya_b",
      dueDate: "Jan 16, 2025",
      status: "Complete",
      statusColor: "#ECFDF3",
      borderColor: "#ABEFC6",
      textColor: "#067647",
       checkboxColor: "green",
    },
  ];
  return (
   <div className='rounded-xl border border-[#E9EAEB] w-full'>
    <div className='flex justify-between pt-3 pb-2 text-sm px-5 font-semibold leading-5'>
        <p className='text-[#181D27]  '>
       Critical Action Items
      </p>
      <a href='#' className='text-[#018E81]'>View all</a>
    </div>
      <div className="w-full overflow-x-auto">
       <div className='pt-3 rounded-xl border-t border-[#E9EAEB] bg-white min-w-[500px]'>
      {/* Table Header */}
      <div className='border-b border-[#E9EAEB] pb-3 px-5'>
        <ul className='flex justify-between text-xs font-semibold text-[#717680]'>
          <li className='flex items-center w-1/4'>
            Customer
            <Icon icon="system-uicons:chevron-open" width="16" height="16" />
          </li>
          <li className='flex items-center w-1/4 justify-center'>
            Due Date
            <Icon icon="system-uicons:chevron-open" width="16" height="16" />
          </li>
          <li className='flex items-center w-1/4 justify-center'>
            Status
            <Icon icon="system-uicons:chevron-open" width="16" height="16" />
          </li>
          <li className='flex items-center w-1/4 justify-end'>
            Completed
            <Icon icon="system-uicons:chevron-open" width="16" height="16" />
          </li>
        </ul>
      </div>

      {/* Table Rows */}
      <div className="h-[290px] overflow-y-auto">
          {tableData.map((item) => (
            <div
              key={item.id}
              className="border-b border-[#E9EAEB] py-3 px-5 flex justify-between items-center"
            >
              {/* Customer Info */}
              <div className="flex items-center gap-3 w-1/3">
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[#181D27] font-medium leading-5 text-sm">
                    {item.name}
                  </p>
                  <p className="text-[#535862] text-xs leading-4">{item.username}</p>
                </div>
              </div>

              {/* Due Date */}
              <p className="text-[#535862] text-sm leading-5 w-1/4 text-center">
                {item.dueDate}
              </p>

              {/* Status */}
              <div className="w-1/4 flex justify-center">
                <div
                  className="py-[2px] px-2 flex items-center justify-center border rounded-2xl text-xs font-medium leading-4 w-fit"
                  style={{
                    backgroundColor: item.statusColor,
                    borderColor: item.borderColor,
                    color: item.textColor,
                  }}
                >
                  {item.status}
                </div>
              </div>

              {/* Checkbox */}
              <div className="w-1/4 flex justify-end pr-5">
                <Checkbox checked={accepted} onChange={setAccepted} color={item.checkboxColor} />
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
        </div>
  )
}

export default ActionItems