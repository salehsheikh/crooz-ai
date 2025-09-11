import Image from 'next/image'
import React from 'react'

const resources = [
  {
    id: 1,
    title: 'Templates',
    subtitle: 'ContrastAI',
    avatar: '/images/avatar (12).svg',
    lastUpdate: 'May 2020',
    count1: '163 Templates',
    count2: '163 Templates',
  },
  {
    id: 2,
    title: 'Playbooks and Reference Briefs',
    subtitle: 'ContrastAI',
    avatar: '/images/avatar (12).svg',
    lastUpdate: 'May 2020',
    count1: '163 Templates',
    count2: '163 Templates',
  },
  {
    id: 3,
    title: 'Training Shorts',
    subtitle: 'ContrastAI',
    avatar: '/images/avatar (12).svg',
    lastUpdate: 'May 2020',
    count1: '163 Templates',
    count2: '163 Templates',
  },
]

const TrainingResources = () => {
  return (
    <div className='rounded-xl border border-[#E9EAEB] w-full'>
      <div className='flex justify-between pt-3 pb-2 text-sm px-5 font-semibold leading-5'>
        <p className='text-[#181D27]'>Training & Resources</p>
        <a href='#' className='text-[#018E81]'>View all</a>
      </div>

      <div className='p-5 rounded-xl border-t border-[#E9EAEB]'>
        <div className='h-[315px] overflow-y-auto space-y-2'>
          {resources.map((item) => (
            <div
              key={item.id}
              className='border border-[#E9EAEB] rounded-xl py-4 px-5 space-y-6 flex flex-col'
            >
              <div className="flex w-full items-center gap-3">
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[#181D27] font-semibold leading-6">
                    {item.title}
                  </p>
                  <p className="text-[#181D27] text-sm font-semibold leading-5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <ul className='sm:text-sm text-xs text-[#535862] leading-5 flex items-center justify-between gap-2'>
                <li>Last update - {item.lastUpdate}</li>
                <li>{item.count1}</li>
                <li>{item.count2}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrainingResources
