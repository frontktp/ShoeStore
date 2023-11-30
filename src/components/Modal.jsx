import React from "react";

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="top-0 absolute">
        <button onClick={onClose}>Close</button>
        <div className="w-screen h-screen opacity-80 bg-black">
          <img
            className="w-[550px] h-[550px] rounded-[15px]"
            src="https://via.placeholder.com/550x550"
            alt="product"
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
