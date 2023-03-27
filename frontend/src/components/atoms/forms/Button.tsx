import React from "react";

type ButtonProps = {
  type: "submit" | "button";
  varient: "primary" | "border" | "text";
  buttonText: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ type, buttonText, varient, handleClick }: ButtonProps) => {
  const varientClass = () => {
    if (varient === "primary") {
      return "bg-indigo-500 text-white text-md py-2 rounded-md";
    }
    if (varient === "border") {
      return "bg-transparent text-black text-md border border-gray-400";
    }
    if (varient === "text") {
      return "bg-transparent text-black text-md";
    }
  };
  return (
    <button
      className={`w-full ${varientClass()}`}
      type={type}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
