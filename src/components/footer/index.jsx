import Image from 'next/image';
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import PaymentCard from "../../../public/images/footer-cards.svg"


const Footer = () => {

  return (

    <div className='footer-main py-8 bg-[#191e2a] px-4 2xl:px-20'>
      <ul className='flex flex-wrap items-center gap-4 justify-center text-white'>
        <li className='cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition-all duration-[0.3s] ease-in-out'>Return Terms</li>
        <li className='cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition-all duration-[0.3s] ease-in-out'>Terms of Service</li>
        <li className='cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition-all duration-[0.3s] ease-in-out'>privacy policy</li>
        <li className='cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition-all duration-[0.3s] ease-in-out'>Contact us</li>
      </ul>
      <ul className='flex flex-wrap justify-center items-center gap-4 mt-6 text-white text-2xl'>
        <li className='cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out' ><FaTwitter /></li>
        <li className='cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out'><FaInstagram /></li>
        <li className='cursor-pointer hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out'><FaFacebook /></li>
      </ul>
      <div className="flex flex-wrap gap-4 lg:gap-12 mt-12 justify-center lg:justify-between items-center text-white px-6 lg:px-62">
        <Image src={PaymentCard} alt='payment card' />
        <p className='text-sm'>Copyright © 2025. By BioNakheel</p>
      </div>
    </div>
  )
}

export default Footer;
