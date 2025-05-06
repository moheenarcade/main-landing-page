import React from 'react'
import Image from "next/image";
import MainBanner from "../../../public/images/secondbanner_converted.png";
import Laregbanner2 from "../../../public/images/largebanner2_converted.png";

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
