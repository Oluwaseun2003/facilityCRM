export interface Staff {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: StaffRole; 
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
  }