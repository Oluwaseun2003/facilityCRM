export interface Attachment {
    id: string;
    filename: string; // Original file name
    fileType: string; // e.g., "image/jpeg", "application/pdf"
    fileSize: number; // In bytes
    uploadedAt: Date;
    uploadedBy: string; // Staff ID
    url?: string; 
  }