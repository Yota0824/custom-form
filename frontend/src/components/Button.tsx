import React from "react";

export const Button = ({ type, variant = "primary", onClick, children }) => {
  return (
      <button
        onClick={onClick}
        type={type}
        className={`text-white px-4 py-2 rounded-lg mr-3 w-36
        ${variant == "primary" && "bg-blue-500 hover:bg-blue-600"} 
        ${variant == "secondary" && "bg-gray-500 hover:bg-gray-600"}
        `}
      >
        {children}
      </button>
  );
};
