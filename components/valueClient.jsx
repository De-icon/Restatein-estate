"use client"


import { ClientData } from '../constant/data';
import Slider from "react-slick";
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';
import { useState, useEffect } from 'react';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import Star from '@/public/img/star.png'
import Image from 'next/image';



export const ValueClient = () => {
  const [value, setValue] = useState(0);
  const [slideToShow, setSlideToShow] = useState();

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setSlideToShow(3);
    } else if (width >= 760) {
      setSlideToShow(2);
    } else {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    afterChange: (current) => {
      if (ClientData.length > slideToShow) {
        setValue(slideToShow + current);
      }

    },
  };

  return (
    <div className=" md:px-16 px-5  py-8 lg:py">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-full xl:py-16">
            <Image alt="image" src={Star} className=' w-16' />
            <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Navigating the Estatein Experience</h1>
            <p className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg">At Estatein, we have designed a straightforward process to help you find and purchase your dream property with ease. Heres a step-by-step guide to how it all works.</p>
        </div>

        <div className="relative">
      <Slider {...settings}>
        {ClientData.map((clientdata, i) => (
          <div key={i} className="w-full overflow-hidden font-Font">
            <div className="p-5 w-11/12 border-t-8 border-gray60 rounded-md flex flex-row gap-6 font-Font">
              <div className=' p-5 bg-gray15 rounded-xl w-full'> 
                <div className=' flex sm:flex-row items-center justify-between w-full mb-5 xs:flex-col xs:items-start ' >
                    <div className='' >
                        <p  className="mb-3 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg"> Since {clientdata.year}</p>
                        <h2 className=' text-AbsoluteWhite text-xl xs:mb-5'>{clientdata.company_name}</h2>
                    </div>
                    <div className=' p-3 text-AbsoluteWhite sm:w-4/12 font-Font bg-gray10 rounded-md xs:w-11/12 text-center'>Visit Website</div>
                </div>
                <div className=' flex  justify-between items-center mb-6 gap-5'>
                
                  <div className=' flex flex-col items-start gap-3 '>
                    <div className=' flex gap-2 items-center justify-center text-gray60 font-Font'>
                      <BiCategoryAlt />
                      <p>Domain</p>
                    </div>
                    <p className=' text-AbsoluteWhite text-lg'>Commercial Real Estate</p>
                  </div>
                  
                  <div  className=' flex flex-col items-start gap-3 '>
                    <div className=' flex gap-2 items-center justify-center text-gray60'>
                      <AiOutlineThunderbolt />
                      <p>Category</p>
                    </div>
                    <p className=' text-AbsoluteWhite text-lg'>{clientdata.category}</p>
                  </div>
                </div>
                  <div>
                    <p className=' text-gray60 mb-3 font-Font'>What They Said 🤗</p>
                    <p className=' text-AbsoluteWhite font-Font'>{clientdata.what_they_say}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className=' absolute right-12 md:left-0 -bottom-14 text-AbsoluteWhite'>
        <p>{value} 0f {ClientData.length}</p>
      </div>
    </div>
    </div>
    
  );
};
