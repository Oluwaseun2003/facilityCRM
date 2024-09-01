import React from 'react';

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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M6 6h12M6 18h12" />
        </svg>
      </button>
        <p className={`text-sm pb-2 ${approved ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
        <p className="text-lg font-bold">{amount}</p>
      </div>
     
    </div>
  );
};

export default QuotationCard;