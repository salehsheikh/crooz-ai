import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex ml-6 '>
        <div className='rounded-xl border border-[#E9EAEB] p-3 flex flex-1 items-center justify-between   gap-3'>
            <div className='flex gap-3 items-center'>
<div className='size-10 p-2.5 rounded-lg border border-[#D5D7DA] flex items-center justify-center'>
    <Image src='icons/zap-fast.svg' width={20} height={20} alt='img'/>

</div>
<div>
<div className='flex items-center gap-2 '>
    <p className='text-sm font-bold leading-5'>Upgrade to PRO</p>
    <div className='py-[2px] px-2 bg-[#F9F5FF] w-fit border border-[#E9D7FE] rounded-2xl texs-xs text-[#6941C6] text-center'>
Upgrade
    </div>
</div>
<p className='text-sm text-[#535862]'>Unlock 200+ integrations, 40 GB data, and advanced reporting.</p>
        </div>
         </div>
<button className="rounded-lg cursor-pointer truncate flex items-center justify-center py-2.5 px-3.5 text-white text-sm font-semibold leading-5 bg-gradient-to-r from-[#6539B7] to-[#B399FF] shadow-lg">
  Upgrade now
</button>

         </div>
         <div className='flex gap-5.5 items-center ml-8.5 '>
            <Icon icon="weui:setting-outlined" width="20" height="20" className='cursor-pointer text-[#A4A7AE]'/>
            <Icon icon="clarity:notification-line" width="20" height="20" className='cursor-pointer text-[#A4A7AE]'/>
            <Image src="/images/avatar.svg" width={40} height={40} alt='avatar' className='cursor-pointer'/>
         </div>
    </nav>
  )
}

export default Navbar