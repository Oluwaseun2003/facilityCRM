import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="min-w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium">Subject</td>
              <td className="py-2">QU-110030</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Client Name</td>
              <td className="py-2 text-blue-500">Sunville Developers</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Quotation Status</td>
              <td className="py-2">Approved</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Quotation Request Number</td>
              <td className="py-2">27</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Quotation Date</td>
              <td className="py-2">12-01-2024</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Quotation Creator</td>
              <td className="py-2">Mary Tony</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium">Terms and Conditions</td>
              <td className="py-2">Terms and Conditions</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <table className="min-w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">Product / Service Name</td>
                <td className="py-2">German Doors</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Unit</td>
                <td className="py-2">kg</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Quantity</td>
                <td className="py-2">15</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Price</td>
                <td className="py-2">₦ 18,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Sub-Total</td>
                <td className="py-2">₦ 200,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Tax (10%)</td>
                <td className="py-2">₦ 20,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Discount</td>
                <td className="py-2">------</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Grand Total</td>
                <td className="py-2">₦ 180,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;