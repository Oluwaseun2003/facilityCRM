'use client';
import { useState } from 'react';

const notifications = [
  {
    id: 1,
    title: 'Request Approved (level 1): Air Conditioner leaking',
    email: 'Chijoel@gmail.com',
    time: '40 minutes ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Request Created: Air Conditioner leaking',
    email: 'Chijoel@gmail.com',
    time: '5 hours ago',
    unread: false,
  },
  // Add more notifications as needed
];

export default function NotificationsPage() {
  const [selectedTab, setSelectedTab] = useState<'All' | 'Unread'>('All');

  const filteredNotifications = selectedTab === 'Unread'
    ? notifications.filter(notification => notification.unread)
    : notifications;

    return (
        <div className="h-full w-full px-6">
          {/* Tabs */}
          <div className="flex border-b-2 mb-6">
            <div className="px-4 py-2 text-lg font-bold cursor-pointer border-b-2 border-blue-500">
              All Notifications
            </div>
          </div>


        <div className='rounded-lg border border-gray-200'>
          <div className="flex justify-between items-center border-b p-4">
         <div className="flex space-x-4">
          <button
            className={`py-2 px-4 ${selectedTab === 'All' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            onClick={() => setSelectedTab('All')}
          >
            All
          </button>
          <button
            className={`py-2 px-4 ${selectedTab === 'Unread' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            onClick={() => setSelectedTab('Unread')}
          >
            Unread
          </button>
        </div>
        <button className="text-blue-500">Mark all as read</button>
      </div>
      <div className="p-4">
        {filteredNotifications.map(notification => (
          <div key={notification.id} className="flex items-center border-b py-4">
            <div className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold">
              CJ
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">{notification.title}</p>
              <p className="text-gray-600 text-base">{notification.email}</p>
              <p className="text-gray-600 text-base">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
        
        </div>
      );
}
