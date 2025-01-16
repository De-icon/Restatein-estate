import Box from "@/public/img/boxx.svg";
import Box2 from '@/public/img/boxx2.svg'
import Image from "next/image";
export const CallToAction = () => {
    return(
        <div className=" relative py-6 sm:py-8 lg:py-12 max-w-full">
            
            <div className="mx-auto max-w-screen-2xl px-6 md:px-16">
                <div className="flex flex-col items-center justify-between gap-5 rounded-lg p-4 sm:flex-row md:p-8 ">
                    <div>
                        <h1 className="font-bold text-AbsoluteWhite font-Font mb-10 ">Start Your Real Estate Journey Today</h1>
                        <p className="text-gray50 font-Font">Your dream property is just a click away. Whether you are looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    </div>

                    <a  className="inline-block rounded-lg w-full sm:w-[300px] bg-purple60 hover:bg-purple65 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:bg-indigo-700 md:text-base font-Font">Explore Properties</a>
                </div>
            </div>
            <Image alt="image" src={Box} className=' absolute text-gray50 object-cover right-0 -z-10 -top-10' />
            <Image alt="image" src={Box2} className=' absolute text-gray50 object-cover left-0 -z-10 -top-10' />
        </div>
    )
}