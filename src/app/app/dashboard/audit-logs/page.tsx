"use client";
import React, { useState } from "react";
import Table from "@/src/components/Tables/Tables";
import Card from "@/src/components/UI/Cards";
import { IAudit } from "@/src/interfaces/audit";
import { getStatusStyle } from "@/src/utils/styles/styles";
import { type ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ReportTableSkeleton } from "@/src/components/UI/skeletons";
import { Suspense } from "react";

const AuditLogs = () => {
  const [activeTab, setActiveTab] = useState("Audit");

  const columnHelper = createColumnHelper<IAudit>();

  const auditData: IAudit[] = [
    {
      SN: 1,
      staff: "Chi Joel",
      role: "Admin",
      activity: "Approved request",
      details: "Level 2 Approval on Door request",
      date: "2022-12-12",
    },
    {
      SN: 2,
      staff: "Dayo A",
      role: "Director",
      activity: "Approved request",
      details: "Approval on SunvilleProcurement",
      date: "2024-01-15",
    },
    {
      SN: 3,
      staff: "Dami Gold",
      role: "Worker",
      activity: "Approved request",
      details: "Level 2 Denial on AC fix request",
      date: "2024-01-15",
    },
    {
      SN: 4,
      staff: "Seun Femi",
      role: "Manager",
      activity: "Approved request",
      details: "Approval on SunvilleProcurement",
      date: "2023-01-15",
    },
  ];

  const logsData: IAudit[] = [
    {
      SN: 1,
      staff: "John Doe",
      role: "Admin",
      activity: "Login",
      details: "Logged into the system",
      date: "2024-06-28",
    },
    {
      SN: 2,
      staff: "Jane Smith",
      role: "Manager",
      activity: "Logout",
      details: "Logged out of the system",
      date: "2024-06-28",
    },
  ];

  const columns: ColumnDef<IAudit, any>[] = [
    columnHelper.accessor("SN", {
      header: () => "S/N",
    }),
    columnHelper.accessor("staff", {
      header: () => "Staff",
    }),
    columnHelper.accessor("role", {
      header: () => "Role",
    }),
    columnHelper.accessor("activity", {
      header: () => "Activity",
    }),
    columnHelper.accessor("details", {
      header: () => "Details",
    }),
    columnHelper.accessor("date", {
      header: () => "Date",
      cell: (info) => {
        const date = new Date(info.getValue());
        return date.toLocaleDateString(); // Format the date as needed
      },
    }),
  ];

  return (
    <div className="h-full w-full px-6">
      {/* Tabs */}
      <div className="flex border-b-2 mb-6">
        <div
          className={`px-4 py-2 text-lg font-bold cursor-pointer ${
            activeTab === "Audit" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("Audit")}
        >
          Audit
        </div>
        <div
          className={`px-4 py-2 text-lg font-bold cursor-pointer ${
            activeTab === "Logs" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("Logs")}
        >
          Logs
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-end gap-8">
        <div className="flex items-center bg-[#EBEEF3] text-base px-4 py-2 rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="bg-sky-300 px-4 py-2 rounded-lg">Filter: all</div>
      </div>

      {/* Conditional Rendering of Tables */}
      {activeTab === "Audit" ? (
        <Suspense fallback={<ReportTableSkeleton />}>
        <Table data={auditData} error={false} loading={false} columns={columns} />
        </Suspense>
      ) : (
        <Suspense fallback={<ReportTableSkeleton />}>
        <Table data={logsData} error={false} loading={false} columns={columns} />
        </Suspense>  
      )}
    </div>
  );
};

export default AuditLogs;
