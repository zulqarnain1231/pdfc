import React from "react";
import Image from "next/image";
const ProductBadge = () => {
  return (
    <div className="w-full sm:h-[54px] h-[46px] relative">
      <Image
        src={"/Assets/ProductHunt.png"}
        className="w-full h-full object-contain pointer-events-none"
        alt=""
        fill
      />
    </div>
  );
};

export default ProductBadge;
