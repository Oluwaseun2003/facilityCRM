"use client";
import React, { useState } from "react";
import Table from "../../../../components/Tables/Tables";
import { Imanagement, Staff, StaffRole } from "../../../../models/staff";
import { ColumnDef } from "@tanstack/react-table";
import { StaffDetailsModal } from "../../../../modals/StaffModal";
import ManagementDetailsModal from "../../../../modals/ManagementModal";

const StaffManagementPage = () => {
  const [activeTab, setActiveTab] = useState("Staff");
  const [showModal, setShowModal] = useState(false);

  const staffData: Staff[] = [
    {
      id: "1",
      email: "chi.joel@example.com",
      firstName: "Chi",
      lastName: "Joel",
      role: StaffRole.Executive,
      branch: "Head Office",
      department: "Finance",
    },
    {
      id: "2",
      email: "dami.gold@example.com",
      firstName: "Dami",
      lastName: "Gold",
      role: StaffRole.FacilityTeam,
      branch: "Head office",
      department: "Logistics",
    },
    {
      id: "3",
      email: "dayo.a@example.com",
      firstName: "Dayo",
      lastName: "A",
      role: StaffRole.Finance,
      branch: "Lekki Office",
      department: "Procurement",
    },
  ];

  const managementData: Imanagement[] = [
    {
      id: "1",
      role: StaffRole.Executive,
      department: "Procurement",
    },
    {
      id: "2",
      role: StaffRole.Executive,
      department: "Procurement",
    },
    {
      id: "3",
      role: StaffRole.Executive,
      department: "Procurement",
    },
    {
      id: "4",
      role: StaffRole.Executive,
      department: "Procurement",
    },
    {
      id: "5",
      role: StaffRole.Executive,
      department: "Procurement",
    },
  ];

  // Staff columns
  const staffColumns: ColumnDef<Staff>[] = [
    {
      accessorKey: "id",
      header: "S/N",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorFn: (row: Staff) => `${row.firstName} ${row.lastName}`,
      id: "staff",
      header: "Staff",
      cell: (info) => (
        <span className="text-blue-500 cursor-pointer">{info.getValue() as string}</span>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "branch",
      header: "Branch",
    },
    {
      id: "action",
      header: "Action",
      cell: () => (
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          View
        </button>
      ),
    },
  ];

  // Management columns
  const managementColumns: ColumnDef<Imanagement>[] = [
    {
      accessorKey: "id",
      header: "S/N",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "action",
      header: "Action",
      cell: () => (
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          View
        </button>
      ),
    },
  ];

  return (
    <div className="h-full w-full px-6">
      {/* Tabs */}
      <div className="flex border-b-2 mb-6">
        <div
          className={`px-4 py-2 text-lg font-bold cursor-pointer ${
            activeTab === "Staff" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("Staff")}
        >
          Staff
        </div>
        <div
          className={`px-4 py-2 text-lg font-bold cursor-pointer ${
            activeTab === "Management" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("Management")}
        >
          Management
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Staffs: 500</div>
        <div className="flex gap-4">
          <div className="flex items-center bg-[#EBEEF3] text-base px-4 py-2 rounded-xl">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none"
            />
            <span className="ml-2">🔍</span>
          </div>
          <div className="bg-sky-300 text-white px-4 py-2 rounded-lg cursor-pointer">
            Filter: All
          </div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
            + Create New
          </div>
        </div>
      </div>

      {/* Table */}
      {activeTab === "Staff" ? (
        <Table data={staffData} columns={staffColumns} />
      ) : (
        <Table data={managementData} columns={managementColumns} />
      )}

      {/* Modals */}
      {showModal && activeTab === "Staff" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <StaffDetailsModal onClose={() => setShowModal(false)} isOpen={true} />
          </div>
        </div>
      )}

      {showModal && activeTab === "Management" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <ManagementDetailsModal onClose={() => setShowModal(false)} isOpen={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagementPage;
