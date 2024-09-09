import { Quotation } from "../models/quotation";
import { Vendor } from "../models/vendor";
import { Attachment } from "./attachment";

export interface IRequest {
  title: string;
  status: string;
  location: string;
  asset: string;
  requestedBy: string;
  urgency: string;
  image:  string;
  estimatedTime: string;
  cost: string;
  quotation: Quotation;
  supplier: Vendor["name"];
  supplierNum: Vendor["phoneNumber"];
  supplierEmail: Vendor["email"];
}
