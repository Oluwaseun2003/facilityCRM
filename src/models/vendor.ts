export interface Vendor {
    id: string;
    name: string;
    contactPerson: string;
    email: string;
    phoneNumber: string;
    services: string[]; //["Electrical", "Plumbing", "HVAC"]
  }