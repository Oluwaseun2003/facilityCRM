// File path: src/modals/ManagementDetailsModal.tsx

import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

interface ManagementDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ManagementDetailsModal: React.FC<ManagementDetailsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('General');
  const [roleName, setRoleName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-1/2 p-8 rounded-lg shadow-lg relative">
        {/* Header */}
        <div
        className='flex bg-slate-600 justify-between items-center mb-6'>
          <h2 className="text-xl text-sky-700 font-semibold">Role details</h2>
          <button onClick={onClose} className="text-red-500 text-xl font-bold"><MdCancel /></button>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 ${activeTab === 'General' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            onClick={() => setActiveTab('General')}
          >
            General
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'Permission' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            onClick={() => setActiveTab('Permission')}
          >
            Permission
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'General' && (
          <div className="space-y-4">
            {/* Role Name */}
           {/* Role Name Input Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Role Name</label>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2"
        />
      </div>

      {/* Department Section as a Styled Container */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Department</label>
        <div className="w-full border border-gray-300 bg-gray-100 rounded-lg p-4 space-y-2">
          {['Safety', 'Finance', 'Logistics', 'Procurement'].map((department) => (
            <label key={department} className="flex items-center space-x-2">
              <input
                type="radio"
                name="department"
                value={department}
                checked={selectedDepartment === department}
                onChange={() => setSelectedDepartment(department)}
                className="form-radio"
              />
              <span>{department}</span>
            </label>
          ))}
        </div>
      </div>
          </div>
        )}

        {activeTab === 'Permission' && (
          <div>
            <p>Permission settings will go here.</p>
          </div>
        )}

        {/* Footer Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => alert('Edit Details clicked')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Edit Details
          </button>
          <button
            onClick={() => alert('Delete clicked')}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementDetailsModal;
