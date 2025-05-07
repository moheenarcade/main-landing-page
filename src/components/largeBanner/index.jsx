// "use client"
// import React, { useEffect, useState } from 'react'
// import Image from "next/image";
// import MainBanner from "../../../public/images/a2.png";
// import Laregbanner2 from "../../../public/images/natural ingredients (1).jpg";
// import { getProductBySlug } from "../../lib/api";


// const LargeBanner = ({ product_sku }) => {
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     console.log("product_sku largebanner", product);
//     useEffect(() => {
//         async function fetchProduct() {
//             try {
//                 const data = await getProductBySlug(product_sku);
//                 if (!data) {
//                     router.push("/not-found");
//                     return;
//                 }
//                 setProduct(data.data);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err);
//                 router.push("/not-found");
//             } finally {
//                 setLoading(false);
//             }
//         }

//         if (product_sku) {
//             fetchProduct();
//         }
//     }, [product_sku]);

//     return (
//         <>
//             <div className="main-banner pt-4 lg:pt-0">
//                 <Image className="w-full h-auto" src={MainBanner} alt="main banner" />
//             </div>
//             <div className="main-banner">
//                 <Image className="w-full h-auto" src={Laregbanner2} alt="main banner" />
//             </div>
//         </>
//     )
// }

// export default LargeBanner;



"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import MainBanner from "../../../public/images/a2.png";
import Laregbanner2 from "../../../public/images/natural ingredients (1).jpg";
import { getProductBySlug } from "../../lib/api";
import { useRouter } from 'next/navigation';

const LargeBanner = ({ product_sku }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProductBySlug(product_sku);
                if (!data) {
                    router.push("/not-found");
                    return;
                }
                setProduct(data.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                router.push("/not-found");
            } finally {
                setLoading(false);
            }
        }

        if (product_sku) {
            fetchProduct();
        }
    }, [product_sku]);

    if (loading || !product) return null;

    return (
        <>
            {/* <div className="main-banner pt-4 lg:pt-0">
                <Image className="w-full h-auto" src={MainBanner} alt="main banner" />
            </div>

            <div className="main-banner">
                <Image className="w-full h-auto" src={Laregbanner2} alt="main banner" />
            </div> */}
            {product.description && (
                <div
                    className="product-description py-6"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
            )}
        </>
    );
};

export default LargeBanner;
