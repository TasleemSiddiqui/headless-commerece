import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CoupanSec = () => {
  return (
    <section className="px-6 py-4 text-white">
      <div className="p-5 bg-blue-100 grid md:grid-cols-2 grid-col-1  w-full h-fit">
        <div className="bg-[#6328DF] px-5 py-10">
          <h2 className="text-4xl font-semibold">You can get a 10% discount</h2>
          <p className="text-xl">Would you like to claim it?</p>

          <p className="  text-base mt-6">
            It's a concise way to communicate the offer and encourage the reader
            to take advantage of the discount.
          </p>
        </div>
        <div className="bg-[#6328DF] px-5 py-10 w-full space-y-4">
        <div className="flex w-full  items-center space-x-2 rounded-lg bg-white p-2  ">
      <Input type="email" className="text-black border-none" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
    <p className="text-base">To learn more about how we handle your personal resgister information, please review our privacy policy.</p>
     <p> &#63; Coupon code is one-time use only.</p>
        </div>
      </div>
    </section>
  );
};

export default CoupanSec;
