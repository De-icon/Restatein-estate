"use client"

import { TestimonialsData } from '../constant/data';
import Slider from "react-slick";
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import Image from 'next/image';



export const TestimonialsSlider = () => {
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
      if (TestimonialsData.length > slideToShow) {
        setValue(slideToShow + current);
      }

    },
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {TestimonialsData.map((testimonail, i) => (
          <div key={i} className="w-full overflow-hidden font-Font">
            <div className="p-5 w-[280px] sm:w-[300px] my-brakepoint:w-[320px] border-t-8 border-gray60 rounded-md bg-gray10 flex flex-col gap-6 font-Font">
              <div className='flex flex-row gap-1 items-center justify-start w-full'>
                <FaStar className="w-10" color='#FFE500' />
                <FaStar className="w-10" color='#FFE500' />
                <FaStar className="w-10" color='#FFE500' />
                <FaStar className="w-10" color='#FFE500' />
                <FaStar className="w-10" color='#FFE500' />
              </div>
              <div>
                <h2 className=' my-5 '>{testimonail.title}</h2>
                <p className=' text-gray50'>{testimonail.comment}</p>
              </div>
                <div className=' flex gap-3 items-center justify-start'>
                    <Image alt="image" src={testimonail.image} className=' w-16' />
                    <div className=' flex flex-col gap-1'>
                        <p className='text-reguler'>{testimonail.name}</p>
                        <p className=' text-gray50'> {testimonail.location}</p>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className=' absolute -bottom-16 md:hidden font-Font text-[14px] lg:text[18px] inline-flex items-center justify-center h-10 px-5 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-gray10 hover:bg-gray15  rounded-md cursor-pointer w-44'>View All Testimonials</div>
      <div className=' absolute right-12 md:left-0 -bottom-14'>
        <p>{value} 0f {TestimonialsData.length}</p>
      </div>
    </div>
  );
};