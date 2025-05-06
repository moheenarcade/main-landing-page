'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { LuBadgeCheck } from "react-icons/lu";
import Laoder from '../../components/loader/loader';

const Success = () => {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    console.log(orderData, "order data");

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

    if (loading) return <Laoder />;
    if (!orderData) return <p className="text-center py-10">No order data found.</p>;
    return (
        <div className='success-order py-12 lg:py-20'>
            <div className="container mx-auto px-6 lg:px-20 2xl:px-32">
                <div className="flex flex-col justify-center text-center items-center">
                    <LuBadgeCheck className='text-center text-6xl mb-8' />
                    <h1 className='text-2xl md:text-3xl uppercase mb-3'>Thank you for your purchase</h1>
                    <p className='text-xl'>Your order number is: <b>#{orderId}</b></p>
                    <p className='text-md lg:text-xl'>We will email you an order confirmation with details and tracking info</p>
                    <div className="order-summary text-[12px] md:text-[14px] lg:text-[16px] w-full md:w-[70%] xl:w-[40%] border-1 border-gray-200 bg-white rounded-xl shadow-xl p-2 md:p-6 mt-10">
                        <h2 className='text-lg lg:text-xl text-start pb-2'>Order Summary</h2>
                        <hr className="bg-gray-300 text-gray-300" />
                        <div className="flex justify-between pt-2 text-gray-700" >
                            <p className="mb-0 text-start"> Order Name:</p>
                            <p className="font-bold mb-0 text-end"> {orderData.customer_name} </p>
                        </div>
                        <div className="flex justify-between pt-2 text-gray-700" >
                            <p className="mb-0 text-start whitespace-nowrap"> Product Name:</p>
                            <p className="font-bold mb-0 py-0 text-end line-clamp-1"> {orderData.order_products[0].product_name} </p>
                        </div>
                        <div className="flex justify-between text-gray-700" >
                            <p className="mb-0 text-start"> Contact Number: </p>
                            <p className="font-bold mb-0 text-end"> {orderData.customer_mobile} </p>
                        </div>
                        <div className="flex justify-between text-gray-700" >
                            <p className="mb-0 text-start"> City:</p>
                            <p className="font-bold mb-0 text-end"> {orderData.customer_country} </p>
                        </div>
                        <div className="flex justify-between text-gray-700" >
                            <p className="mb-0 text-start"> State:</p>
                            <p className="font-bold mb-0 text-end"> {orderData.customer_city} </p>
                        </div>
                        <div className="flex justify-between text-gray-700" >
                            <p className="mb-0 text-start"> House Number:</p>
                            <p className="font-bold mb-0 text-end"> {orderData.customer_area} </p>
                        </div>
                        <div className="flex justify-between pb-2 text-gray-700 " >
                            <p className="mb-0 text-start"> Total Quantity:</p>
                            <p className="font-bold mb-0 text-end"> {orderData.order_products[0].order_product_quantity} </p>
                        </div>
                        <hr className="bg-gray-300 text-gray-300" />

                        <div className="flex justify-between pt-2" >
                            <p className="font-bold mb-0 text-start"> Total Price:</p>
                            <p className="font-bold text-success mb-0 text-end"> {orderData.order_total_amount} </p></div>
                    </div>
                    <Link href="/" className='w-fit mx-auto cursor-pointer border-[1px] hover:text-white rounded-full hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out py-3 text-md md:text-lg px-6 hover:bg-black text-black font-[500] mt-6'>Continue Shopping </Link>
                </div>
            </div>
        </div>
    )
}

export default Success;
