import { IBranch } from "./branch";

export interface Staff {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: StaffRole; 
    branch?: IBranch["name"];
    department?: string; 
  }
  
  export enum StaffRole {
    Requester = 'Requester',
    FacilityTeam = 'FacilityTeam',
    Procurement = 'Procurement',
    InternalAudit = 'InternalAudit',
    Finance = 'Finance',
    HeadOfDepartment = 'HeadOfDepartment', 
    Executive = 'Executive',
    name = "name", 
  }

  export interface Imanagement {
    id: string,
    role: StaffRole,
    department: String;
  }
