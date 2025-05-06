import React from 'react'
import { TiMessages } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCash } from "react-icons/gi";

const BuyFullGurenty = () => {

    return (
        <div className='bg-[#000] py-12 mt-20 mb-12 lg:mb-62 xl:mb-42 2xl:mb-52'>
            <div className="container mx-auto px-6 lg:px-20 xl:px-62">
                <div className="pb-12">
                    <h2 className='text-sm lg:text-lg text-white text-center'>Why With Us ?</h2>
                    <h3 className='text-2xl lg:text-4xl text-white text-center font-[500] mt-4'>Buy with full guarantees</h3>
                </div>
                <div className="bg-white px-4 lg:px-12 xl:px-6 2xl:px-12 py-12 xl:py-6 2xl:py-12 lg:py-20 rounded-lg lg:-mb-[300px] xl:mb-[-180px] 2xl:-mb-[200px] shadow-lg">
                    <div className="flex gap-6 xl:gap-0 flex-wrap justify-between text-black">
                        <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full  md:w-[48%] xl:w-[22%]">
                            <TiMessages className='text-5xl xl:text-3xl 2xl:text-5xl' />
                            <p className='text-lg xl:text-md 2xl:text-lg text-center font-[600] py-2'>Customer Service</p>
                            <p className='text-center tex-sm xl:text-[13px] 2xl:text-sm text-[#57637a] line-clamp-3'>We offer you the opportunity to return items free of charge, within 30 days of the delivery date.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full md:w-[48%] xl:w-[22%]">
                            <GrDeliver className='text-5xl xl:text-3xl 2xl:text-5xl' />
                            <p className='text-lg xl:text-md 2xl:text-lg text-center font-[600] py-2'>Free delivery</p>

                            <p className='text-center tex-sm xl:text-[13px] 2xl:text-sm text-[#57637a] line-clamp-4'>
                                Enjoy free express delivery for all our products to wherever you are in the Gulf countries.

                            </p>
                        </div> <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full md:w-[48%] xl:w-[22%]">
                            <RiSecurePaymentLine className='text-5xl xl:text-3xl 2xl:text-5xl' />
                            <p className='text-lg xl:text-md 2xl:text-lg text-center font-[600] py-2'>100% guarantee</p>
                            <p className='text-center tex-sm xl:text-[13px] 2xl:text-sm text-[#57637a] line-clamp-4'>
                                This product, after its global success, is now available for the first time in the Gulf countries.

                            </p>
                        </div> <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full md:w-[48%] xl:w-[22%]">
                            <GiCash className='text-5xl xl:text-3xl 2xl:text-5xl' />
                            <p className='text-lg xl:text-md 2xl:text-lg text-center font-[600] py-2'>Cash on delivery</p>
                            <p className='text-center tex-sm xl:text-[13px] 2xl:text-sm text-[#57637a] line-clamp-4'>
                                Cash on delivery is supported for this product. Place your order and pay when the product arrives to you.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyFullGurenty;
