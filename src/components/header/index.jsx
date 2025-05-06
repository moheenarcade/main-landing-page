import Image from 'next/image';
import React from 'react';
import TopBanner from "../../../public/images/headertop-banner_converted.png";

const Header = () => {
  return (
    <div className='header-main container mx-auto px-6 lg:px-20 xl:px-62'>
      <div className="header-banner w-full">
        <Image className='w-full h-auto' src={TopBanner} alt='top banner' />
      </div>
    </div>
  )
}

export default Header;
