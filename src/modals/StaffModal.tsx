import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { BaseButton } from '../components/UI/Button';

interface StaffDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffDetailsModal: React.FC<StaffDetailsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-1/2 p-8 rounded shadow-lg">
        
        {/* Header with Title and Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Staff Details</h2>
          <button onClick={onClose} className="text-red-500 text-xl font-bold">
            <MdCancel />
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Employee ID" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Surname" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Firstname" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Pin" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <input type="text" placeholder="User Role" className="w-full p-2 border rounded" />
        </form>

        {/* Footer with Action Buttons */}
        <div className="flex justify-between mt-6">
          <BaseButton 
            text="Edit Details" 
            color="primary" 
            onClick={() => alert('Details Edited')} 
            className="w-[10rem]"
            icon={<FaEdit />} 
            position="icon-first" 
          />
          <BaseButton 
            text="Delete" 
            color="danger" 
            onClick={() => alert('User Deleted')} 
            className="w-[10rem]"
            icon={<FaTrash />} 
            position="icon-first" 
          />
        </div>
      </div>
    </div>
  );
};

// Parent component for testing the modal
const ParentComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <BaseButton 
        text="Open Staff Details" 
        color="secondary" 
        onClick={handleOpenModal} 
        className="w-[15rem]"
      />
      <StaffDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

// export default StaffDetailsModal;