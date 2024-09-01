'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useState } from 'react';

const TopNav = (): JSX.Element => {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const getPageTitle = (path: string) => {
    const pageMap: Record<string, string> = {
      '/app/dashboard': 'Dashboard',
      '/app/dashboard/workflow-management': 'Workflow Management',
      '/app/dashboard/request-submission': 'Request Submission',
      '/app/maintenance-request': 'Maintenance Request',
      '/app/dashboard/audit-logs': 'Audit Trail and Logs',
      '/app/dashboard/request-summary': 'Request Summary',
      '/app/dashboard/staff-management': 'Staff and Management',
    };
    return pageMap[path] || 'Unknown Page';
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white py-4 px-6 shadow-md">
      {/* Page Title */}
      <div className="text-xl font-semibold pl-28">
        {getPageTitle(pathname)}
      </div>

      {/* User Profile Section */}
      <div className="relative flex flex-col items-end">
        <div onClick={toggleProfileMenu} className="cursor-pointer flex flex-col items-center">
          <h3 className="font-bold">{`Chi-Joel`}</h3>
          <span className="font-light text-sm">{`Admin`}</span>
        </div>

        {/* Dropdown Menu */}
        {isProfileOpen && (
          <div className="absolute right-0 mt-14 w-36 bg-white border rounded shadow-md">
            <Link href="/app/profile" className="block px-4 py-2 hover:bg-gray-100">
              My Profile
            </Link>
            <Link href="/app/settings" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </Link>
            <Link href="/login" className="block px-4 py-2 text-red-500 hover:bg-gray-100">
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
