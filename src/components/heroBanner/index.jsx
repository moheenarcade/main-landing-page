import React from 'react';
import Image from "next/image";
import TopBanner from "../../../public/images/headertop-banner_converted.png";

const HeroBanner = ({ products }) => {
    if (!products || products.length === 0 || !products[0].images || products[0].images.length === 0) {
        return null;
    }

    const imagePath = products[0].images[0].image;
    const fullImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${imagePath}`;

    return (
        <>
            {/* <div className='header-main pt-0 lg:pt-4'>
                <div className="header-banner w-full">
                    <Image className='w-full h-auto' src={TopBanner} alt='top banner' />
                </div>
            </div> */}
            <div className="main-banner pt-0 lg:pt-4">
                <Image unoptimized
                    className="w-full h-auto"
                    src={fullImageUrl}
                    alt="main banner"
                    width={1200}
                    height={600}
                />
            </div>
        </>
    );
};

export default HeroBanner;
