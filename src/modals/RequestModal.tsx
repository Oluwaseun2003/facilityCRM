// RequestDetails.tsx
import React from 'react';
import { IRequest } from "@/src/interfaces/request";
import { MdOutlineCancel } from "react-icons/md"; // Change to Cancel icon

interface RequestDetailsProps {
  request: IRequest;
  closeModal: () => void;
}

const RequestDetails: React.FC<RequestDetailsProps> = ({ request, closeModal }) => {
  // Safely extract initials from requestedBy
  const getInitials = (name: string) => {
    if (!name) return "??"; // fallback if name is missing
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.[0] || "";
    const secondInitial = nameParts[1]?.[0] || ""; // check for a second part
    return firstInitial + secondInitial;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      <div className="bg-white rounded-lg max-w-5xl w-full h-full max-h-screen flex flex-col">
        
        {/* Modal Header */}
        <div className="flex justify-between p-6 bg-gray-100">
          <h1 className="text-xl text-blue-500 font-semibold">Door Request order details</h1>
          
          {/* Close button with Icon */}
          <button 
            onClick={closeModal} 
            className="text-red-500 bg-red-700 rounded-full p-2 hover:bg-red-600">
            <MdOutlineCancel className="w-6 h-6" />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="flex-1 flex overflow-y-auto">
          
          {/* Left Section */}
          <div className="p-8 flex-1 mr-20 border-r border-gray-400 overflow-y-auto">
            {/* Status */}
            <div className="mb-4 rounded-xl text-center justify-center bg-blue-500 py-2 px-8">
              <h2 className='text-base ml-10 gap-2 flex text-white'>
                <svg className='w-4 pt-2' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm5.707 8.707-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 14.586l6.293-6.293a1 1 0 0 1 1.414 1.414Z" fill="#138600"></path>
                </svg>
                This Request has been approved and has turned into a work order
              </h2>
            </div>

            {/* Other fields */}
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Requested by</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.requestedBy}
                disabled
              />
            </div>

             {/* Request */}
             <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Request</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.title}
                disabled
              />
            </div>

            {/* Department */}
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Department</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value="Finance"
                disabled
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Location</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.location}
                disabled
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Description</label>
              <textarea
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                disabled
                value="Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem"
              ></textarea>
            </div>

            {/* Asset */}
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Asset</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.asset}
                disabled
              />
            </div>

            {/* Urgency Level */}
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Image Level</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.image}
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Estimated Time</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.estimatedTime}
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Maintenance Cost</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.cost}
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Supplier</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.supplier}
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Supplier Number</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.supplierNum}
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block pb-2 text-base font-semibold text-gray-700">Supplier email</label>
              <input
                type="text"
                className="w-full border-2 text-gray-400 border-gray-900 py-2 px-5 rounded-xl"
                value={request.supplierEmail}
                disabled
              />
            </div>

          </div>

          {/* Right Section */}
          <div className="p-6 bg-gray-50 overflow-y-auto max-h-screen">
            <div className="space-y-6 mt-10">
              {/* Requested by */}
              <div>
                <h4 className='text-lg font-semibold pb-3'>Requested by</h4>
                <div className="flex items-center space-x-4">            
                  <div className="flex-shrink-0">                 
                    <div className="w-10 h-10 py-3 px-4 text-xl rounded-full  bg-blue-500 text-white flex items-center justify-center">
                      {getInitials(request.requestedBy)} {/* Safely get initials */}
                    </div>
                  </div>
               
                  <div>
                    <h3 className="text-lg text-gray-900 font-normal">{request.requestedBy}</h3>
                    <p className="text-sm text-gray-500">Today at 10:11 AM</p>
                    <p className="text-sm text-gray-500">Request initiated Approved: {request.title}</p>
                  </div>
                </div>
              </div>

              {/* Level 1 Approved */}
              <div>
                <h4 className='text-lg font-semibold pb-3'>Level 1: Approved</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="py-3 px-3 text-xl rounded-full bg-blue-500 text-white flex items-center justify-center">
                      DG
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 font-normal">Dami G</h3>
                    <p className="text-sm text-gray-500">Today at 10:11 AM</p>
                    <p className="text-sm text-gray-500">Level 1 Approved: Air Conditioner Quotation</p>
                  </div>
                </div>
              </div>

              {/* Level 2 Pending */}
              <div>
                <h4 className='text-lg font-semibold pb-3'>Level 2: Pending</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="py-3 px-3 text-xl rounded-full bg-blue-500 text-white flex items-center justify-center">
                      AD
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 font-normal">Dayo A</h3>
                    <p className="text-sm text-gray-500">Today at 10:11 AM</p>
                    <p className="text-sm text-gray-500">Level 2 Approval: Procurement request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-100 flex justify-end">
          <button onClick={closeModal} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
