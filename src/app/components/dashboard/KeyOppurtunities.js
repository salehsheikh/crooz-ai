import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const opportunities = [
  {
    id: 1,
    name: 'Ephemeral',
    website: 'ephemeral.io',
    avatar: '/images/avatar (8).svg',
    progress: 35,
    value: 60,
    change: '+5%',
    changeType: 'up',
  },
  {
    id: 2,
    name: 'Stack3d Lab',
    website: 'stack3dlab.com',
    avatar: '/images/avatar (9).svg',
    progress: 65,
    value: 60,
    change: '-4%',
    changeType: 'down',
  },
  {
    id: 3,
    name: 'Warpspeed',
    website: 'getwarpspeed.com',
    avatar: '/images/avatar (10).svg',
    progress: 75,
    value: 78,
    change: '+6%',
    changeType: 'up',
  },
  {
    id: 4,
    name: 'Warpspeed',
    website: 'getwarpspeed.com',
    avatar: '/images/avatar (10).svg',
    progress: 45,
    value: 78,
    change: '-4%',
    changeType: 'down',
  },
  {
    id: 5,
    name: 'CloudWatch',
    website: 'cloudwatch.app',
    avatar: '/images/avatar (11).svg',
    progress: 85,
    value: 38,
    change: '+8%',
    changeType: 'up',
  },
]

const ProgressBar = ({ percent }) => (
  <div className="w-full bg-[#D1D3D9] rounded-full">
    <div
      className="h-2 rounded-full"
      style={{
        width: `${percent}%`,
        background: 'linear-gradient(90deg, #9CE7DC 0%, #018E81 100%)',
      }}
    ></div>
  </div>
)

const KeyOppurtunities = () => {
  return (
    <div className="rounded-xl border border-[#E9EAEB] w-full bg-white">
      {/* Header */}
      <div className="flex justify-between pt-3 pb-2 text-sm px-5 font-semibold leading-5">
        <p className="text-[#181D27]">Key Opportunities</p>
        <a href="#" className="text-[#018E81]">
          View all
        </a>
      </div>
<div className='w-full overflow-x-auto'>
      {opportunities.map((item, index) => (
       <div
  key={item.id}
  className={`px-5 py-4 flex justify-between items-center w-full min-w-[400px]
    ${index === 0 ? 'border-t border-[#E9EAEB] rounded-xl' : ''} 
    ${index !== opportunities.length - 1 ? 'border-b border-[#E9EAEB]' : ''}`}
>

          <div className="flex w-full items-center gap-3">
            <Image
              src={item.avatar}
              alt={item.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-[#181D27] font-medium leading-5 text-sm">{item.name}</p>
              <p className="text-[#535862] text-xs leading-4">{item.website}</p>
            </div>
          </div>

          <div className="w-full flex gap-4 justify-between items-center">
            <ProgressBar percent={item.progress} />
            <p className="text-[#414651] text-sm font-medium leading-5">{item.value}</p>

            <div
              className={`flex items-center gap-1 rounded-2xl py-0.5 pl-1.5 pr-2 border text-xs
                ${
                  item.changeType === 'up'
                    ? 'text-[#067647] bg-[#ECFDF3] border-[#ABEFC6]'
                    : 'text-[#F04438] bg-[#FEF3F2] border-[#FECDCA]'
                }`}
            >
              <Icon
                icon={
                  item.changeType === 'up'
                    ? 'basil:arrow-up-outline'
                    : 'basil:arrow-down-outline'
                }
                width="12"
                height="12"
              />
              <span>{item.change}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default KeyOppurtunities
