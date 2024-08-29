import React from 'react';

const Dashboard = () => {
  const requestData = [
    { title: 'Door', status: 'In Progress', location: 'Isle 2', asset: 'Door', requestedBy: 'Chi Joel', urgency: 'Critical' },
    { title: 'AC fix', status: 'In Progress', location: 'Ward 3', asset: 'Air Condition', requestedBy: 'Dami', urgency: 'Medium' },
    { title: 'AC fix', status: 'Completed', location: 'Ward 3', asset: 'Air Condition', requestedBy: 'Dami', urgency: 'Low' },
    { title: 'Despencer fix', status: 'Completed', location: 'Ward 3', asset: 'Air Condition', requestedBy: 'Dami', urgency: 'Low' },
    { title: 'Door fix', status: 'In Progress', location: 'Ward 5', asset: 'Air Condition', requestedBy: 'Seun', urgency: 'Low' },
    { title: 'AC fix', status: 'Completed', location: 'Ward 3', asset: 'Air Condition', requestedBy: 'Dami', urgency: 'Low' },
    { title: 'AC fix', status: 'Completed', location: 'Ward 3', asset: 'Air Condition', requestedBy: 'Dami', urgency: 'Low' },
    { title: 'AC fix', status: 'Completed', location: 'Ward 3', asset: 'Air Condition', requestedBy: 'Dami', urgency: 'Low' },
  ];

  return (
    <div className="h-full w-full px-6">
      {/* Tabs */}
      <div className="flex border-b-2 mb-6">
        <div className="px-4 py-2 cursor-pointer border-b-2 border-blue-500">Dashboard</div>
        <div className="px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-gray-300">Reporting</div>
      </div>

      {/* Filters */}
      <div className="flex gap-8 mb-6">
        <h3 className='text-xl font-semibold py-2'>Request Orders</h3>
        <div className="bg-sky-300 px-4 py-2 text-base rounded-lg">Date Range: Last 30 days</div>
        <div className="flex items-center bg-[#EBEEF3] text-base px-4 py-2 rounded-xl">
          <input type="text" placeholder="Search" className="bg-transparent outline-none"/>
        </div>
        <div className="bg-sky-300 px-4 py-2 rounded-lg">Status: All</div>
        <div className="bg-sky-300 px-4 py-2 rounded-lg">Filter: location</div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow shadow-[#96BFD1] text-left">
          <h2 className='text-lg'>Open</h2>
          <div className="text-2xl font-bold">2</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow shadow-[#96BFD1] text-left">
          <h2 className="text-blue-500 text-lg">In Progress</h2>
          <div className="text-2xl font-bold">2</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow shadow-[#96BFD1] text-left">
          <h2 className="text-yellow-500 text-lg">On Hold</h2>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow shadow-[#96BFD1] text-left">
          <h2 className="text-green-500 text-lg">Completed</h2>
          <div className="text-2xl font-bold">1</div>
        </div>
      </div>

      {/* Request Table */}
      <table className="w-full bg-white rounded-xl  shadow">
    <thead className="  text-white bg-sky-500 text-base font-semibold text-left">
        <tr className=''>
        <th className="p-4 ">Title</th>
        <th className="p-4">Status</th>
        <th className="p-4">Location</th>
        <th className="p-4">Asset</th>
        <th className="p-4">Requested by</th>
        <th className="p-4">Urgency level</th>
        <th className="p-4">Action</th>
        </tr>
    </thead>
    <tbody>
        {requestData.map((request, index) => (
        <tr key={index} className="hover:bg-gray-50">
            <td className="p-4 border-b">{request.title}</td>
            <td className={`p-4 border-b ${request.status === 'In Progress' ? 'text-blue-500' : request.status === 'Completed' ? 'text-green-500' : ''}`}>{request.status}</td>
            <td className="p-4 border-b">{request.location}</td>
            <td className="p-4 border-b">{request.asset}</td>
            <td className="p-4 border-b">{request.requestedBy}</td>
            <td className={`p-4 border-b ${request.urgency === 'Critical' ? 'text-red-500' : request.urgency === 'Medium' ? 'text-orange-500' : 'text-green-500'}`}>{request.urgency}</td>
            <td className="p-4 border-b">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">View</button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
    </div>
  );
};

export default Dashboard;
