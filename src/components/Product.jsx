import React, { useState, useContext } from "react";
import product1 from "./../images/image-product-1.jpg";
import product2 from "./../images/image-product-2.jpg";
import product3 from "./../images/image-product-3.jpg";
import product4 from "./../images/image-product-4.jpg";
import thumb1 from "./../images/image-product-1-thumbnail.jpg";
import thumb2 from "./../images/image-product-2-thumbnail.jpg";
import thumb3 from "./../images/image-product-3-thumbnail.jpg";
import thumb4 from "./../images/image-product-4-thumbnail.jpg";
import cart from "./../images/icon-cart.svg";
import Modal from "./Modal";
import CartContext from "./CartContext";

const Product = () => {
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  const productImage = [product1, product2, product3, product4];

  const handleCountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setCount(value);
    } else {
      setCount(1);
    }
  };

  const addCart = () => {
    const newItem = {
      productId: selectedImage,
      quantity: count,
    };
    addToCart(newItem); // from App.js
    setCount(1);
  };

  return (
    <>
      <div className="grid-cols-2 sm:text-lg md:text-xl lg:; grid justify-between relative">
        <div className="mt-[90px] ml-[48px]">
          <img
            src={productImage[selectedImage - 1]}
            alt={`product${selectedImage - 1}`}
            className="w-[445px] h-[445px] rounded-[15px]"
            // 클릭하면 모달 컴포넌트로
            onClick={() => {
              setIsModalOpen(true);
            }}
          />

          <div className="mt-[32px] flex gap-x-[31px]">
            {[thumb1, thumb2, thumb3, thumb4].map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`thumb${index + 1}`}
                className={`w-[88px] h-[88px] rounded-[10px] ${
                  selectedImage === index + 1
                    ? "border-2 border-orange-500"
                    : ""
                }`}
                onClick={() => {
                  setSelectedImage(index + 1);
                }}
              />
            ))}
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
            <div className="w-[157px] h-14 bg-slate-50 rounded-[10px] flex justify-center items-center">
              <div className="flex items-center justify-between mx-2">
                <button
                  onClick={() => setCount(count - 1)}
                  className="font-bold text-3xl text-orange-500"
                >
                  -
                </button>
                <input
                  className="w-1/3 bg-transparent text-center"
                  type="text"
                  value={count}
                  onChange={handleCountChange}
                />
                <button
                  onClick={() => setCount(count + 1)}
                  className="font-bold text-3xl text-orange-500"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={addCart}
              className="w-[272px] h-14 bg-orange-500 rounded-[10px] shadow items-center flex justify-center"
            >
              <div className="flex items-center text-white gap-x-[10px]">
                <img
                  className="w-[17.46px] h-4"
                  src={cart}
                  alt="cart"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <div>Add to cart</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Product;
