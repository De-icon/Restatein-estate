import React from 'react'
import {Filters} from '@/components/filters'
import Star from "@/public/img/star.png"
import Image from 'next/image'

export default function Properties () {
  return (
    <>
            <section className='md:px-16 px-5  py-8 lg:py-16 bg-gray10'>
                <Image alt='image' src={Star} className=' w-20' />
                <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Find Your Dream Property</h1>
                <p className="mb-8 leading-relaxed font-Font text-base text-gray60 md:mb-12 lg:w-5/5 xl:text-lg">
                  Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey 
                </p>
            </section>
            <Filters />
    </>
  )
}
