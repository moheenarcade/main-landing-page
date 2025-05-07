'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { LuBadgeCheck } from "react-icons/lu";
import Laoder from '../../components/loader/loader';
import { BsCartCheckFill } from "react-icons/bs";
import Image from 'next/image';
import CartImage from "../../../public/images/largebanner2_converted.png"
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [storeSettings, setStoreSettings] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;
      try {
        const res = await fetch(`${baseUrl}/store/order/${orderId}`);
        const data = await res.json();
        setOrderData(data.data);
      } catch (err) {
        console.error('Failed to fetch order data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  useEffect(() => {
    const stored = localStorage.getItem('storeSettings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setStoreSettings(parsed);
      } catch (err) {
        console.error("Error parsing storeSettings from localStorage:", err);
      }
    }
  }, []);

  if (loading) return <Laoder />;
  if (!orderData) return <p className="text-center py-10">No order data found.</p>;
  const orderTotal = parseFloat(orderData.order_total_amount);
  const freeShippingLimit = parseFloat(storeSettings?.free_shipping_limit || "0");
  const shippingAmount = parseFloat(storeSettings?.shipping_amount || "0");

  return (
    <div className='success-order py-12 lg:py-20'>

      <div className="container mx-auto px-6 lg:px-20 xl:px-62">
        <div className="flex justify-between flex-wrap">
          <div className="w-full lg:w-[46%] flex flex-col justify-center items-center cairo-family">
            <Image className='w-[80px] lg:w-[40px]' width={200} height={200} src="https://assets.lightfunnels.com/account-26241/images_library/7ed790b9-ca39-43f6-a1d2-651104f0490c.svg" alt="product image" />
            <h1 className='text-[#191e2a] text-[26px] lg:text-[40px] font-[600] text-center py-3'>
              Your order has been successfully registered, thank you for choosing our store.
            </h1>
            <p className='text-center text-[#57637a] font-[500] text-[18px] lg:text-[20px]'>
              We are happy that you chose our store and we hope that your experience with our products is very special. We will contact you to confirm and ship your order.
            </p>
            <p className='text-[22px] lg:text-[20px] text-red-500 text-center font-[700] lg:font-[500] py-4'>
              Please answer the phone to enjoy a quick shopping experience  ⚠️
            </p>
          </div>
          <div className="w-full lg:w-[46%] pt-12">
            <div className="w-full border-[1px] border-[#f0f2f6] rounded-lg px-6 lg:px-8 py-6 lg:py-12 shadow-lg bg-white cairo-family">
              <p className='bg-[#f4f5f7] py-2 rounded-lg px-2 text-[#191e2a] font-[600] lg:font-[700] text-[18px]'>Application Summary</p>
              <div className="py-6 flex justify-between items-center">
                <div className="flex items-center text-[#191e2a] gap-4">
                  <Image className='w-[68px] h-[68px] border-[1px] border-[#d6dce9] rounded-[6px] overflow-hidden shadow-lg object-cover' src={CartImage} alt="cart image" />
                  <p className='text-[16px] font-[600] uppercase'>{orderData.order_products[0].product_name} </p>
                </div>
                <p className='text-[16px] font-[600] uppercase text-end'>{orderData.order_total_amount}  {storeSettings.currency_code}</p>
              </div>

              <p className='bg-[#f4f5f7] py-2 rounded-lg px-2 text-[#191e2a] font-[600] lg:font-[700] text-[18px]'>Invoice Summary</p>
              <div className="flex items-center justify-between pt-4">
                <p className='text-[15px] font-[500] text-[#57637a]'>Customer Name</p>

                <p className='text-[16px] font-[600] text-end'>{orderData.customer_name}</p>
              </div>
              <div className="flex items-center justify-between pt-3">
                <p className='text-[15px] font-[500] text-[#57637a]'>Shipping and handling</p>
                <p className='text-[16px] font-[600] text-end'>
                  {orderTotal < freeShippingLimit
                    ? `${shippingAmount} ${storeSettings?.currency_code}`
                    : 'Free'}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3">
                <p className='text-[15px] font-[500] text-[#57637a]'>Discount coupon</p>
                <p className='text-[16px] font-[600] text-end'>N/A</p>
              </div>
              <div className="border-b-[1px] border-b-[#d6dce9] my-3"></div>

              <div className="flex items-center justify-between pt-3">
                <p className='text-[18px] font-[400] text-[#57637a]'>Total amount:</p>
                <p className='text-[23px] font-[600] text-end'>{orderData.order_total_amount}  {storeSettings.currency_code}</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 felx-wrap pt-4">
              <div className="flex items-center gap-1">
                <AiOutlineMail className='text-[#57637a] text-xl' />
                <p className='text-[#57637a] text-[17px]'>Support@bionakhel.com</p>
              </div>
              <div className="flex items-center gap-1">
                <IoCallOutline className='text-[#57637a] text-xl' />
                <p className='text-[#57637a] text-[17px]'>+9715084653764</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessContent;
