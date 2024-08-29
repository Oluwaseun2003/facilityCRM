// models/base.ts

export interface IBaseResponse {
    status: string;      
    message: string;     
    data?: any;          
    errorCode?: string;  
    timestamp?: string;
  }
  
  export interface ICreatedBy {
    id: string;          
    name: string;        
    role: string;       
    email?: string;      
  }
  
  export interface IStaff {
    _id: string;          
    name: string;        
    role: string;         
    email?: string;     
    isActive?: boolean;  
  }
  
  export interface IQueryParams {
    startDate?: string;  
    endDate?: string;    
    approved?: string;   
    staff?: string;      
    customer?: string;   
    staffId?: string;   
    status?: string;     
    type?: string;       
    ref?: string;        
    branchId?: string;   
    category?: string;   
    name?: string;      
    page?: number;      
    limit?: number;     
    item?: string;       
    package?: string;   
    role?: string;      
    purchaseRef?: string;
    sortBy?: string;    
    order?: "asc" | "desc";
    createdBy?: string; 
  }
  