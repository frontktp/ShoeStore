import React, { useContext } from "react";
import CartContext from "./CartContext";

// const Cart = ({ cartList = [], setCartList }) => {
const Cart = () => {
  const { cartList = [], setCartList } = useContext(CartContext);
  const handleDelete = (productId) => {
    const updateCartList = cartList.filter(
      (item) => item.productId !== productId
    );
    setCartList(updateCartList);
  };
  return (
    <>
      <div className="z-2 absolute top-[95px] right-[90px] w-[360px] h-[256px] bg-white rounded-[10px] shadow-2xl">
        <div className="w-full py-4 border-b-[1px] border-slate-200">
          <div className="ml-[24px] mt-[24px] text-base font-bold">Cart</div>
        </div>
        <div className="text-center font-bold text-gray-500 leading-relaxed ">
          {cartList.length === 0
            ? "Your cart is empty."
            : cartList.map((item) => (
                <React.Fragment key={item.productId}>
                  <div>
                    품번: {item.productId}, 수량 : {item.quantity}
                    <button
                      onClick={() => handleDelete(item.productId)}
                      className="mx-2"
                    >
                      삭제
                    </button>
                  </div>
                </React.Fragment>
              ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
