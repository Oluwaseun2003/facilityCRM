import React from 'react';
import { SlOptions } from "react-icons/sl";


interface QuotationCardProps {
  id: string;
  clientName: string;
  date: string;
  amount: string;
  status: string;
  approved: boolean;
}

const QuotationCard: React.FC<QuotationCardProps> = ({ id, clientName, date, amount, status, approved }) => {
  return (
    <div className="bg-white border border-gray-400 p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
      <div>
        <p className="text-lg font-bold pb-2">{id}</p>
        <h4 className="text-blue-500 text-base pb-2">{clientName}</h4>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <div className="flex flex-col items-end">
      <button className="text-gray-500 pb-2">
      <SlOptions className='w-8 h-8 text-black' />

      </button>
        <p className={`text-sm pb-2 ${approved ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
        <p className="text-lg font-bold">{amount}</p>
      </div>
     
    </div>
  );
};

export default QuotationCard;