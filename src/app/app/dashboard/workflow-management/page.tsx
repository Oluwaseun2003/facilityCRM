"use client";
// import Table from "@/src/components/Tables/Tables";
import Table from "../../../../components/Tables/Tables";
import Card from "../../../../components/UI/Cards";
import { IRequest } from "../../../../interfaces/request";
import { getStatusStyle } from "../../../../utils/styles/styles";
import { Suspense } from "react";
import { type ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React, { useState } from "react";
import RequestDetails from "../../../../modals/RequestModal";
import { CardsSkeleton } from "../../../../components/UI/skeletons";


const WorkFlow = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal state
  const [selectedRequest, setSelectedRequest] = useState<IRequest | null>(null); // Manage selected request data

  const columnHelper = createColumnHelper<IRequest>();

  const requestData: IRequest[] = [
    {
      title: "Door",
      status: "In Progress",
      location: "Isle 2",
      asset: "Door",
      requestedBy: "Chi Joel",
      urgency: "Critical",
      image: "",
      estimatedTime: "12/04/24",
      cost: "",
      supplier: "",
      supplierNum: "",
      supplierEmail: "",
      quotation: {
        id: "",
        clientName: "",
        status: "",
        date: "",
        amount: "",
        overview: {
          subject: "",
          clientName: "",
          status: "",
          requestNumber: "",
          date: "",
          creator: "",
          terms: "",
          productName: ""
        }
      }
    },
    {
      title: "AC fix",
      status: "In Progress",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Medium",
      image: "",
      estimatedTime: "12/04/24",
      cost: "",
      supplier: "",
      supplierNum: "",
      supplierEmail: "",
      quotation: {
        id: "",
        clientName: "",
        status: "",
        date: "",
        amount: "",
        overview: {
          subject: "",
          clientName: "",
          status: "",
          requestNumber: "",
          date: "",
          creator: "",
          terms: "",
          productName: ""
        }
      }
    },
    {
      title: "Despencer fix",
      status: "Completed",
      location: "Ward 3",
      asset: "Air Condition",
      requestedBy: "Dami",
      urgency: "Low",
      image: "",
      estimatedTime: "12/04/24",
      cost: "",
      supplier: "",
      supplierNum: "",
      supplierEmail: "",
      quotation: {
        id: "",
        clientName: "",
        status: "",
        date: "",
        amount: "",
        overview: {
          subject: "",
          clientName: "",
          status: "",
          requestNumber: "",
          date: "",
          creator: "",
          terms: "",
          productName: ""
        }
      }
    },
  ];

  const columns: ColumnDef<IRequest, any>[] = [
    columnHelper.accessor("title", {
      header: () => "Title",
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => {
        const style = getStatusStyle(info.getValue());
        return <div style={style}> {info.getValue()}</div>;
      },
    }),
    columnHelper.accessor("location", {
      header: () => "Location",
    }),
    columnHelper.accessor("asset", {
      header: () => "Asset",
    }),
    columnHelper.accessor("requestedBy", {
      header: () => "Requested By",
    }),
    columnHelper.accessor("urgency", {
      header: () => "Urgency Level",
      cell: (info) => {
        const style = getStatusStyle(info.getValue());
        return <div style={style}> {info.getValue()}</div>;
      },
    }),
    columnHelper.accessor((rowData) => rowData, {
      id: "actions",
      header: () => "Actions",
      cell: (info) => (
        <div className="flex gap-3 items-center justify-center">
          <button
            className="bg-[#0284C7] px-2 rounded-full p-1 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedRequest(info.row.original);
              setModalOpen(true);
            }}
          >
            View
          </button>
        </div>
      ),
    }),
  ];

  return (
    <div className="h-full w-full px-6">
      {/* Tabs */}
      <div className="flex border-b-2 mb-6">
        <div className="px-4 py-2 text-black text-lg font-bold cursor-pointer ">
          Welcome Chi-Joel
        </div>
        
      </div>

      {/* Filters */}
      <div className="flex gap-8 mb-6">
        <h3 className="text-xl font-semibold py-2">Request Orders</h3>
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

      {/* Status Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Suspense fallback={<CardsSkeleton />}>
        <Card title="Open" number="2" />
        <Card title="In Progress" number="2" />
        <Card title="On Hold" number="0" />
        <Card title="Completed" number="1" />
        </Suspense>
      </div>

      {/* Request Table */}
      <Table
        data={requestData ?? []}
        error={false}
        loading={false}
        columns={columns as Array<ColumnDef<IRequest>>}
      />

      {/* Modal Component */}
      {isModalOpen && selectedRequest && (
        <RequestDetails 
          request={selectedRequest} 
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default WorkFlow;
