import React from 'react'
import { TiMessages } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCash } from "react-icons/gi";

const HowWeWork = () => {

    return (
        <div className='container mx-auto cairo-family px-6 lg:px-20 xl:px-62 lg:mt-[300px] xl:mt-[80px] 2xl:mt-[240px] pb-12 lg:pb-20'>
            <h3 className='text-3xl lg:text-4xl text-black text-center font-[700] lg:font-[500] mt-4 cairo-family'>How we work</h3>
            <p className='text-center text-md lg:text-xl text-[#57637a] pt-2 cairo-family'>To avoid any problems in processing customer requests, we follow these clear steps.</p>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12">
                <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full  md:w-[45%]">
                    <GiCash className='text-5xl' />
                    <p className='text-xl font-[700] py-2 text-center text-[#191e2a]'>We ship the order to you
                    </p>
                    <p className='text-center text-md md:text-lg text-[#57637a] line-clamp-4'>
                        After confirming the order, it will be shipped within 1-3 business days.
                    </p>
                </div>
                <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full  md:w-[45%]">
                    <GiCash className='text-5xl' />
                    <p className='text-xl font-[700] py-2 text-center text-[#191e2a]'>You order
                    </p>
                    <p className='text-center text-md md:text-lg text-[#57637a] line-clamp-4'>
                        Order the quantity you want, you will need to provide your address and contact information.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork;
