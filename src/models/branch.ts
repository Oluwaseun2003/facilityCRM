import { type IBaseResponse } from "./auth";
export interface IBranchesResponse extends IBaseResponse {
  data: IBranch[];
}

export interface IBranch {
  _id: string;
  createdAt: string;
  updatedAt: string;
  businessRef: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  archive: boolean;
}

export interface IBranchPayload {
  address: string;
  city: string;
  state: string;
  country: string;
  name: string;
  phone: string;
}
