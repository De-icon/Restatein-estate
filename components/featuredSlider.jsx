"use client";

import { Properties } from '../constant/data';
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import Slider from "react-slick";
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const FeaturedSlider = () => {
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
      if (Properties.length > slideToShow) {
        setValue(slideToShow + current);
      }

    },
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {Properties.map((property, i) => (
          <div key={i} className="w-full overflow-hidden font-Font">
            <div className="p-5 w-[280px] sm:w-[340px] my-brakepoint:w-[320px] border-t-8 border-gray60 rounded-md bg-gray10 flex flex-col gap-6">
              <div className=" w-[280px] my-brakepoint:w-[300px] sm:w-[300px]">
                <Image alt="image" className="object-contain w-full" src={property.image} />
              </div>
              <div className="flex flex-col gap-3 w-[300px]">
                <h3>{property.title}</h3>
                <p className="text-gray40">{property.description}</p>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <div className="flex items-center justify-center p-2 bg-gray10 rounded-full">
                  <MdBed className="w-8" />
                  <p className="text-[10px]">{property.bedrooms}-Bedroom</p>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray10 rounded-full">
                  <FaBath className="w-10" />
                  <p className="text-[10px]">{property.bathrooms}-Bathroom</p>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray10 rounded-full">
                  <MdVilla className="w-10" />
                  <p className="text-[10px]">Villa</p>
                </div>
              </div>
              <div className="flex w-full items-center gap-12">
                <div className="flex flex-col gap-3">
                  <p className="text-gray40 text-[14px]">Price</p>
                  <p className="font-semibold">{property.price}</p>
                </div>
                <div className="font-Font text-[10px] sm:text-[14px] inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-purple60 hover:bg-purple65 rounded-md cursor-pointer w-48">
                  View Property Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className=' absolute -bottom-16 md:hidden font-Font text-[14px] lg:text[18px] inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-gray10 hover:bg-gray15  rounded-md cursor-pointer w-44'>View All Properties</div>
      <div className=' absolute right-12 md:left-0 -bottom-14'>
        <p>{value} 0f {Properties.length}</p>
      </div>
    </div>
  );
};