export type Quotation = {
  id: string;
  clientName: string;
  status: string;
  date: string;
  amount: string;
  overview: {
    subject: string;
    clientName: string;
    status: string;
    requestNumber: string;
    date: string;
    creator: string;
    terms: string;
    productName: string;
  };
};