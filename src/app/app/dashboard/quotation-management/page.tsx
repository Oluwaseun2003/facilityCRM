'use client'

import React, { useState } from 'react';
import QuotationCard from '@/src/components/UI/QuotationCard';
import Overview from '@/src/components/UI/QuotaionOverview';
import { BaseButton } from '@/src/components/UI/Button';

import { FaArrowLeft, FaPlus } from 'react-icons/fa';

const QuotationPage: React.FC = () => {
  const [isCreatingQuotation, setIsCreatingQuotation] = useState(false);

  const handleCreateQuotation = () => {
    setIsCreatingQuotation(true);
  };

  const handleBack = () => {
    setIsCreatingQuotation(false);
  };

  const [items, setItems] = useState([{ name: '', unit: '', quantity: '', price: '' }]);

  const handleAddItem = () => {
    setItems([...items, { name: '', unit: '', quantity: '', price: '' }]);
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  return (
    <div className='h-full w-full px-6'>
      <div className="flex justify-between items-center border-b-2 mb-6">
        <div className="px-4 py-2 text-lg font-bold cursor-pointer border-b-2 border-blue-500">
          All Quotations
        </div>
      </div>
      <div className='flex justify-end mb-8'>
        {isCreatingQuotation ? (
          <BaseButton 
            text="Back" 
            color="secondary" 
            className='w-[15rem]'
            onClick={handleBack}
            icon={<FaArrowLeft />} 
            position="icon-first"  
          />
        ) : (
          <BaseButton 
            text="Create Quotation" 
            color="secondary" 
            className='w-[15rem]'
            onClick={handleCreateQuotation}
            icon={<FaPlus />} 
            position="icon-first"  
          />
        )}
      </div>
      <div className='rounded-lg border border-gray-400'>
        {isCreatingQuotation ? (
          <div className="p-4 bg-white">
              <h2 className="text-lg font-bold pb-4 border-b border-gray-400 pl-6 mb-6">Create New Quotation</h2>
            <div className=" mb-20">
              <div className="mb-4 flex items-center">
              <label htmlFor="subject" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>

              <div className="mb-4 flex items-center">
              <label htmlFor="qreqNum" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Quotation Request Number
              </label>
              <input
                type="text"
                id="qreqNum"
                name="qreqNum"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>


              <div className="mb-4 flex items-center">
              <label htmlFor="clientName" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>


              <div className="mb-4 flex items-center">
              <label htmlFor="qStatus" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Quotation Status
              </label>
              <input
                type="text"
                id="qStatus"
                name="qStatus"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>


              <div className="mb-4 flex items-center">
              <label htmlFor="qDate" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Quotation Date
              </label>
              <input
                type="text"
                id="qDate"
                name="qDate"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>

              <div className="mb-4 flex items-center">
              <label htmlFor="qCreator" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Quotation Creator
              </label>
              <input
                type="text"
                id="qCreator"
                name="qCreator"
                className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>
            </div>
            <div className="mb-4">
              <table className="w-full border-collapse">
                <thead className='bg-gray-100 w-full'>
                  <tr className="bg-gray-100 border-b">
                    <th className="p-2 textbase font-semibold text-left">Product / Service Name</th>
                    <th className="p-2 text-left">Unit</th>
                    <th className="p-2 text-left">Quantity</th>
                    <th className="p-2 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Product / Service Name"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={item.unit}
                          onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Unit"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Quantity"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={item.price}
                          onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Price"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-start mb-8">
              <BaseButton
              text='Add new item'
              color='secondary'
              className='text-white bg-sky-500'
              icon={<FaPlus />}
              position='icon-first'
              onClick={handleAddItem}/>
              
            </div>

            
            <div className="mb-20">
              <div className="mb-4 flex items-center">
              <label htmlFor="subTotal" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Sub Total
              </label>
              <input
                type="text"
                id="subTotal"
                name="subTotal"
                className="px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>

              <div className="mb-4 flex items-center">
              <label htmlFor="tax" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Tax
              </label>
              <input
                type="text"
                id="tax"
                name="tax"
                className=" px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>

              <div className="mb-4 flex items-center">
              <label htmlFor="discount" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Discount
              </label>
              <input
                type="text"
                id="discount"
                name="discount"
                className=" px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>

              <div className="mb-4 flex items-center">
              <label htmlFor="gTotal" className="w-1/5 font-bold text-base text-gray-800 mr-4">
                Grand Total
              </label>
              <input
                type="text"
                id="gTotal"
                name="gTotal"
                className=" px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              </div>
              </div>
            <div className="flex justify-end">
              <BaseButton 
                  text="Save Quotation" 
                  color="primary" 
                  className='w-[15rem]'
                  onClick={() => alert('Quotation Saved!')}
              />
            </div>
          </div>
        ) : (
          <div className="min-h-screen bg-white flex">
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
        )}
      </div>
    </div>
  );
};

export default QuotationPage;
