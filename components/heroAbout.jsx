
import HeroAboutIng from '@/public/img/heroabout_img.png'
import Star from '@/public/img/star.png'
import Image from 'next/image'




export const HeroAbout = () => {
    return(
        <section className="flex flex-col-reverse justify-between md:px-16 px-5  py-8 lg:py-16 gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <Image alt="image" src={Star} className=' w-20' />
        <h2 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Our Journey</h2>

        <p className="mb-8 leading-relaxed font-Font text-base text-gray60 md:mb-12 lg:w-5/5 xl:text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we have expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>

        

        <div className=" grid grid-flow-col-3 lg:grid-flow-col sm:grid-flow-col gap-4  ">
            <div className=" bg-gray10  font-Font p-4  rounded-xl flex flex-col gap-3 items-center lg:items-start sm:items-start  ">
                <h2 className=' text-AbsoluteWhite'>200+</h2>
                <p className=' text-gray60 text-xs'>Happy Customers</p>
            </div>
            <div className="bg-gray10  font-Font p-4 rounded-xl flex flex-col gap-3 items-center lg:items-start sm:items-start ">
                <h2 className=' text-AbsoluteWhite'>10k+</h2>
                <p className=' text-gray60 text-xs'>Properties For Clients</p>
            </div>
            <div className="bg-gray10  font-Font p-4 rounded-xl flex flex-col gap-3 items-center lg:items-start sm:items-start  col-span-2 sm:col-span-1 lg:col-span-1  ">
                <h2 className=' text-AbsoluteWhite'>16+</h2>
                <p className=' text-gray60 text-xs'>Years Of Experience</p>
            </div>
                      
        </div>
        
      </div>
      
      <div className="h-auto overflow-hidden rounded-lg   lg:h-auto xl:w-5/12">
        <Image alt="image" src={HeroAboutIng} className=' object-cover w-full h-full' />
      </div>
    </section>
    )
}