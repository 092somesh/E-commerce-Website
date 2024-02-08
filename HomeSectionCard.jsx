import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="https://rukminim1.flixcart.com/image/612/612/xif0q/top/8/t/m/xxl-amrcrochetlacetop-madstitches-apparels-private-limited-original-imagr39r3kfmb5vy.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">Notisifer</h3>
        <p className="mt-2 text-sm text-grey-500">somesh ki khud ki short</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
