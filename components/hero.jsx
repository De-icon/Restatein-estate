import HeroImage from '@/public/img/heroimg.png'
import Image from 'next/image';

export const Hero = () => {
    return (
      <div className=" max-w-full md:px-16 px-5  py-8 lg:py-16  ">
        
        <div className=" grid grid-flow-col md:flex-row lg:flex-row w-full items-center justify-center">
          <div className=" w-full lg:w-[100%] ">
            
                <h2 className="mb-5 font-Font text-3xl font-bold tracking-tight text-AbsoluteWhite sm:text-4xl sm:leading-none  ">
                Discover Your Dream Property with Estatein
                </h2>
                <p className="pr-5 mb-5 font-Font text-base text-gray60 md:text-lg">
                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start font-Font">
                  <a  className="inline-block rounded-lg bg-gray10 hover:bg-gray15  px-8 py-3 text-center text-sm font-semibold text-AbsoluteWhite outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:bg-indigo-700 md:text-base cursor-pointer ">Learn More</a>

                  <a  className="inline-block rounded-lg  px-8 py-3 text-center text-sm font-semibold text-AbsoluteWhite outline-none ring-indigo-300 transition duration-100 bg-purple60 hover:bg-purple65 focus-visible:ring  active:text-gray-700 md:text-base cursor-pointer">Browse Properties</a>
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
        <div className=" w-[100%] lg:w-[100%] ">
          
          <Image
            className="object-cover w-full"
            src={HeroImage}
            alt="image"
          />
        </div>
        </div>
      </div>
    );
  };
