import { StaffRole } from "./staff";

export interface IBaseResponse { 
  message: string;
  success: boolean;
}

export interface ISignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  department?: string; 
  role: StaffRole; 
}

export interface ILoginResponse extends IBaseResponse {
  data: {
    token: string;
    data: IUserData;
  };
}


export interface IUserData {
  _id: string;
  businessRef: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  account: {
    category: string;
    type: string;
    role: string;
  };
  password: string;
  referral: {
    code: string;
  };
  address: string;
  city: string;
  state: string;
  country: string;
  emailVerified: boolean;
  archive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  businessLogo: string;
}

export interface ISignUpResponse extends IBaseResponse {
  newUser: Array<{
    businessRef: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    otp: string;
    otpExpiration: string;
    address: string;
    city: string;
    state: string;
    country: string;
    emailVerified: boolean;
    archive: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
    account?: {
      category: string;
      type: string;
      role: string;
    };
    __v: number;
  }>;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse extends IBaseResponse {
  token: string;
  staff: Staff; 
}

export interface IVerifyOTPPayload {
  email: string;
  otp: string;
}

export interface IVerifyOTPResponse extends IBaseResponse {

}

export interface IPasswordResetPayload {
  email: string; 
}

export interface IPasswordResetResponse extends IBaseResponse {

}

export interface IPasswordUpdatePayload {
  email: string;
  otp: string; // If OTP would be integrated
  newPassword: string;
  confirmPassword: string; 
}

export interface IPasswordUpdateResponse extends IBaseResponse {
}


export interface Staff {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: StaffRole;
  department?: string; 
 }