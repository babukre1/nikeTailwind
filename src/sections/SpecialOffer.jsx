import React from "react";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import SpecialButton from "../components/SpecialButton";

export default function SpecialOffer() {
  return (
    <section
      className="flex justify-between items-center 
    max-xl:flex-col-reverse gap-10 max-container "
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col flex-1 w-full ">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-10">
          <SpecialButton label="View Details" iconURL={arrowRight} />
          <SpecialButton 
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"

          
          />
        </div>
      </div>
    </section>
  );
}
