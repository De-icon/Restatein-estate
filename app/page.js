import { CallToAction } from '@/components/callToAction'
import { Faq } from '@/components/faq'
import { FeaturedProperties } from '@/components/featuredProperties'
import { Testimonials } from '@/components/testimonials'
import React from 'react'
import { Hero2 } from '@/components/hero2'
import Homeimg from '@/public/img/home.png'
import Arow from '@/public/img/icons/arow.svg'
import Management from '@/public/img/management.png'
import Decision from '@/public/img/decision.png'
import Value from '@/public/img/value.png'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div className=' max-w-full mx-auto'>
    <Hero2 />
    <div className=' px-4 my-10 '>
      <div className='  grid grid-cols-2 w-full gap-10 gap-y-5  md:grid-cols-4'>
        <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
            <Image alt="image" src={Arow} className=' w-6 absolute right-2 top-2' />
            <Image alt="image" src={Homeimg} className=' w-14' />
            <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
        </div>
        <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
          <Image alt="image" src={Arow} className=' w-6 absolute right-2 top-2' />
          <Image alt="image" src={Value} className=' w-14' />
          <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
        </div>
        <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
          <Image alt="image" src={Arow} className=' w-6 absolute right-2 top-2' />
          <Image alt="image" src={Management} className=' w-14' />
          <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
        </div>
        <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
          <Image alt="image" src={Arow} className=' w-6 absolute right-2 top-2' />
          <Image alt="image" src={Decision} className=' w-14' />
          <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
        </div>
      </div>
    </div>
    <FeaturedProperties />
    <Testimonials />
    <Faq />
    <CallToAction />
    </div>
    
  </>
  );
}
