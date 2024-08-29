import React from 'react';

const MaintenanceRequestForm: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create Request</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="requested-by" className="block font-medium text-gray-700 mb-2">
            Requested by
          </label>
          <input
            type="text"
            id="requested-by"
            name="requested-by"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block font-medium text-gray-700 mb-2">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="request" className="block font-medium text-gray-700 mb-2">
            Request
          </label>
          <input
            type="text"
            id="request"
            name="request"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="asset" className="block font-medium text-gray-700 mb-2">
            Asset
          </label>
          <input
            type="text"
            id="asset"
            name="asset"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="urgency-level" className="block font-medium text-gray-700 mb-2">
            Urgency Level
          </label>
          <input
            type="text"
            id="urgency-level"
            name="urgency-level"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 10-2-3.465A4.5 4.5 0 017.5 2c2.486 0 4.5 2.014 4.5 4.5S9.986 11 7.5 11H3zm0 0v2m0-2h9m-9 0H4m0 0v-9m0 0h9m0 0V4m-9 0H3m0 0v9"
            />
          </svg>
          <span className="block mt-2 text-sm text-gray-600">
            Drag image here or <a href="#" className="text-blue-500 underline">browse image</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default MaintenanceRequestForm;