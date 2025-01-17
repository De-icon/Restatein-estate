import { CallToAction } from '@/components/callToAction'
import { ValueClient } from '@/components/valueClient'
import React from 'react'
import TrustImg from '@/public/img/trustImg.png'
import Team1 from '@/public/img/team1.png'
import Team2 from '@/public/img/team2.png'
import Team3 from '@/public/img/team3.png'
import Team4 from '@/public/img/team4.png'
import Twitter from '@/public/img/twitter.svg'
import Send from '@/public/img/send.svg'
import Star from '@/public/img/star.png'
import ClientImg from '@/public/img/clientImg.png'
import ExcellentImg from '@/public/img/excellentImg.png'
import commitmentImg from '@/public/img/commitmentImg.png'
import { HeroAbout } from '@/components/heroAbout'
import Image from 'next/image'

export default function About() {
  return (
   <div>
      <HeroAbout />
      <div className="flex flex-col items-center justify-between md:px-16 px-5  py-8 lg:py-10 gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-5/12 xl:py-16">
        <Image alt="image" src={Star} className=' w-16' />
          <h1 className="mb-8  font-bold text-AbsoluteWhite text-2xl font-Font sm:text-5xl md:mb-12 md:text-6xl ">Our Values</h1>
          <p className="mb-10 leading-relaxed font-Font text-base text-gray60  lg:w-5/5 xl:text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-gray10 p-5 rounded-md'>
          <div className=' flex flex-col items-start gap-3 p-6 ' >
            <div className='flex gap-3 items-center justify-center'>
              <Image src={TrustImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Trust</p>
            </div>
            <p className="font-Font text-base text-gray60">Trust is the cornerstone of every successful real estate transaction.</p>
          </div>
          <div className=' flex flex-col items-start gap-3 p-6' >
            <div className='flex gap-3 items-center justify-center'>
              <Image src={ExcellentImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Excellence</p>
            </div>
            <p className="font-Font text-base text-gray60">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
          </div>
          <div className=' flex flex-col items-start gap-3 p-6' >
            <div className='flex gap-3 items-center justify-center'>
              <Image alt="image" src={ClientImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Client-Centric</p>
            </div>
            <p className="font-Font text-base text-gray60">Your dreams and needs are at the center of our universe. We listen, understand..</p>
          </div>
          <div className=' flex flex-col items-start gap-3 p-6' >
            <div className='flex gap-3 items-center justify-center'>
              <Image alt="image" src={commitmentImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Our Commitment</p>
            </div>
            <p className="font-Font text-base text-gray60">We are dedicated to providing you with the highest level of service, professionalism.</p>
          </div>
        </div>
      </div>

      <div className=" md:px-16 px-5  py-8 lg:py">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-full xl:py-16">
          <Image alt="image" src={Star} className=' w-16' />
            <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font text-2xl sm:text-5xl md:mb-12 md:text-6xl ">Our Achievements</h1>
            <p className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 w-full ">
          <div className=' flex flex-col items-start gap-5 bg-gray10 p-7 rounded-md '>
            <h1 className='font-Font font-bold text-lg text-AbsoluteWhite'>3+ Years of Excellence</h1>
            <p className="font-Font text-base text-gray60">With over 3 years in the industry, we have amassed a wealth of knowledge and experience.</p>
          </div>
          <div className=' flex flex-col items-start gap-5 bg-gray10 p-7 rounded-md '>
            <h1 className='font-Font font-bold text-lg text-AbsoluteWhite'>Happy Clients</h1>
            <p className="font-Font text-base text-gray60">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
          </div>
          <div className=' flex flex-col items-start gap-5 bg-gray10 p-7 rounded-md'>
            <h1 className='font-Font font-bold text-lg text-AbsoluteWhite'>Industry Recognition</h1>
            <p className="font-Font text-base text-gray60">We have earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
          </div>
        </div>

      </div>

      <div className=" md:px-16 px-5  py-8 lg:py">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-full xl:py-16">
          <Image alt="image" src={Star} className=' w-16' />
            <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font text-2xl sm:text-5xl md:mb-12 md:text-6xl ">Navigating the Estatein Experience</h1>
            <p className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg">At Estatein, we have designed a straightforward process to help you find and purchase your dream property with ease. Heres a step-by-step guide to how it all works.</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 myBrakepoint:grid-cols-2 gap-5 w-full ">
          <div className=' flex flex-col items-start gap-1 p-7  rounded-md '>
            <h2 className='font-Font font-light text-base text-AbsoluteWhite bg-gray10  w-full p-5 rounded-t-md'>Step 01</h2>
            <div className=' bg-gray10 w-full p-5 rounded-b-md'>
              <h3 className='font-Font font-bold text-lg text-AbsoluteWhite mb-3'>Discover a World of Possibilities</h3>
              <p className="font-Font text-base text-gray60">Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.</p>
            </div>
          </div>
          <div className=' flex flex-col items-start gap-1 p-7  rounded-md '>
            <h2 className='font-Font font-light text-base text-AbsoluteWhite bg-gray10  w-full p-5 rounded-t-md'>Step 02</h2>
            <div className=' bg-gray10 w-full p-5 rounded-b-md'>
              <h3 className='font-Font font-bold text-lg text-AbsoluteWhite mb-3'>Narrowing Down Your Choices</h3>
              <p className="font-Font text-base text-gray60">Once you have found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.</p>
            </div>
          </div>
          <div className=' flex flex-col items-start gap-1 p-7  rounded-md '>
            <h2 className='font-Font font-light text-base text-AbsoluteWhite bg-gray10  w-full p-5 rounded-t-md'>Step 03</h2>
            <div className=' bg-gray10 w-full p-5 rounded-b-md'>
              <h3 className='font-Font font-bold text-lg text-AbsoluteWhite mb-3'>Personalized Guidance</h3>
              <p className="font-Font text-base text-gray60">Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.</p>
            </div>
          </div>
          <div className=' flex flex-col items-start gap-1 p-7  rounded-md '>
            <h2 className='font-Font font-light text-base text-AbsoluteWhite bg-gray10  w-full p-5 rounded-t-md'>Step 04</h2>
            <div className=' bg-gray10 w-full p-5 rounded-b-md'>
              <h3 className='font-Font font-bold text-lg text-AbsoluteWhite mb-3'>See It for Yourself</h3>
              <p className="font-Font text-base text-gray60">Arrange viewings of the properties you are interested in. We will coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.</p>
            </div>
          </div>
          <div className=' flex flex-col items-start gap-1 p-7  rounded-md '>
            <h2 className='font-Font font-light text-base text-AbsoluteWhite bg-gray10  w-full p-5 rounded-t-md'>Step 05</h2>
            <div className=' bg-gray10 w-full p-5 rounded-b-md'>
              <h3 className='font-Font font-bold text-lg text-AbsoluteWhite mb-3'>Making Informed Decisions</h3>
              <p className="font-Font text-base text-gray60">Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.</p>
            </div>
          </div>
          <div className=' flex flex-col items-start gap-1 p-7  rounded-md '>
            <h2 className='font-Font font-light text-base text-AbsoluteWhite bg-gray10  w-full p-5 rounded-t-md'>Step 06</h2>
            <div className=' bg-gray10 w-full p-5 rounded-b-md'>
              <h3 className='font-Font font-bold text-lg text-AbsoluteWhite mb-3'>Getting the Best Deal</h3>
              <p className="font-Font text-base text-gray60">We will help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.</p>
            </div>
          </div>
        </div>
        

      </div>

      <div className=" md:px-16 px-5  py-8 lg:py">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-full xl:py-16">
          <Image alt="image" src={Star} className=' w-16' />
            <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font text-2xl sm:text-5xl md:mb-12 md:text-6xl ">Meet the Estatein Team</h1>
            <p className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-4 myBrakepoint:grid-cols-2 gap-5 w-full">
          <div className=' p-5 bg-gray10 rounded-md flex flex-col items-center '>
            <div className=' w-full '>
              <Image alt="image" src={Team1} className=' object-contain w-full' />
            </div>
            <div className=' -mt-6 text-center'>
              <Image src={Twitter} className='w-12' />
              <p className='font-Font font-bold text-AbsoluteWhite mb-2'>Max Mitchell</p>
              <p className="font-Font text-base text-gray60 mb-3">Founder</p>
              <div className=' w-full flex gap-1 items-center justify-center p-2 bg-gray08 rounded-full'>
                <input className='text-AbsoluteWhite w-full focus:outline-none bg-transparent border-none p-1 appearance-none' type='text'  placeholder='Say hello👋' />
                <Image alt="image" src={Send} className=' w-7 ' />
              </div>
            </div>
          </div>
          <div className=' p-5 bg-gray10 rounded-md flex flex-col items-center '>
            <div className=' w-full '>
              <Image src={Team2} className=' object-contain w-full' />
            </div>
            <div className=' -mt-6 text-center'>
              <Image alt="image" src={Twitter} className='w-12' />
              <p className='font-Font font-bold text-AbsoluteWhite mb-2'> Sarah Johnson</p>
              <p className="font-Font text-base text-gray60 mb-3">Chief Real Estate Officer</p>
              <div className=' w-full flex gap-1 items-center justify-center p-2 bg-gray08 rounded-full'>
                <input className='text-AbsoluteWhite w-full focus:outline-none bg-transparent border-none p-1 appearance-none' type='text'  placeholder='Say hello👋' />
                <Image  src={Send} className=' w-7 ' />
              </div>
            </div>
          </div>
          <div className=' p-5 bg-gray10 rounded-md flex flex-col items-center '>
            <div className=' w-full '>
              <Image alt="image" src={Team3} className=' object-contain w-full' />
            </div>
            <div className=' -mt-6 text-center'>
              <Image src={Twitter} className='w-12' />
              <p className='font-Font font-bold text-AbsoluteWhite mb-2'>Max Mitchell</p>
              <p className="font-Font text-base text-gray60 mb-3">Head of Property Management</p>
              <div className=' w-full flex gap-1 items-center justify-center p-2 bg-gray08 rounded-full'>
                <input className='text-AbsoluteWhite w-full focus:outline-none bg-transparent border-none p-1 appearance-none' type='text'  placeholder='Say hello👋' />
                <Image src={Send} className=' w-7 ' />
              </div>
            </div>
          </div>
          <div className=' p-5 bg-gray10 rounded-md flex flex-col items-center '>
            <div className=' w-full '>
              <Image alt="image" src={Team4} className=' object-contain w-full' />
            </div>
            <div className=' -mt-6 text-center'>
              <Image alt="image" src={Twitter} className='w-12' />
              <p className='font-Font font-bold text-AbsoluteWhite mb-2'>Michael Turner</p>
              <p className="font-Font text-base text-gray60 mb-3">Legal Counsel</p>
              <div className=' w-full flex gap-1 items-center justify-center p-2 bg-gray08 rounded-full'>
                <input className='text-AbsoluteWhite w-full focus:outline-none bg-transparent border-none p-1 appearance-none' type='text'  placeholder='Say hello👋' />
                <Image alt="image" src={Send} className=' w-7 ' />
              </div>
            </div>
          </div>
        </div>

      </div>

      <ValueClient />
      <CallToAction />
    </div>
  )
}
