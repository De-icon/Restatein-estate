
import HeroImage from '@/public/img/Container.png'
import Image from 'next/image'




export const Hero2 = () => {
    return(
        <section className="flex flex-col-reverse justify-between md:px-16 px-5  py-8 lg:py-16 gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">

        <h2 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Discover Your Dream Property with Estatein</h2>

        <p className="mb-8 leading-relaxed font-Font text-base text-gray60 md:mb-12 lg:w-4/5 xl:text-lg">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start font-Font">
          <a className="inline-block rounded-lg bg-gray10 hover:bg-gray15 px-8 py-3 text-center text-sm font-semibold text-AbsoluteWhite outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:bg-indigo-700 md:text-base">Learn More</a>

          <a className="inline-block rounded-lg bg-purple60 hover:bg-purple65 px-8 py-3 text-center text-sm font-semibold text-AbsoluteWhite outline-none ring-indigo-300 transition duration-100  focus-visible:ring active:text-gray-700 md:text-base">Browse Properties</a>
        </div>

        <div className=" grid grid-flow-col-3 lg:grid-flow-col sm:grid-flow-col gap-4 mt-10  ">
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
        <Image alt="image" src={HeroImage} className=' object-cover w-full h-full' />
      </div>
    </section>
    )
}