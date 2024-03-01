import React from "react";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import SpecialButton from "../components/SpecialButton";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

export default function Hero() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col
      justify-center min-h-screen"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl
         max-sm:text-[72px]
          max-sm:leading-[62px] max-sm:text-red-500
           font-bold "
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap
           relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 mb-16 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <SpecialButton label="Shop Now" iconURL={arrowRight} />
        <div className="mb-8 flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-palanquin text-4xl font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center items-center
       xl:min-h-screen max-xl:py-40 bg-primary
        bg-cover bg-hero bg-cente"
      >
        <img
          src={bigShoeImage}
          alt="big-shoe"
          width={610}
          height={500}
          className="object-contain z-10 relative "
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
