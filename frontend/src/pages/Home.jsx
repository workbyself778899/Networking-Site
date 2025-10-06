import React from 'react'

import { Link } from 'react-router'
import { RiLoginCircleFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { BiSolidNetworkChart } from "react-icons/bi";   
const Home = () => {
    return (
        <div>
            <div className='flex my-9 justify-center'>
            <BiSolidNetworkChart size={100}/>
        </div>
            <div className=' flex justify-center items-center '><section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
       
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We Connect World With Each Other
            </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            "Where every post is a conversation and every click forges a new connection. Our platform is designed to bring people closer, moving beyond the screen to foster real, lasting relationships"
        </p>
        <div class="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link to={"/login"} class="inline-flex gap-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Log in <RiLoginCircleFill />
            </Link>
            <Link to={"/register"} class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">                
                Register
            </Link>
        </div>
        <div className='flex justify-center'>
            <IoIosPeople size={100}/>
        </div>
       
    </div>
</section></div>
        </div>
    )
}

export default Home