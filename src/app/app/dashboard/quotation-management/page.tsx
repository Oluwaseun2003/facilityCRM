import React from 'react';
import QuotationCard from '@/src/components/UI/QuotationCard';
import Overview from '@/src/components/UI/QuotaionOverview';

const QuotationPage: React.FC = () => {
  return (
    <div className='h-full w-full px-6'>
    <div className="flex border-b-2 mb-6">
    <div className="px-4 py-2 text-lg font-bold cursor-pointer border-b-2 border-blue-500">
      All Quotations
    </div>
  </div>
  <div className='rounded-lg border border-gray-200'>
  <div className="flex border-b-2 mb-6">
    <div className="px-4 py-2 text-lg font-bold cursor-pointer">
      Saved Quotations
    </div>
  
  </div>
    <div className="min-h-screen bg-white flex ">
      
      {/* Sidebar / Left Section */}
      <div className="w-1/3 p-4">
        <QuotationCard
          id="QU-110030"
          clientName="Sunville Developers"
          date="12-01-2024"
          amount="₦6,000,000"
          status="Approved"
          approved={true}
        />
        <QuotationCard
          id="QU-110031"
          clientName="JOEL techcare"
          date="12-01-2024"
          amount="₦1,000,000"
          status="Approved"
          approved={true}
        />
      </div>

      {/* Main Content / Right Section */}
      <div className="w-2/3 p-4">
        <Overview />
      </div>
    </div>
    </div>
    </div>
  );
};

export default QuotationPage;