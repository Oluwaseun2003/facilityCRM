"use client";
import Table from "@/src/components/Tables/Tables";
import Card from "@/src/components/UI/Cards";
import { IRequest } from "@/src/interfaces/request";
import { getStatusStyle } from "@/src/utils/styles/styles";
import { type ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";

const RequestSummary = () => {
  const columnHelper = createColumnHelper<IRequest>();

  const requestData = [
    {
      title: "Door",
      status: "In Progress",
      location: "Isle 2",
      asset: "Door",
      requestedBy: "Chi Joel",
      urgency: "Critical",
    },
    {
      title: "AC fix",
      status: "In Progress",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Medium",
    },
    {
      title: "AC fix",
      status: "Completed",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Low",
    },
    {
      title: "Despencer fix",
      status: "Completed",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Low",
    },
    {
      title: "Door fix",
      status: "In Progress",
      location: "Ward 5",
      asset: "Air Condition",
      requestedBy: "Seun",
      urgency: "Low",
    },
    {
      title: "AC fix",
      status: "Completed",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Low",
    },
    {
      title: "AC fix",
      status: "Completed",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Low",
    },
    {
      title: "AC fix",
      status: "Completed",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Low",
    },
  ];
  const columns: ColumnDef<IRequest, any>[] = [
    columnHelper.accessor("title", {
      header: () => "title",
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => {
        const style = getStatusStyle(info.getValue());
        return <div style={style}> {info.getValue()}</div>;
      },
    }),
    columnHelper.accessor("location", {
      header: () => "location",
    }),
    columnHelper.accessor("asset", {
      header: () => "asset",
    }),
    columnHelper.accessor("requestedBy", {
      header: () => "requested By",
    }),
    columnHelper.accessor("urgency", {
      header: () => "Urgency level",
      cell: (info) => {
        const style = getStatusStyle(info.getValue());
        return <div style={style}> {info.getValue()}</div>;
      },
    }),
    columnHelper.accessor((rowData) => rowData, {
      id: "actions",
      header: () => "Actions",
      cell: (info) => (
        <div
          className="flex gap-3 items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div className="bg-[#0284C7] px-2 rounded-full p-1">
            <h3 className="text-white ">View</h3>
          </div>
        </div>
      ),
    }),
  ];

  return (
    <div className="h-full w-full px-6">
      {/* Tabs */}
      <div className="flex border-b-2 mb-6">
        <div className="px-4 py-2 text-lg cursor-pointer border-b-2 border-blue-500">
          Request
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-8 mb-6">
      <h3 className="text-xl font-semibold py-2">Total Request:{`500`}</h3>

        <div className="bg-sky-300 px-4 py-2 text-base rounded-lg">
          Date Range: Last 30 days
        </div>
        <div className="flex items-center bg-[#EBEEF3] text-base px-4 py-2 rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="bg-sky-300 px-4 py-2 rounded-lg">Status: All</div>
        <div className="bg-sky-300 px-4 py-2 rounded-lg">Filter: location</div>
      </div>

      {/* Request Table */}
      <Table
        data={requestData ?? []}
        error={false}
        loading={false}
        // onRowClick={(rowData) => {
        //   //  setSingleDisplay(true);
        // }}
        columns={columns as Array<ColumnDef<IRequest>>}></Table>
    </div>
  );
};

export default RequestSummary;
