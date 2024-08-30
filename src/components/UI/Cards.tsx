import React from "react";

interface cardProps {
  title: string;
  number: string;
}

const Card = ({ title, number }: cardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow shadow-[#96BFD1] text-left">
      <h2 className="text-lg">{title}</h2>
      <div className="text-2xl font-bold">{number}</div>
    </div>
  );
};

export default Card;
