import React from "react";

const ConfirmOrderItem = () => {
  return (
    <div className="flex items-center justify-between sm:px-10 px-2 sm:flex-3 border-b-1 border-2  my-2  shadow-2xs">
      <div className="flex items-center sm:space-x-20 space-x-2">
        <div className="w-15">
          <img src="home.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="font-bold sm:text-2xl">Pizza</h1>
        </div>
      </div>

      <div className="flex items-center sm:space-x-10 space-x-3 font-bold">
        <div>1</div>
        <div>*</div>
        <div>400.50</div>
      </div>

      <div className="font-bold text-green-800">
      $400.50
      </div>
    </div>
  );
};

export default ConfirmOrderItem;
