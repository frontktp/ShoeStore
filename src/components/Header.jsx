import React, { useState } from "react";
import logo from "./../images/logo.svg";
import avatar from "./../images/image-avatar.png";
import cart from "./../images/icon-cart.svg";
import Menulist from "./Menulist";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="flex items-center pb-[50px] border-b-[1px] border-[#E4E9F2] border- justify-between">
        <div className="flex">
          <img
            className="w-[137.5px] h-[20px] mr-[56.5px]"
            src={logo}
            alt="sneakers"
          />
          <Menulist />
        </div>

        <div className="flex items-center">
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            <img src={cart} alt="cart" className="w-[21.821px] h-[20px]" />
          </button>
          <img src={avatar} alt="user" className="w-[50px] ml-[46px]" />
        </div>
      </header>
      {/* {isCartOpen && <Cart cartList={cartList} setCartList={setCartList} />} */}
      {isCartOpen && <Cart />}
    </>
  );
};

export default Header;
