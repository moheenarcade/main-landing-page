"use client"
import React, { useEffect, useState } from 'react'
import CountdownTimer from '../countdownTimer'
import Faqs from '../faqs';
import { getProductBySlug } from '../../lib/api';
import BuyForm from '../buyForm';
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../context/LanguageContext";

const GetInNow = ({ product_sku }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log('product_sku here', product)
    const [currencyCode, setCurrencyCode] = useState('OMR');
    const { t } = useTranslation();
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const storeSettingRaw = localStorage.getItem('storeSettings');
        if (storeSettingRaw) {
            try {
                const storeSetting = JSON.parse(storeSettingRaw);
                if (storeSetting?.currency_code) {
                    setCurrencyCode(storeSetting.currency_code);
                }
            } catch (err) {
                console.error("Failed to parse storeSetting from localStorage", err);
            }
        }
    }, []);

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

    return (
        <div className='get-it-now-main rounded-xl p-3 lg:p-6 my-0 lg:my-12'>
            <div className="clock-timer relative z-[9999] py-6 px-4 lg:px-12 rounded-xl flex flex-col md:flex-row gap-6 justify-center items-center">
                <p className='text-[white] text-xl text-center md:text-start lg:text-4xl font-[500]'>{t("Get_it_now_before_it")} </p>
                <div className="clock-sec">
                    <CountdownTimer initialHours={0} initialMinutes={5} initialSeconds={0} />
                </div>
            </div>

            {product && product.prices && product.prices.length > 0 && (() => {
                const originalPrice = parseFloat(product.prices[0].price);
                const salePrice = parseFloat(product.prices[0].sale_price);
                const discountPercent = originalPrice > 0
                    ? Math.round(((originalPrice - salePrice) / originalPrice) * 100)
                    : 0;

                return (
                    <>
                        <div className="discount-price relative border-y-[1px] mt-6 flex items-center justify-center md:justify-between">
                            <div className="flex flex-row justify-start items-start ml-0 w-full py-4 lg:py-6 gap-2 md:gap-6 text-[#57637a] ">
                                <p className='text-xl lg:text-3xl font-[700]'>{salePrice.toFixed(2)} {currencyCode}</p>
                                <p className='text-xl lg:text-3xl line-through font-[500] text-[#57637a]'>{originalPrice.toFixed(2)} {currencyCode}</p>
                            </div>
                            <div className="dicousnt-mobile-badge text-white bg-red-600 py-1 px-3 rounded-lg font-[600] block md:hidden">
                                -{discountPercent}%
                            </div>
                            <div className="hidden md:block badges absolute top-[-140px] lg:-top-36 right-6 mx-auto ">
                                <p className='pt-12'>
                                    <span className="firstLine">GET UP TO</span><br />
                                    <span className="secondLine">{discountPercent}%</span><br />
                                    <span className="thirdLine">Discount</span><br />
                                </p>
                            </div>
                        </div>
                        <div className="dicount-desc text-start font-[700] w-full md:w-[50%] pt-4">
                            <p className='text-[15px] md:text-xl'>{t('Now_and_for_a_limited_time')} {discountPercent}% {t('discount_and_free_delivery')}</p>
                            <p className='text-[15px] md:text-xl text-red-600'>{t('Tax_included_this_offer_is_limited')}</p>
                        </div>
                    </>
                );
            })()}

            <div className="pt-6 lg:pt-20 text-start lg:text-center">
                <p className='text-lg lg:text-3xl font-[800] lg:font-[700]'>{t('To_order_please_fill_in_the_boxes_below')}</p>
                <div className="price-selection mt-2 lg:mt-4">

                    {product?.discount_prices?.map((option, index) => {
                        const quantity = option.quantity;
                        const totalPrice = parseFloat(option.price);
                        const originalUnitPrice = parseFloat(product.prices[0].price);
                        const originalTotal = originalUnitPrice * quantity;
                        const discountPercent = Math.round(((originalTotal - totalPrice) / originalTotal) * 100);

                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`group single-price mb-4 cursor-pointer relative flex flex-col md:flex-row justify-between items-center border-[2px] rounded-xl py-3 px-3 lg:px-8 transition-all duration-[0.3s] ease-in-out
                ${selectedIndex === index ? 'border-black bg-gray-100 scale-[1.01]' : 'border-[#838383] hover:bg-gray-100 hover:scale-[1.01] hover:border-black'}
            `}
                            >
                                <div class="rPyoc block md:hidden text-[12px]" bis_skin_checked="1"><font><font>Most requested</font></font><p><span class="qC_pa"></span><span class="oy8sJ"></span></p></div>
                                <div className="flex items-start w-full lg:items-center gap-4">
                                    <div className={`checkbox h-6 w-6 rounded-full border-[2px] flex items-center justify-center
                    ${selectedIndex === index ? 'border-black bg-black' : 'border-[#838383] group-hover:border-black'}
                `}>
                                        {selectedIndex === index && <div className="h-3 w-3 bg-white rounded-full"></div>}
                                    </div>
                                    <div className="">
                                        <p className={`text-md text-start md:text-xl font-[600] transition-all
                    ${selectedIndex === index ? 'text-black' : 'text-[#626262] font-[600] group-hover:text-black'}
                `}>
                                            Buy {quantity} - Save {discountPercent}%
                                        </p>
                                        <div className="block md:hidden">
                                            <div className={`text-sm md:text-2xl gap-4 lg:gap-0 flex flex-row lg:flex-col justify-start md:justify-end italic transition-all
                ${selectedIndex === index ? 'text-black font-bold' : 'text-[#626262] group-hover:text-black'}
            `}>
                                                <p className='whitespace-nowrap'>{totalPrice.toFixed(2)} {currencyCode}</p>
                                                <p className="line-through whitespace-nowrap italic">{originalTotal.toFixed(2)} {currencyCode}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="hidden md:block">
                                    <div className={`text-sm md:text-2xl gap-4 lg:gap-0 flex flex-row lg:flex-col justify-start md:justify-end italic transition-all
                ${selectedIndex === index ? 'text-black font-[700]' : 'text-[#626262] group-hover:text-black'}
            `}>
                                        <p className='whitespace-nowrap'>{totalPrice.toFixed(2)} {currencyCode}</p>
                                        <p className="line-through whitespace-nowrap italic">{originalTotal.toFixed(2)} {currencyCode}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {product?.discount_prices?.length > 0 && (
                <BuyForm
                    product={product}
                    selectedQuantity={product.discount_prices[selectedIndex].quantity}
                    selectedTotalPrice={parseFloat(product.discount_prices[selectedIndex].price)}
                />
            )}
            <Faqs />
        </div>
    )
}

export default GetInNow;
