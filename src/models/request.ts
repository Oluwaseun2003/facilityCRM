import { Quotation } from "./quotation";
import { Vendor } from "./vendor";
export interface Request {
    id: string;
    requesterId: string;
    requestType: RequestType;
    status: RequestStatus;
    description: string;
    location: string; // "Room 201, Building A"
    createdAt: Date;
    updatedAt: Date;
    comments?: Comment[]; // See Comment type below
    assignedTo?: string; // User ID of assigned staff
    vendor?: Vendor; // If a vendor is selected
    quotations?: Quotation[];
    approvedBy?: string[]; // staff IDs of approvers
  }
  
  export enum RequestType {
    Repair = 'Repair',
    Replacement = 'Replacement',
  }
  
  export enum RequestStatus {
    Submitted = 'Submitted',
    InProgress = 'InProgress',
    Completed = 'Completed',
    Rejected = 'Rejected',
  } 