"use client"

import { useState } from "react";
import NavBarIcon from '@/public/img/icons/narBarIcon.svg'
import Logo from '@/public/img/Logo.png'
import Image from "next/image";
import Link from "next/link";


export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div className="bg-gray10 w-full ">
        <div className=" px-4 py-5 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-10 lg:px-8">
          <div className="relative flex items-center justify-between">
           
          <Link href="/">
            <Image alt="logo" src={Logo} className='w-[100px] cursor-pointer' />
          
          </Link>    
              
            <ul className="flex text-[14px] lg:text[18px] items-center hidden space-x-5 sm:flex lg:flex text-AbsoluteWhite font-Font list-none ">
              <li>
                <Link href="/" 
                className="font-medium tracking-wide transition-colors duration-200 hover:bg-gray08 cursor-pointer p-3 rounded-md ">
                
                  Home
                
                </Link>
                
              </li>
              <li>
              <Link href="/about"
              className="font-medium tracking-wide transition-colors duration-200 hover:bg-gray08 cursor-pointer p-3 rounded-md ">
                
                  About Us
               
                </Link>
              </li>
              <li>
              <Link href="/properties"
              className="font-medium tracking-wide transition-colors duration-200 hover:bg-gray08 cursor-pointer p-3 rounded-md ">
                
                  Properties
                
                </Link>
              </li>
              <li>
              <Link href="/service"
              className="font-medium tracking-wide transition-colors duration-200 hover:bg-gray08 cursor-pointer p-3 rounded-md ">
                
                  Service
                
                </Link>
              </li>
            </ul>
            <Link href="/contactus"
            className=" font-Font text-[14px] lg:text[18px] sm:inline-flex lg:inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-purple60 hover:bg-purple65  rounded-md hidden cursor-pointer"
                  >
                
                  Contact Us
               
              </Link>
            <div className=" sm:hidden lg:hidden ">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 focus:outline-none focus:shadow-outline   bg-transparent shawdow-none border-none"
                onClick={() => setIsMenuOpen(true)}
              >
                
                <Image alt="image" src={NavBarIcon} className='w-50' />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-gray10 border rounded shadow-sm ">
                    <div className="flex items-center justify-between mb-4">
                      <div>

                      <Image alt="image" src={Logo} className='w-[100px]' />

                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline bg-transparent shawdow-none border-none"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-AbsoluteWhite" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 font-Font list-none">
                        <li>
                        <Link href="/"
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 text-AbsoluteWhite cursor-pointer">
                          
                            Home
                          
                          </Link>
                        </li>
                        <li>
                        <Link href="/about"
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 text-AbsoluteWhite cursor-pointer">
                          
                            About Us
                          
                          </Link>
                        </li>
                        <li>
                        <Link href="/properties"
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 text-AbsoluteWhite cursor-pointer">
                          
                          Properties
                          
                          </Link>
                        </li>
                        <li>
                        <Link href="/service"
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 text-AbsoluteWhite cursor-pointer">
                          
                            Service
                          
                          </Link>
                        </li>
                        <li>
                        <Link href="/contactus"
                        className="inline-flex items-center justify-center  h-12 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 rounded shadow-md bg-gray08 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor-pointer">
                         
                            Contact Us
                          
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };