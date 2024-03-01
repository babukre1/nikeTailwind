import React from "react";
import SpecialButton from "../components/SpecialButton";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
      className="flex justify-between max-lg:flex-col
     w-full max-container "
    >
      <div className="flex flex-col flex-1 ">
        <h2 className="text-4xl font-palanquin capitalize lg:max-w-lg font-bold ">
          We Provide You <span className="text-coral-red">Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <SpecialButton label="View Details" />
        </div>
      </div>
      <div className=" flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
}
