"use client"


import { FaqData } from '../constant/data';
import Slider from "react-slick";
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';
import { useState, useEffect } from 'react';



export const FaqSlider = () => {
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
    slidesToShow: 3,
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
          slidesToShow: 3,
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
      if (FaqData.length > slideToShow) {
        setValue(slideToShow + current);
      }

    },
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {FaqData.map((faq, i) => (
          <div key={i} className="w-full overflow-hidden font-Font">
            <div className="p-5 w-[280px] sm:w-[300px] my-brakepoint:w-[320px] border-t-8 border-gray60 rounded-md bg-gray10 flex flex-col gap-6 font-Font">
                <div>
                <h3 className=' text-bold mb-6 font-Font'>{faq.title}</h3>
                <p className='text-gray50 mb-7'>{faq.comment}</p>
                <div className=' p-5 w-20 bg-gray15 hover:bg-gray10 rounded-md cursor-pointer'>Read more</div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className=' absolute -bottom-16 md:hidden font-Font text-[14px] lg:text[18px] inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-gray10 hover:bg-gray15  rounded-md cursor-pointer w-44'>View All FAQ’s</div>
      <div className=' absolute right-12 md:left-0 -bottom-14'>
        <p>{value} 0f {FaqData.length}</p>
      </div>
    </div>
  );
};