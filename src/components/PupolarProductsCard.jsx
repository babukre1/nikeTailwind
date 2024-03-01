import React from "react";
import { star } from "../assets/icons";
function PupolarProductsCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full  ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex justify-start gap-3">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-palanquin leading-normal font-semibold">{name}</h3>
      <p className="text-coral-red mt-2 font-montserrat font-semibold text-2xl">{price}</p>
    </div>
  );
}

export default PupolarProductsCard;
