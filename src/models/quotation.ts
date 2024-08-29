export interface Quotation {
    id: string;
    vendorId: string;
    requestId: string;
    items: QuotationItem[];
    totalPrice: number;
    createdAt: Date;
  }
  
  export interface QuotationItem {
    description: string;
    quantity: number;
    unitPrice: number;
  }