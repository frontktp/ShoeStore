import React from "react";
import product1 from "./../images/image-product-1.jpg";
import thumb1 from "./../images/image-product-1-thumbnail.jpg";
import thumb2 from "./../images/image-product-2-thumbnail.jpg";
import thumb3 from "./../images/image-product-3-thumbnail.jpg";
import thumb4 from "./../images/image-product-4-thumbnail.jpg";
import cart from "./../images/icon-cart.svg";
const Product = () => {
  return (
    <>
      <div className="grid-cols-2 grid justify-between">
        <div className="mt-[90px] ml-[48px]">
          <img
            src={product1}
            alt="sneakers"
            className="w-[445px] h-[445px] rounded-[15px]"
          />
          <div className="mt-[32px] flex gap-x-[31px]">
            <img
              src={thumb1}
              alt="thumb1"
              className="w-[88px] h-[88px] rounded-[10px]"
            />
            <img
              src={thumb2}
              alt="thumb2"
              className="w-[88px] h-[88px] rounded-[10px]"
            />
            <img
              src={thumb3}
              alt="thumb3"
              className="w-[88px] h-[88px] rounded-[10px]"
            />
            <img
              src={thumb4}
              alt="thumb4"
              className="w-[88px] h-[88px] rounded-[10px]"
            />
          </div>
        </div>
        <div className="mt-[152px]">
          <div className="text-[13px] text-orange-500 font-bold uppercase tracking-widest">
            Sneaker Company
          </div>
          <div className="mt-[30px] w-[445px] text-neutral-800 text-[44px] font-bold leading-[48px]">
            Fall Limited Edition Sneakers
          </div>
          <div className="w-[445px] mt-[32px] text-gray-500 text-base font-normal leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </div>
          <div className="flex mt-[30px] gap-x-[20px] items-center">
            <div className=" text-neutral-800 text-[28px] font-bold">
              $125.00
            </div>
            <div className="w-[51px] h-[27px] bg-[#FFEEE1] rounded-md">
              <div className="text-orange-500 text-base font-bold justify-center items-center flex">
                50%
              </div>
            </div>
          </div>
          <div className="text-neutral-300 text-base font-bold mt-[10px] line-through leading-relaxed">
            $250.00
          </div>
          <div className="flex mt-[30px] gap-x-[16px]">
            <div className="w-[157px] h-14 bg-slate-50 rounded-[10px]">
              <div className="flex justify-center items-center">
                <button className="font-bold text-3xl text-orange-500 mr-[45px]">
                  -
                </button>
                <div>0</div>
                <button className="font-bold text-3xl text-orange-500 ml-[45px]">
                  +
                </button>
              </div>
            </div>
            <div className="w-[272px] h-14 bg-orange-500 rounded-[10px] shadow items-center flex justify-center">
              <div className="flex items-center text-white gap-x-[10px]">
                <img
                  className="w-[17.46px] h-4"
                  src={cart}
                  alt="cart"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <div>Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
