import Image from 'next/image'
import React from 'react'

const TrainingResources = () => {
  return (
    <div className='rounded-xl border border-[#E9EAEB] w-full'>
    <div className='flex justify-between pt-3 pb-2 text-sm px-5 font-semibold leading-5'>
        <p className='text-[#181D27]  '>
      Training & Resources
      </p>
      <a href='#' className='text-[#018E81]'>View all</a>
    </div>
      
       <div className='p-5 rounded-xl border-t  border-[#E9EAEB] '>
          <div className="h-[315px] overflow-y-auto space-y-2">
        <div className='border border-[#E9EAEB] rounded-xl py-4 px-5 space-y-6 flex-col'>
          <div className="flex w-full items-center gap-3 ">
                          <Image
                            src="/images/avatar (12).svg"
                            alt="avatar"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <p className="text-[#181D27] font-semibold leading-6 ">
                          Templates
                            </p>
                            <p className="text-[#181D27]  text-sm font-semibold leading-5">ContrastAI</p>
                          </div>
                        </div>
                        <ul className='text-sm text-[#535862] leading-5 flex items-center justify-between'>
                            <li>Last update - May 2020</li>
                            <li>163 Templates</li>
                            <li>163 Templates</li>
                        </ul>
       </div>
       <div className='border border-[#E9EAEB] rounded-xl py-4 px-5 space-y-6 flex-col'>
          <div className="flex w-full items-center gap-3 ">
                          <Image
                            src="/images/avatar (12).svg"
                            alt="avatar"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <p className="text-[#181D27] font-semibold leading-6 ">
                         Playbooks and Reference Briefs
                            </p>
                            <p className="text-[#181D27]  text-sm font-semibold leading-5">ContrastAI</p>
                          </div>
                        </div>
                        <ul className='text-sm text-[#535862] leading-5 flex items-center justify-between'>
                            <li>Last update - May 2020</li>
                            <li>163 Templates</li>
                            <li>163 Templates</li>
                        </ul>
       </div>
       <div className='border border-[#E9EAEB] rounded-xl py-4 px-5 space-y-6 flex-col'>
          <div className="flex w-full items-center gap-3 ">
                          <Image
                            src="/images/avatar (12).svg"
                            alt="avatar"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <p className="text-[#181D27] font-semibold leading-6 ">
                      Training Shorts
                            </p>
                            <p className="text-[#181D27]  text-sm font-semibold leading-5">ContrastAI</p>
                          </div>
                        </div>
                        <ul className='text-sm text-[#535862] leading-5 flex items-center justify-between'>
                            <li>Last update - May 2020</li>
                            <li>163 Templates</li>
                            <li>163 Templates</li>
                        </ul>
       </div>
       </div>
       </div>
       </div>
  )
}

export default TrainingResources