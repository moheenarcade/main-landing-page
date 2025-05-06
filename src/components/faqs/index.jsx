"use client"
import React, { useState } from 'react';
import { TiMessages } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCash } from "react-icons/gi";


const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day return policy from the date of delivery. Items must be unused and in original packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship only within the listed countries on our website. More regions will be added soon!",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive an email with the tracking link.",
  },
  {
    question: "Can I cancel or change my order?",
    answer: "Yes, you can cancel or modify your order within 1 hour of placing it. Contact support for help.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto pt-12 pb-8 ">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-in-out"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg md:text-sm lg:text-lg font-[500]">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`px-5 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 lg:mt-18 flex gap-4 flex-wrap justify-between">
        <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full md:w-[23%] xl:w-[20%]">
          <TiMessages className='text-5xl' />
          <p className='text-lg md:text-sm lg:text-lg font-[500] text-center'>Customer Service</p>
        </div>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full  md:w-[23%] xl:w-[20%]">
          <GrDeliver className='text-5xl' />
          <p className='text-lg md:text-sm lg:text-lg font-[500] text-center'>Free delivery</p>
        </div> <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full md:w-[23%] xl:w-[20%]">
          <RiSecurePaymentLine className='text-5xl' />
          <p className='text-lg md:text-sm lg:text-lg font-[500] text-center'>100% guarantee</p>
        </div> <div className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm p-6 w-full  md:w-[23%] xl:w-[20%]">
          <GiCash className='text-5xl' />
          <p className='text-lg md:text-sm lg:text-lg font-[500] text-center'>Cash on delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
