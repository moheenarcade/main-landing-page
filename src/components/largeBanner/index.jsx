import React from 'react'
import Image from "next/image";
import MainBanner from "../../../public/images/secondbanner.avif";
import Laregbanner2 from "../../../public/images/largebanner2.avif";

const LargeBanner = () => {

    return (
        <>
            <div className="main-banner">
                <Image className="w-full h-auto" src={MainBanner} alt="main banner" />
            </div>
            <div className="main-banner">
                <Image className="w-full h-auto" src={Laregbanner2} alt="main banner" />
            </div>
        </>
    )
}

export default LargeBanner;
