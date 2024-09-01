import React from "react";
import { Button } from "@mui/material";

const MaintenanceRequestForm: React.FC = () => {
  return (
    <div>
      <div className="px-4 ml-10 mb-12 py-1.25 border-b-2 border-gray-300">
        <h1>New Maintenance Request</h1>
      </div>
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg border-2 border-gray-300">
        <h2 className="text-lg font-semibold pb-5 absolute top-[6.8rem] bg-white text-sky-500 mb-6">Create Request</h2>
        <form>
          <div className="mb-4 flex">
            <label htmlFor="requested-by" className="w-1/5  font-medium text-gray-700 mr-4">
              Requested by
            </label>
            <input
              type="text"
              id="requested-by"
              name="requested-by"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="department" className="w-1/5 font-medium text-gray-700 mr-4">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="request" className="w-1/5 font-medium text-gray-700 mr-4">
              Request
            </label>
            <input
              type="text"
              id="request"
              name="request"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="location" className="w-1/5 font-medium text-gray-700 mr-4">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="description" className="w-1/5 font-medium text-gray-700 mr-4">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Asset
            </label>
            <input
              type="text"
              id="asset"
              name="asset"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="urgency-level" className="w-1/5 font-medium text-gray-700 mr-4">
              Urgency Level
            </label>
            <input
              type="text"
              id="urgency-level"
              name="urgency-level"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Image Upload Section */}
          <div className="mb-4 flex items-center">
            <div className='w-1/5'>
            <label htmlFor="image-upload" className="font-medium text-gray-700">
              Image
            </label>
            </div>

            <div className="border-2 border-dashed border-gray-400 w-full ml-16 p-6 text-center rounded-lg mt-2">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-12 w-12 mx-auto text-gray-400"
  fill="none"
  viewBox="0 0 48 48"
  stroke="currentColor"
>
  <g>
    <path
      d="M36.496 34.167H11.44c-.404 0-.731-.327-.731-.731V14.564c0-.404.327-.731.731-.731h25.056c.404 0 .731.327.731.731v18.872c0 .404-.327.731-.731.731z"
      stroke="#303030"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="10.872 25.968 16.434 19.621 28.117 29.342 32.378 26.785 37.167 30.219"
      stroke="#303030"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="32.023"
      cy="20.61"
      r="1.345"
      stroke="#303030"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </g>
</svg>
              <span className="block mt-2 text-sm text-gray-600">
                Drag image here or{' '}
                <label
                  htmlFor="image-upload"
                  className="text-blue-500 underline cursor-pointer"
                >
                  browse image
                </label>
              </span>
              <input
                type="file"
                id="image-upload"
                name="image-upload"
                accept="image/*"
                className="hidden"
              />
            </div>
        </div>

        <div className="mb-4 flex items-center">
            <div className='w-1/5'>
            <label htmlFor="image-upload" className="font-medium text-gray-700">
              Quotation
            </label>
            </div>

            <div className="flex-1 ml-5 py-20 border text-center border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300">
           
              <span className="block mt-2 text-sm text-gray-600">
                <label
                  htmlFor="image-upload"
                  className="text-blue-500 text-center cursor-pointer"
                >
                  Add quotation{' '}
                </label>
              </span>
              <input
                type="file"
                id="quotation-upload"
                name="quotation-upload"
                accept="file/*"
                className="hidden"
              />
            </div>
        </div>

        <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Maintenance Cost
            </label>
            <input
              type="text"
              id="mainCost"
              name="mainCost"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Labour Cost
            </label>
            <input
              type="text"
              id="lCost"
              name="lCost"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Additional Cost
            </label>
            <input
              type="text"
              id="aCost"
              name="aCost"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Estimated Time
            </label>
            <input
              type="text"
              id="eTime"
              name="eTime"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Supplier
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Supplier Number
            </label>
            <input
              type="text"
              id="suppNumber"
              name="suppNumber"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="asset" className="w-1/5 font-medium text-gray-700 mr-4">
              Supplier Email
            </label>
            <input
              type="text"
              id="suppEmail"
              name="suppEmail"
              className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
   
        </form>
      </div>
    </div>
  );
};

export default MaintenanceRequestForm;
