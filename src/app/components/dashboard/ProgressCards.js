"use client"
import { Icon } from '@iconify/react'
import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false, 
});
const ProgressCards = () => {
 const options = {
  chart: {
    type: 'radialBar',
    height: 250,
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90, // half circle
      hollow: {
        size: '60%',
        background: 'transparent',
      },
      track: {
        background: '#D1D3D9',
        strokeWidth: '100%',
        margin: 0,
      },
      dataLabels: {
        show: true,
        name: {
          show: false, 
        },
        value: {
          offsetY: 10,
          fontSize: '28px',
          fontWeight: 700,
          formatter: function () {
            return "$7580"; 
          },
          color: '#181D27',
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal', // horizontal gradient
      gradientToColors: ['#F0B365'], // yellow
      stops: [0, 100],
    },
  },
  colors: ['#EF6254'], // red -> will blend into gradientToColors
  stroke: {
    lineCap: 'round', 
  },
  series: [75], 
};



  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-6 '>
        {/* firstcard */}
     <div className='rounded-xl border border-[#E9EAEB] w-full'>
      <p className='text-[#181D27] pt-3  pb-2 text-sm px-5 font-semibold leading-5'>
        Territory In Motion
      </p>
      <div className='p-5 rounded-xl border-t  border-[#E9EAEB]'>
        <div className='flex justify-end'>
          <Icon icon="pepicons-pencil:dots-y" width="20" height="20" className='cursor-pointer text-[#A4A7AE]' />
        </div>

        <ApexCharts
          options={options}
          series={[75]} 
          type="radialBar"
          height={200}
        />
              <p className='text-[#181D27] font-semibold leading-6 pt-4'>You’ve almost reached your limit</p>
              <p className='text-sm leading-5 text-[#535862] '>You have used 80% of your available spots. Upgrade plan to monitor more.</p>

      </div>
    </div>

    {/* second card */}
 <div className='rounded-xl border border-[#E9EAEB] w-full'>
      <p className='text-[#181D27] pt-3 pb-2 text-sm px-5 font-semibold leading-5'>
        Account Progress
      </p>
      <div className='p-5 rounded-xl border-t border-[#E9EAEB] space-y-3'>
        <div className='py-4 px-5 flex items-center gap-3 rounded-xl border border-[#EEEEEF]'>
  <div className='bg-[#B9FFF4] size-10 flex items-center justify-center rounded-full shrink-0'>
    <Icon icon="pajamas:monitor-o" width="20" height="20" className='text-[#018E81]' />
  </div>
  <div className='flex-col w-full'>
  <div className='flex justify-between items-center w-full'>
    <p className='text-[#200] text-sm font-semibold leading-5'>NASA</p>
    <p className='text-[#5A5B5C] text-sm leading-5 '>$25 left</p>
 
</div>
   <div className="w-full bg-[#D1D3D9] rounded-full mt-2">
  <div 
    className="h-2 rounded-full"
    style={{
      width: '35%', // Adjust this value to represent the progress
      background: 'linear-gradient(90deg, #9CE7DC 0%, #018E81 100%)',
    }}
  ></div>
</div>
  </div>
</div>

<div className='py-4 px-5 flex items-center gap-3 rounded-xl border border-[#EEEEEF]'>
  <div className='bg-[#B9FFF4] size-10 flex items-center justify-center rounded-full shrink-0'>
    <Icon icon="solar:bag-linear" width="20" height="20" className='text-[#018E81]' />
  </div>
  <div className='flex-col w-full'>
  <div className='flex justify-between items-center w-full'>
    <p className='text-[#200] text-sm font-semibold leading-5'>USDA</p>
    <p className='text-[#5A5B5C] text-sm leading-5 '>$120 left</p>
 
</div>
   <div className="w-full bg-[#D1D3D9] rounded-full mt-2">
  <div 
    className="h-2 rounded-full"
    style={{
      width: '65%', // Adjust this value to represent the progress
      background: 'linear-gradient(90deg, #9CE7DC 0%, #018E81 100%)',
    }}
  ></div>
</div>
  </div>
</div>

<div className='py-4 px-5 flex items-center gap-3 rounded-xl border border-[#EEEEEF]'>
  <div className='bg-[#B9FFF4] size-10 flex items-center justify-center rounded-full shrink-0'>
   <Image src="/icons/coins.svg" alt='coin' width={20} height={20}/>
  </div>
  <div className='flex-col w-full'>
  <div className='flex justify-between items-center w-full'>
    <p className='text-[#200] text-sm font-semibold leading-5'>VA</p>
    <p className='text-[#5A5B5C] text-sm leading-5 '>$50 left</p>
 
</div>
   <div className="w-full bg-[#D1D3D9] rounded-full mt-2">
  <div 
    className="h-2 rounded-full"
    style={{
      width: '75%', // Adjust this value to represent the progress
      background: 'linear-gradient(90deg, #9CE7DC 0%, #018E81 100%)',
    }}
  ></div>
</div>
  </div>
</div>


       
      </div>
</div>

{/* third card */}
 <div className='rounded-xl border border-[#E9EAEB] w-full'>
      <p className='text-[#181D27] pt-3 pb-2 text-sm px-5 font-semibold leading-5'>
        Gains
      </p>
      <div className='p-5 rounded-xl border-t border-[#E9EAEB] space-y-3'>
      <div className='p-5 space-y-3'>
        <div className='flex items-center justify-between'>
        <div className='flex gap-3'>
          <div className="bg-[#F5F5F5] size-10 p-2.5 rounded-full">
<Icon icon="lucide:users" width="24" height="24" className='text-[#414651]'/>
          </div>
          <p className='text-[#181D27] sm:text-[32px] text-lg leading-11 font-semibold'>2,420</p>
         
        </div>
         <p className='text-[#181D27]  leading-6 font-semibold'>Metric 01</p>
      </div>
       <hr className='h-px text-[#E9EAEB] '/>
      </div>
     
       <div className='p-5 space-y-3  '>
        <div className='flex items-center justify-between'>
        <div className='flex gap-3'>
          <div className="bg-[#F5F5F5] size-10 p-2.5 rounded-full">
<Icon icon="lucide:users" width="24" height="24" className='text-[#414651]'/>
          </div>
          <p className='text-[#181D27] sm:text-[32px] text-lg  leading-11 font-semibold'>1,210</p>
         
        </div>
         <p className='text-[#181D27]  leading-6 font-semibold'>Metric 02</p>
      </div>
      <hr className='h-px text-[#E9EAEB] '/>
      </div>
       <div className='p-5 rounded-xl '>
        <div className='flex items-center justify-between'>
        <div className='flex gap-3'>
          <div className="bg-[#F5F5F5] size-10 p-2.5 rounded-full">
<Icon icon="lucide:users" width="24" height="24" className='text-[#414651]'/>
          </div>
          <p className='text-[#181D27] sm:text-[32px] text-lg leading-11 font-semibold'>316</p>
         
        </div>
         <p className='text-[#181D27]  leading-6 font-semibold'>Metric 03</p>
      </div>
      </div>
</div>
</div>
    </div>
  )
}

export default ProgressCards