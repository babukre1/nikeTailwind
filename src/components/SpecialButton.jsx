import React from "react";

function SpecialButton({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) {
  console.log(borderColor);
  return (
    <>
      <button
        className={`px-8 py-4 ${
          backgroundColor ? backgroundColor : "bg-coral-red"
        } rounded-full ${
          borderColor ? `${borderColor} border-[1px]` : ""
        } flex gap-5 justify-center items-center ${
          textColor ? textColor : "text-white"
        } text-lg ${fullWidth && "w-full"}`}
      >
        {label}
        {iconURL && <img src={iconURL} alt="arrow" />}
      </button>
    </>
  );
}

export default SpecialButton;
