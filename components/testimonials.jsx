import Star from '@/public/img/star.png'
import {TestimonialsSlider} from './testimonialsSlider'
import Image from 'next/image'



export const Testimonials = () => {
  return (
    <div className=' max-w-full p-5 mb-24 md:px-16 text-AbsoluteWhite font-Font flex flex-col gap-6'>
        <Image alt="image" src={Star} className=' w-16' />
        <h1 className=' font-bold tracking-wide sm:text-5xl md:mb-12 md:text-6xl' >What Our Clients Say</h1>
        <div className=' w-full flex justify-between align-center gap-12' >
            <p className=' text-gray50'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            <div className='font-Font text-[14px] lg:text[18px] md:inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-gray10 hover:bg-gray15  rounded-md hidden cursor-pointer w-48'>View All Testimonials</div>
        </div>
        <TestimonialsSlider />
       
    </div>
  )
}
