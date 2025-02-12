import React from "react";

export const Button = ({ type,variant="primary",onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        `text-white px-4 py-2 rounded-lg 
        ${variant == "primary" && "bg-blue-500 hover:bg-blue-600"} 
        ${variant == "secandary" && "bg-gray-500 hover:bg-gray-600"}
        `}
    >
      {children}
    </button>
  );
};
